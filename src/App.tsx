import React from "react";

import { GuestHeader, Main } from "layout";
import RouteWrapper from "routes";
import styled from "styled-components";

const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template:
    "header" 56px
    "main" 1fr
    /100vw;
`;

const App: React.FC = () => {
  return (
    <Layout>
      <GuestHeader />
      <Main>
        <RouteWrapper />
      </Main>
      <div></div>
    </Layout>
  );
};

export default App;
