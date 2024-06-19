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
              </SpaceBetween>
            }
          >
            Full-time Software Development Engineer at Amazon Web Services
          </Container>
        </ColumnLayout>
        <TechStack />
      </SpaceBetween>
    </ContentLayout>
  );
};
