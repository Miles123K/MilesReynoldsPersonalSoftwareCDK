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
import Tiles from "@cloudscape-design/components/tiles";
import axios from "axios";

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [date, setDate] = React.useState("");

  const [type, setType] = React.useState("");

  const [errorText, setErrorText] = React.useState("");

  // POST to api.miles123k.com/contact

  const onIssueFormSubmit = () => {
    if (date !== "") {
      return; // bot
    }
    if (name === "") {
      setErrorText("Please enter a name");
      return;
    }
    if (email === "") {
      setErrorText("Please enter an email");
      return;
    }
    if (message === "") {
      setErrorText("Please enter a message");
      return;
    }
    if (type === "") {
      setErrorText("Please enter a type");
      return;
    }
    setErrorText("");

    axios
      .post("https://api.miles123k.com/contact", {
        name,
        email,
        message,
        type,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Container header={<Header variant="h2">Contact Form</Header>}>
          <p>
            If you spot any bugs or have any ideas, please let me know by using
            the form below!
          </p>
          <Form
            errorText={errorText}
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
              <FormField label="Message">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.detail.value)}
                />
              </FormField>
              <FormField label="Type">
                <Tiles
                  onChange={(e) => setType(e.detail.value)}
                  value={type}
                  items={[
                    { value: "issues", label: "Issues" },
                    { value: "ideas", label: "Ideas" },
                    { value: "other", label: "Other" },
                  ]}
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
