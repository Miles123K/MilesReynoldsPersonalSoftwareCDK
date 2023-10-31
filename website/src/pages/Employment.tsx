import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Alert from "@cloudscape-design/components/alert";

export const Employment = () => {
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
            Employment
          </Header>
          <Alert>
            I am seeking New Grad Software Engineer positions for May 2024.
          </Alert>
        </SpaceBetween>
      }
    >
      <SpaceBetween size="l">
        <Container
          header={
            <Header
              variant="h2"
              description="May 2023 - August 2023, Arlington, VA"
              info={
                <Link href="https://aws.amazon.com/" target="_blank">
                  Info
                </Link>
              }
            >
              Amazon Web Services
            </Header>
          }
        >
          Software Development Engineer Intern at AWS under Insights and
          Optimizations, Commerce Platform.
        </Container>
        <Container
          header={
            <Header
              variant="h2"
              description="May 2022 - August 2022, Singapore"
              info={
                <Link href="https://www.quantedge.com/" target="_blank">
                  Info
                </Link>
              }
            >
              Quantedge Capital
            </Header>
          }
        >
          Software Engineer Intern at Quantedge Capital.
        </Container>
        <Container
          header={
            <Header
              variant="h2"
              description="Multiple Terms, Washington, DC"
              info={
                <Link href="https://www.georgetown.edu/" target="_blank">
                  Info
                </Link>
              }
            >
              Georgetown University
            </Header>
          }
        >
          COSC2010/COSC160 Data Structures Course Assistant (Fall 2022, Fall
          2023).
          <br />
          COSC051&052 Computer Science I*II Course Assistant (Fall 2021, Spring
          2021).
        </Container>
        <Container
          header={
            <Header
              variant="h2"
              description="March 2020 - July 2020, Shanghai, China"
              info={
                <Link href="https://www.drpcapital.com/" target="_blank">
                  Info
                </Link>
              }
            >
              DRP Capital
            </Header>
          }
        >
          Business Analyst Intern at DRP Capital (Shanghai).
        </Container>
      </SpaceBetween>
    </ContentLayout>
  );
};
