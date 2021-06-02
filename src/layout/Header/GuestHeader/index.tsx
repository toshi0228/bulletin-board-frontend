import React from "react";
import styled from "styled-components";
import { Text } from "components/atom";
import { colorCode } from "constance";
import { path } from "config";
import { useHistory } from "react-router-dom";

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

const GuestHeader: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Text
        cursor={"pointer"}
        color={colorCode.white}
        onClick={() => history.push(path.root)}
      >
        ゲストヘッダー
      </Text>
      <Nav>
        {items.map((item, index) => (
          <Text
            key={index.toString()}
            cursor={"pointer"}
            color={colorCode.white}
            onClick={() => history.push(item.path)}
          >
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
    path: path.root,
    func: "",
  },
  {
    text: "投稿を作成",
    path: path.bulletinBoardCreate,
    func: "",
  },
  {
    text: "Login",
    path: path.signIn,
    func: "",
  },
  {
    text: "Register",
    path: path.signUp,
    func: "",
  },
];
