import React from "react";
import styled from "styled-components";
import { Text } from "components/atom";
import { colorCode } from "constance";

const Container = styled.header`
  background: ${colorCode.navy};
  padding: 0 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 0 20px;
`;

const GuestHeader = () => {
  return (
    <Container>
      <Text>ゲストヘッダー</Text>
      <Nav>
        {items.map((item, index) => (
          <Text cursor={"pointer"} color={colorCode.white}>
            {item.text}
          </Text>
        ))}
      </Nav>
    </Container>
  );
};

export default GuestHeader;

const items = [
  {
    text: "みんなの投稿",
    path: "/",
    func: "",
  },
  {
    text: "投稿を作成",
    path: "/",
    func: "",
  },
  {
    text: "Login",
    path: "/",
    func: "",
  },
  {
    text: "Register",
    path: "/",
    func: "",
  },
];
