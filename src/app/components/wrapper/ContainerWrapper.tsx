import Container from "@mui/material/Container";
import { ReactElement } from "react";

interface ContainerWrapperI {
  children: React.ReactNode;
  width: 'sm' | 'md' | 'lg';
}

function ContainerWrapper(props: ContainerWrapperI): ReactElement {
  const { children, width } = props;
  return <Container maxWidth={width}>{children}</Container>;
}

export default ContainerWrapper;
