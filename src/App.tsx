import React from "react";

import { GuestHeader, Main } from "layout";
import RouteWrapper from "routes";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template:
    "header" 56px
    "main" 200px
    /100vw;
`;

const App: React.FC = () => {
  return (
    <Layout>
      <GuestHeader />
      <Main>
        <RouteWrapper />
      </Main>
    </Layout>
  );
};

export default App;
