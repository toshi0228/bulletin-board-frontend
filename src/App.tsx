import React from "react";
import { Button } from "antd";

import { GuestHeader, Main } from "layout";
import styled from "styled-components";

const AntButton = styled(Button)`
  background: pink;
`;

const Layout = styled.div`
  display: grid;
  grid-template:
    "header" 56px
    "main" 200px
    /100vw;
`;

const App = () => {
  return (
    <Layout>
      <GuestHeader />
      <Main>
        <div>aa</div>
        {/* <AntButton>a</AntButton> */}
      </Main>
    </Layout>
  );
};

export default App;
