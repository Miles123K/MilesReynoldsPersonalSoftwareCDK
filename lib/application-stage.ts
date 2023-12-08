import {
  DefaultStackSynthesizer,
  StackSynthesizer,
  Stage,
  StageProps,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import { WebsiteStack } from "./website-stack";
import { ServiceStack } from "./service-stack";

interface ApplicationStageProps extends StageProps {
  readonly stage: string;
}

export class ApplicationStage extends Stage {
  constructor(scope: Construct, id: string, props: ApplicationStageProps) {
    super(scope, id, props);

    const serviceStack = new ServiceStack(this, "ServiceStack", {
      stage: props.stage,
    });

    const websiteStack = new WebsiteStack(this, "WebsiteStack", {
      stage: props.stage,
      synthesizer: new DefaultStackSynthesizer({
        deployRoleArn:
          "arn:aws:iam::292858157370:role/CloudFormationServiceRole",
        cloudFormationExecutionRole:
          "arn:aws:iam::292858157370:role/CloudFormationServiceRole",
      }),
    });
  }
}
