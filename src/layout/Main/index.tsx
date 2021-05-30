import React from "react";
import styled from "styled-components";

const Container = styled.main`
  margin: 56px;
`;

const Main: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
