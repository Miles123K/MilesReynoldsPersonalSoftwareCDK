import { SecretValue, Stack, StackProps } from "aws-cdk-lib";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { ApplicationStage } from "./application-stage";

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "ServicePipeline", {
      pipelineName: "ServicePipeline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub(
          "Miles123K/MilesReynoldsPersonalSoftwareCDK",
          "master",
          {
            authentication: SecretValue.secretsManager(
              "personal/Github/Access"
            ),
          }
        ),
        commands: [
          "cd website",
          "npm ci",
          "npm run build",
          "cd ..",
          "npm ci",
          "npm run build",
          "npx cdk synth",
        ],
      }),
      dockerEnabledForSelfMutation: true,
      dockerEnabledForSynth: true,
    });

    const alphaStage = pipeline.addStage(
      new ApplicationStage(this, "Alpha", {
        stage: "alpha",
        env: props?.env,
      })
    );

    // https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html
  }
}
