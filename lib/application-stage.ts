import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { WebsiteStack } from "./website-stack";

interface ApplicationStageProps extends StageProps {
  readonly stage: string;
}

export class ApplicationStage extends Stage {
  constructor(scope: Construct, id: string, props: ApplicationStageProps) {
    super(scope, id, props);

    const websiteStack = new WebsiteStack(this, "WebsiteStack", {
      stage: props.stage,
    });
  }
}
