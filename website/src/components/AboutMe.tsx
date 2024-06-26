import * as React from "react";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";

export const AboutMe: React.FunctionComponent<{
  footer?: React.ReactNode;
}> = ({ footer }) => {
  return (
    <Container header={<Header variant="h2">About Me</Header>} footer={footer}>
      I am a full-stack software engineer interested in machine learning, cloud
      computing, and distributed systems. I also love learning about general
      topics in computer science, mathematics, physics, aerospace engineering,
      and political philosophy. I hold the rank of blue belt in Brazilian Jiu
      Jitsu specializing in No-Gi.
    </Container>
  );
};
