import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import Grid from "@cloudscape-design/components/grid";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";

export const JiuJitsu = () => {
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
            Jiu Jitsu
          </Header>
        </SpaceBetween>
      }
    >
      <Cards
        ariaLabels={{
          itemSelectionLabel: (e, n) => `select ${n.name}`,
          selectionGroupLabel: "Item selection",
        }}
        cardDefinition={{
          header: (item) => <Link>{item.name}</Link>,
          sections: [
            {
              id: "location",
              content: (item) => item.location,
            },
          ],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
        items={[
          {
            name: "BETA Academy",
            location: "Washington, DC",
          },
          {
            name: "10th Planet Jiu Jitsu NYC",
            location: "New York, NY",
          },
          {
            name: "Evolve MMA Far East Square",
            location: "Singapore",
          },
          {
            name: "Drills Club",
            location: "Shanghai, China",
          },
        ]}
        loadingText="Loading resources"
        empty={
          <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No resources</b>
              <Button>Create resource</Button>
            </SpaceBetween>
          </Box>
        }
        header={<Header>Past Gyms</Header>}
      />
    </ContentLayout>
  );
};
