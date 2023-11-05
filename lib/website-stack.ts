import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import {
  AnyPrincipal,
  ManagedPolicy,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

interface WebsiteStackProps extends StackProps {
  readonly stage: string;
}

export class WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props: WebsiteStackProps) {
    super(scope, id);

    const bucket = new Bucket(this, "WebsiteBucket", {
      bucketName: `miles-reynolds-${props.stage}-website`,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      publicReadAccess: true,
    });

    bucket.addToResourcePolicy(
      new PolicyStatement({
        actions: ["s3:*"],
        resources: [bucket.bucketArn],
        principals: [new AnyPrincipal()],
      })
    );

    const distribution = new Distribution(this, "Distribution", {
      defaultBehavior: { origin: new S3Origin(bucket) },
    });

    const bucketDeploymentRole = new Role(this, "BucketDeploymentRole", {
      assumedBy: new ServicePrincipal("lambda.amazonaws.com"),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"),
      ],
    });

    const bucketDeployment = new BucketDeployment(this, "DeployWebsite", {
      sources: [Source.asset("website")],
      destinationBucket: bucket,
      distribution,
      role: bucketDeploymentRole,
    });
  }
}
