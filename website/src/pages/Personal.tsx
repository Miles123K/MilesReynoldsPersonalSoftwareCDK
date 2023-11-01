import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import { AboutMe } from "../components/AboutMe";

export const Personal = () => {
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
            Personal
          </Header>
        </SpaceBetween>
      }
    >
      <SpaceBetween size="l">
        <AboutMe
          footer={
            <SpaceBetween size="xs" direction="horizontal">
              <Button href="#/education">Education</Button>
              <Button href="#/jiu-jitsu">Jiu Jitsu</Button>
            </SpaceBetween>
          }
        />
        <Container
          header={
            <Header
              variant="h2"
              //   description="Frontend Contributions"
            >
              Hometown & Residence
            </Header>
          }
        >
          I am from Shanghai, China and currently live in Washington, D.C.
        </Container>
      </SpaceBetween>
    </ContentLayout>
  );
};
