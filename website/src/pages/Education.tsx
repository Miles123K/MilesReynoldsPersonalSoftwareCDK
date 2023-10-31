import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import Grid from "@cloudscape-design/components/grid";
import { ContentWithIcon } from "../components/ContentWithIcon";

export const Education = () => {
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
            Education
          </Header>
          <Alert>
            I am seeking to enroll in a MS program in Computer Science for Fall
            2024.
          </Alert>
        </SpaceBetween>
      }
    >
      <SpaceBetween size="l">
        <Container
          header={
            <Header
              variant="h2"
              description="August 2020 - May 2024"
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
          I am working toward a B.S in Mathematics and B.A in Computer Science
          with a minor in Physics.
        </Container>
        <Container
          header={
            <Header
              variant="h2"
              description="August 2014 - May 2020"
              info={
                <Link href="https://gubei-en.suis.com.cn/" target="_blank">
                  Info
                </Link>
              }
            >
              Shanghai United International School
            </Header>
          }
        >
          I attended SUIS Gubei for high school and graduated with an IB Diploma
          (HL - Math, Physics, Chemistry. SL - English, Chinese, History).
        </Container>
      </SpaceBetween>
    </ContentLayout>
  );
};
