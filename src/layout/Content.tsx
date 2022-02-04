import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding: 10px;
`;

function Content({ children }: { children: ReactElement }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Content;
