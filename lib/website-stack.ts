import { CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import {
  ARecord,
  AaaaRecord,
  HostedZone,
  RecordTarget,
} from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import {
  BlockPublicAccess,
  Bucket,
  BucketAccessControl,
} from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

interface WebsiteStackProps extends StackProps {
  readonly stage: string;
}

export class WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props: WebsiteStackProps) {
    super(scope, id);

    const siteBucket = new Bucket(this, "WebsiteBucket", {
      bucketName: `miles-reynolds-${props.stage}-website`,
      publicReadAccess: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ACLS,
      accessControl: BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
      websiteIndexDocument: "index.html",
    });

    const hostZone = HostedZone.fromHostedZoneAttributes(this, "HostZone", {
      hostedZoneId: "Z08535481J9KU8GSW1BES",
      zoneName: "miles123k.com",
    });

    const siteDomain = hostZone.zoneName;

    const certificate = new Certificate(this, "Certificate", {
      domainName: siteDomain,
      validation: CertificateValidation.fromDns(hostZone),
    });

    const distribution = new Distribution(this, "Distribution", {
      defaultBehavior: { origin: new S3Origin(siteBucket) },
      certificate,
      domainNames: [siteDomain],
      defaultRootObject: "index.html",
    });

    const bucketDeploymentRole = new Role(this, "BucketDeploymentRole", {
      assumedBy: new ServicePrincipal("lambda.amazonaws.com"),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"),
      ],
    });

    const bucketDeployment = new BucketDeployment(this, "DeployWebsite", {
      sources: [Source.asset("website/build")],
      destinationBucket: siteBucket,
      distribution,
      role: bucketDeploymentRole,
    });

    new ARecord(this, "SiteAliasRecord", {
      zone: hostZone,
      recordName: siteDomain,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });

    new AaaaRecord(this, "SiteAliasRecordIPv6", {
      zone: hostZone,
      recordName: siteDomain,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });
  }
}
