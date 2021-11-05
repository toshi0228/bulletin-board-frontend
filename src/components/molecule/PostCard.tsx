import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";
import { Button as AntButton, message } from "antd";
import { Text } from "components/atom";
import { UserContext } from "context";
import { useHistory } from "react-router-dom";
import { path } from "config";
import { storage } from "helper";
import {
  deleteByIdBulletinBoardApi,
  createBulletinBoardLikedApi,
  deleteBulletinBoardLikedApi,
} from "apis";

interface IPostCardProps {
  id: number;
  title: string;
  contents: string;
  contributor: string;
  like: number;
  isLiked: boolean; //いいねしたことがあるかどうか
}

const Container = styled.div`
  border: solid 1px #eeeeee;
  padding: 24px;
  width: 100%;
  margin-top: 24px;
  cursor: pointer;
`;

const GoodIconWrapper = styled.div`
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
  const { id, title, contents, contributor, like, isLiked } = porps;
  const history = useHistory();
  const { userName, setUserName } = useContext(UserContext);
  const [isClickGood, setClickGood] = useState<boolean>(false);
  const [goodNumber, setGoodNumber] = useState<number>(like);

  useEffect(() => {
    // いいねを押したことがあれば、色をつける
    setClickGood(isLiked);
  }, []);

  const deletePostCard = (id: string) => {
    deleteByIdBulletinBoardApi(id)
      .then((res) => {
        message.success("削除しました");
        setTimeout(() => window.location.reload(), 1000);
      })
      .catch(() => message.error("削除に失敗しました"));
  };

  const onClickGoodIcon = (id: number) => {
    setClickGood(!isClickGood);
    if (isClickGood) {
      setGoodNumber(goodNumber - 1);
      deleteBulletinBoardLikedApi(id.toString()).then((res) => {
        console.log("いいね削除");
      });
    } else {
      setGoodNumber(goodNumber + 1);
      createBulletinBoardLikedApi(id.toString()).then((res) => {
        console.log("いいね");
      });
    }
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

      <GoodIconWrapper>
        <Text cursor="pointer">
          <HeartOutlined
            onClick={() => onClickGoodIcon(id)}
            style={{ color: isClickGood ? "pink" : "black" }}
          />
        </Text>
        <Text ml={4} fs={14} cursor="pointer">
          {goodNumber}
        </Text>
      </GoodIconWrapper>

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
