import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import Grid from "@cloudscape-design/components/grid";

export const Home = () => {
  return (
    <ContentLayout
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            // info={<Link>Info</Link>}
            // description="This is a generic description used in the header."
            // actions={<Button variant="primary">Button</Button>}
          >
            Welcome to Miles Reynolds' Personal Website
          </Header>

          <Alert>
            As of October 2023, I am actively seeking employment as Software
            Engineer.
          </Alert>
          <Alert>
            As of October 2023, I am also applying to graduate school for MS in
            Computer Science.
          </Alert>
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
        <Grid gridDefinition={[{ colspan: 6 }, { colspan: 6 }]}>
          <Container
            header={<Header variant="h2">About Me</Header>}
            footer={
              <SpaceBetween size="s" direction="horizontal">
                <Button href="#/education">Education</Button>
                <Button href="#/employment">Jiu Jitsu</Button>
              </SpaceBetween>
            }
          >
            I am currently a senior at Georgetown University studying Computer
            Science and Mathematics. I am interested in full-stack development,
            machine learning, and distributed systems. I also love learning
            about general topics in computer science, mathematics, physics,
            aerospace engineering, and political philosophy. I hold the rank of
            blue belt in Brazilian Jiu Jitsu specializing in No-Gi.
          </Container>
          <Container header={<Header variant="h2">Current Endevaors</Header>}>
            My courses for Fall 2023 are deep reinforcement learning,
            distributed algorithms, advanced linear algebra, and differential
            equations. I am also working as a software engineering consultant
            for <Link href="https://www.gainguard.io/">GainGuard</Link>.
          </Container>
        </Grid>
      </SpaceBetween>
    </ContentLayout>
  );
};
