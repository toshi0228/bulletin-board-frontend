import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";
import { Button as AntButton, message } from "antd";
import { Text } from "components/atom";
import { UserContext } from "context";
import { useHistory } from "react-router-dom";
import { path } from "config";
import { storage } from "helper";
import { deleteByIdBulletinBoardApi } from "apis";

interface IPostCardProps {
  id: number;
  title: string;
  contents: string;
  contributor: string;
  like: number;
}

const Container = styled.div`
  border: solid 1px #eeeeee;
  padding: 24px;
  width: 100%;
  margin-top: 24px;
  cursor: pointer;
`;

const GoogIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;
`;

const Button = styled(AntButton)`
  width: 96px;
`;

const PostCard = (porps: IPostCardProps) => {
  const { id, title, contents, contributor, like } = porps;
  const history = useHistory();
  const { userName, setUserName } = useContext(UserContext);

  const deletePostCard = (id: string) => {
    deleteByIdBulletinBoardApi(id)
      .then((res) => {
        message.success("削除しました");
        setTimeout(() => window.location.reload(), 1000);
      })
      .catch(() => message.error("削除に失敗しました"));
  };

  return (
    <Container>
      <Text fs={20} cursor="pointer">
        {title}
      </Text>
      <Text fs={14} mt={8} cursor="pointer">
        {contents}
      </Text>
      <Text fs={14} mt={8} cursor="pointer">
        投稿者: {contributor}
      </Text>

      <GoogIconWrapper>
        <Text cursor="pointer">
          <HeartOutlined />
        </Text>
        <Text ml={4} fs={14} cursor="pointer">
          {like}
        </Text>
      </GoogIconWrapper>

      {contributor === storage.name ? (
        <ButtonWrapper>
          <Button onClick={() => history.push(path.bulletinBoardEdit(id))}>
            編集する
          </Button>
          <Button onClick={() => deletePostCard(id.toString())}>削除</Button>
        </ButtonWrapper>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default PostCard;
