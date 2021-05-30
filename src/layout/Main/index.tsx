import React from "react";
import styled from "styled-components";

const Container = styled.main`
  /* background: pink; */
`;

const Main: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
