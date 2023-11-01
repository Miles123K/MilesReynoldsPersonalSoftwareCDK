import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";

export const Projects = () => {
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
            Projects
          </Header>
          <Alert>
            If you have a project idea or would like to collaborate, please let
            me know by using the form on the contact page!
          </Alert>
        </SpaceBetween>
      }
    >
      <SpaceBetween size="l">
        <Container
          header={
            <Header
              variant="h2"
              description="Frontend Contributions"
              actions={
                <Button
                  href="https://lirissmile.com/"
                  target="_blank"
                  iconAlign="right"
                  iconName="external"
                >
                  Link to Site
                </Button>
              }
            >
              Liri's Smile
            </Header>
          }
        >
          Open Source Intelligence (OSINT) tool for finding missing persons in
          the wake of the recent war in Israel. I implemented the components and
          workflows for authentication and missing persons information
          submission.
        </Container>
      </SpaceBetween>
    </ContentLayout>
  );
};
