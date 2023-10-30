import Container from "@cloudscape-design/components/container";
import Grid from "@cloudscape-design/components/grid";

import React, { FunctionComponent } from "react";

export const ContentWithIcon: FunctionComponent<{
  imgSrc: string;
  content: React.ReactNode;
}> = ({ imgSrc, content }) => {
  return (
    <Grid gridDefinition={[{ colspan: 2 }, { colspan: 10 }]}>
      <Container>
        <img src={imgSrc} style={{ height: "100%", width: "100%" }} />
      </Container>
      {content}
    </Grid>
  );
};
