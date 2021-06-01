import React from "react";

import { GuestHeader, MemeberHeader, Main } from "layout";
import RouteWrapper from "routes";
import styled from "styled-components";
import { storage } from "helper";

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
      {storage.token ? <MemeberHeader /> : <GuestHeader />}
      <Main>
        <RouteWrapper />
      </Main>
    </Layout>
  );
};

export default App;
