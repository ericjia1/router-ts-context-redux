import { Typography } from "@mui/material";
import React from "react";

interface PageTitleI {
  title: string;
}

const PageTitle = (props: PageTitleI) => {
  const { title } = props;
  return (
    <Typography gutterBottom variant="h4" component="div">
      {title}
    </Typography>
  );
};

export default PageTitle;
