import { CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import {
  ARecord,
  AaaaRecord,
  HostedZone,
  RecordTarget,
} from "aws-cdk-lib/aws-route53";

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

    const rootHostZone = HostedZone.fromHostedZoneId(
      this,
      "RootHostZone",
      "Z08535481J9KU8GSW1BES"
    );

    const domainName = "api.miles123k.com";
    const certificate = new Certificate(this, "SiteServiceCertificate", {
      domainName,
      validation: CertificateValidation.fromDns(),
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

    const customDomain = api.addDomainName("SiteServiceCustomDomain", {
      domainName,
      certificate,
    });

    customDomain.addBasePathMapping(api, {
      basePath: props.stage,
    });

    new ARecord(this, "SiteServiceAliasRecord", {
      zone: rootHostZone,
      recordName: "api",
      target: RecordTarget.fromAlias({
        bind: () => ({
          dnsName: customDomain.domainNameAliasDomainName,
          hostedZoneId: customDomain.domainNameAliasHostedZoneId,
        }),
      }),
    });

    new AaaaRecord(this, "SiteServiceAliasRecordIPv6", {
      zone: rootHostZone,
      recordName: "api",
      target: RecordTarget.fromAlias({
        bind: () => ({
          dnsName: customDomain.domainNameAliasDomainName,
          hostedZoneId: customDomain.domainNameAliasHostedZoneId,
        }),
      }),
    });

    const contact = api.root.addResource("contact");
    contact.addMethod("POST", new LambdaIntegration(lambda));
  }
}
