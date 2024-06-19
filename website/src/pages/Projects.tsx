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
              description="Fullstack"
              actions={
                <Button
                  href="https://getfluxpay.com/"
                  target="_blank"
                  iconAlign="right"
                  iconName="external"
                >
                  Link to Site
                </Button>
              }
            >
              Flux Pay
            </Header>
          }
        >
          Fin-tech startup that provides a platform for businesses to manage
          account receivables and payables. I designed and implemented the
          entire cloud architecture on AWS, developed the React web application,
          and implemented the backend services.
        </Container>
        <Container
          header={
            <Header
              variant="h2"
              description="Full Stack"
              actions={
                <Button
                  href="https://www.gainguard.io/"
                  target="_blank"
                  iconAlign="right"
                  iconName="external"
                >
                  Link to Site
                </Button>
              }
            >
              GainGuard
            </Header>
          }
        >
          Wearable sports technology startup that uses sensors and ML algorithms
          to reduce injury and increase training efficiency among athletes. I
          developed their React Native IOS mobile application, designed their
          cloud architecture on AWS, and implemented various backend services.
        </Container>
        <Container
          header={
            <Header
              variant="h2"
              description="Frontend"
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
        <Container
          header={
            <Header
              variant="h2"
              description="Front End"
              actions={
                <Button
                  href="https://deltaphiepsilon.net/"
                  target="_blank"
                  iconAlign="right"
                  iconName="external"
                >
                  Link to Site
                </Button>
              }
            >
              Delta Phi Epsilon Professional Foreign Service Fraternity
            </Header>
          }
        >
          Oversaw the WordPress website administration and development.
        </Container>
      </SpaceBetween>
    </ContentLayout>
  );
};
