import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import Grid from "@cloudscape-design/components/grid";
import { TechStack } from "../components/TechStack";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import { AboutMe } from "../components/AboutMe";
import Architecture from "../assets/Architecture";

export const Home = () => {
  return (
    <ContentLayout
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            // info={<Link>Info</Link>}
            // actions={<Button variant="primary">Button</Button>}
          >
            Welcome to Miles Reynolds' Personal Website
          </Header>
        </SpaceBetween>
      }
    >
      <SpaceBetween size="l">
        <Container header={<Header variant="h2">What is this?</Header>}>
          The primary purpose of this website is to visualize my resume and
          showcase my work to potential employers. I also use it as a sandbox to
          test out my personal projects. If you spot any bugs or have any ideas,
          please let me know by using the form on the contact page!
        </Container>
        <ColumnLayout columns={2}>
          <AboutMe
            footer={
              <SpaceBetween size="xs" direction="horizontal">
                <Button href="#/education">Education</Button>
                <Button href="#/jiu-jitsu">Jiu Jitsu</Button>
                <Button href="#/personal">Personal</Button>
              </SpaceBetween>
            }
          />
          <Container
            fitHeight
            header={<Header variant="h2">Current Endevaors</Header>}
            footer={
              <SpaceBetween size="xs" direction="horizontal">
                <Button href="#/employment">Employment</Button>
                <Button href="#/projects">Projects</Button>
                <Button
                  href="https://www.gainguard.io/"
                  iconAlign="right"
                  iconName="external"
                >
                  GainGuard
                </Button>
              </SpaceBetween>
            }
          >
            For Fall 2023 I am enrolled in Deep Reinforcement Learning,
            Distributed Algorithms, Advanced Linear Algebra, and Differential
            Equations. I am also working as a software engineering consultant
            for <Link href="https://www.gainguard.io/">GainGuard</Link>. I am
            also working as a course assistant for COSC-2010 Data Structures at
            Georgetown University.
          </Container>
        </ColumnLayout>
        <TechStack />

        <Grid
          gridDefinition={[
            { colspan: { default: 12, xs: 6, s: 7, m: 8 } },
            { colspan: { default: 12, xs: 6, s: 5, m: 4 } },
          ]}
        >
          <Container
            fitHeight
            header={<Header variant="h2">Site Information</Header>}
          >
            This website is built using React, TypeScript, and the Cloudscape
            Design System. It is hosted on AWS using S3 and CloudFront. The
            backend is built using AWS Lambda and API Gateway. The
            infrastructure is managed using AWS CDK. I am notified of any
            messages sent through the contact form using AWS SNS and SES.
          </Container>
          <Container>
            <div
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Architecture />
            </div>
          </Container>
        </Grid>
      </SpaceBetween>
    </ContentLayout>
  );
};
