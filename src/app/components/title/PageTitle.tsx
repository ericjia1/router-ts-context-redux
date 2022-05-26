import { Container, Typography } from "@mui/material";
import React from "react";

interface PageTitleI {
  title: string;
}

const PageTitle = (props: PageTitleI) => {
  const { title } = props;
  return (
    <Container maxWidth="lg" sx={{mt: 1, mb: 2}}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
    </Container>
  );
};

export default PageTitle;
