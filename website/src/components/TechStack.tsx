import { Badge, SpaceBetween } from "@cloudscape-design/components";
import Container from "@cloudscape-design/components/container";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import Grid from "@cloudscape-design/components/grid";
import Header from "@cloudscape-design/components/header";

import React, { FunctionComponent } from "react";

export const TechStack: FunctionComponent<{}> = ({}) => {
  return (
    <Container header={<Header variant="h2">My Tech Stack</Header>}>
      <ExpandableSection headerText="Programming Languages" defaultExpanded>
        <SpaceBetween size="xxs" direction="horizontal">
          <Badge color="green">Java</Badge>
          <Badge color="green">TypeScript</Badge>
          <Badge color="green">Python</Badge>
          <Badge color="green">C#</Badge>
          <Badge color="green">JavaScript</Badge>
          <Badge color="green">C++</Badge>
          <Badge color="blue">HTML</Badge>
          <Badge color="blue">CSS</Badge>
          <Badge color="red">Bash</Badge>
        </SpaceBetween>
      </ExpandableSection>
      <ExpandableSection headerText="Frameworks & Libraries" defaultExpanded>
        <SpaceBetween size="xxs" direction="horizontal">
          <Badge color="green">React</Badge>
          <Badge color="green">Next.js</Badge>
          <Badge color="green">React Native</Badge>
          <Badge color="green">Django</Badge>
          <Badge color="blue">AWS CDK</Badge>
          <Badge color="blue">Docker</Badge>
          <Badge color="red">PyTorch</Badge>
        </SpaceBetween>
      </ExpandableSection>
      <ExpandableSection headerText="IDE Software" defaultExpanded>
        <SpaceBetween size="xxs" direction="horizontal">
          <Badge color="green">VS Code</Badge>
          <Badge color="green">Visual Studio</Badge>
          <Badge color="blue">Android Studio</Badge>
        </SpaceBetween>
      </ExpandableSection>
    </Container>
  );
};
