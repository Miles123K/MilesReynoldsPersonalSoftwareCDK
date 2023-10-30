import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";

export const SideNav = () => {
  const [activeHref, setActiveHref] = React.useState("#/page1");
  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: "Miles123K" }}
      onFollow={(event) => {
        if (!event.detail.external) {
          //   event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={[
        { type: "link", text: "Employment", href: "#/employment" },
        { type: "link", text: "Education", href: "#/education" },
        { type: "link", text: "Projects", href: "#/projects" },
        { type: "link", text: "Personal", href: "#/personal" },
        { type: "link", text: "Jiu Jitsu", href: "#/jiu-jitsu" },
        { type: "divider" },
        { type: "link", text: "Contact", href: "#/contact" },
      ]}
    />
  );
};
