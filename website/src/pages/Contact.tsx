import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Textarea from "@cloudscape-design/components/textarea";

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [issue, setIssue] = React.useState("");
  const [date, setDate] = React.useState("");

  const onIssueFormSubmit = () => {
    if (date !== "") {
      return; // bot
    }
    // TODO: implement
  };

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
            Contact
          </Header>
        </SpaceBetween>
      }
    >
      <Cards
        cardDefinition={{
          header: (item) => (
            <Link href={item.link} fontSize="heading-m">
              {item.name}
            </Link>
          ),
          sections: [
            {
              id: "username",
              //   header: "username",
              content: (item) => item.description,
            },
          ],
        }}
        cardsPerRow={[
          { cards: 1 },
          { minWidth: 500, cards: 2 },
          { minWidth: 800, cards: 3 },
        ]}
        items={[
          {
            name: "Instagram",
            description: "miles123k",
            link: "https://www.instagram.com/miles123k/",
          },
          {
            name: "Facebook",
            description: "Miles Reynolds",
            link: "https://www.facebook.com/miles.reynolds.151/",
          },
          {
            name: "LinkedIn",
            description: "miles-reynolds-3465791b0",
            link: "https://www.linkedin.com/in/miles-reynolds-3465791b0/",
          },
          {
            name: "Github",
            description: "Miles123K",
            link: "https://github.com/Miles123K/",
          },
          {
            name: "X/Twitter",
            description: "Miles123K",
            link: "https://x.com/Miles123K",
          },
        ]}
        loadingText="Loading..."
        empty={
          <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No resources</b>
            </SpaceBetween>
          </Box>
        }
        header={<Header>Social Media</Header>}
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <Container header={<Header variant="h2">Issues Form</Header>}>
          <Form
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button formAction="none" variant="link">
                  Cancel
                </Button>
                <Button variant="primary" onClick={onIssueFormSubmit}>
                  Submit
                </Button>
              </SpaceBetween>
            }
            //   header={<Header variant="h1">Form header</Header>}
          >
            <SpaceBetween direction="vertical" size="l">
              <FormField label="Name">
                <Input value={name} onChange={(e) => setName(e.detail.value)} />
              </FormField>
              <FormField label="Email">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.detail.value)}
                />
              </FormField>
              <FormField label="Issue Description">
                <Textarea
                  value={issue}
                  onChange={(e) => setIssue(e.detail.value)}
                />
              </FormField>
            </SpaceBetween>
          </Form>
        </Container>
        <input
          type="hidden"
          value={date}
          name="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </form>
    </ContentLayout>
  );
};
