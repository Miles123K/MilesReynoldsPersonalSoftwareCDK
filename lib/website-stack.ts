import { Stack } from "aws-cdk-lib";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

interface WebsiteStackProps {
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

    const distribution = new Distribution(this, "Distribution", {
      defaultBehavior: { origin: new S3Origin(bucket) },
    });

    const bucketDeployment = new BucketDeployment(this, "DeployWebsite", {
      sources: [Source.asset("../website")],
      destinationBucket: bucket,
      distribution,
    });
  }
}
