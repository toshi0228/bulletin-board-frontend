import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Select } from "antd";

import { storage } from "helper";
import { path } from "config";
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
  align-items: center;
  gap: 0 20px;
`;

const MemberHeader = () => {
  const history = useHistory();
  const { Option } = Select;

  const logout = () => {
    storage.token = "";
    window.location.reload();
  };

  console.log("layout");
  console.log(storage.name);

  return (
    <Container>
      <Text
        cursor={"pointer"}
        color={colorCode.white}
        onClick={() => history.push(path.root)}
      >
        メンバーヘッダー
      </Text>
      <Nav>
        {items.map((item, index) => {
          if (item.path === path.signIn) {
            return (
              <Select
                placeholder={item.text}
                key={index.toString()}
                style={{ width: 80 }}
              >
                <Option value="jack">
                  <Text cursor="pointer" onClick={logout}>
                    Sign Out
                  </Text>
                </Option>
              </Select>
            );
          }

          return (
            <Text
              key={index.toString()}
              cursor={"pointer"}
              color={colorCode.white}
              onClick={() => history.push(item.path)}
            >
              {item.text}
            </Text>
          );
        })}
      </Nav>
    </Container>
  );
};

export default MemberHeader;

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
    text: storage.name,
    path: path.signIn,
    func: "",
  },
];
