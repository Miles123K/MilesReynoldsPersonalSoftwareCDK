import { CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

import { Construct } from "constructs";

interface ServiceStackProps extends StackProps {
  readonly stage: string;
}

export class ServiceStack extends Stack {
  constructor(scope: Construct, id: string, props: ServiceStackProps) {
    super(scope, id);

    const lambda = new NodejsFunction(this, "SiteServiceLambda", {
      entry: "lambda/index.ts",
      handler: "handler",
    });

    const api = new RestApi(this, "SiteServiceApi", {
      restApiName: "Personal Site Service",
      description: "Basic API for my personal site",
      deployOptions: {
        stageName: props.stage,
        tracingEnabled: true,
      },
      defaultCorsPreflightOptions: {
        allowOrigins: ["*.miles123k.com", "https://miles123k.com"],
        allowMethods: ["GET", "POST", "OPTIONS"],
      },
    });

    const contact = api.root.addResource("contact");
    contact.addMethod("POST", new LambdaIntegration(lambda));
  }
}
