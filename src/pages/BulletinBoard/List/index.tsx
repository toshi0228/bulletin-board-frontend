import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostCard } from "components/molecule";
import { getListBulletinBoardApi } from "apis";
import { BulletinBoardType } from "types";
import { storage } from "helper";

const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`;

const BulletinBoardList = () => {
  const [posts, setPosts] = useState<BulletinBoardType[]>([]);

  useEffect(() => {
    getListBulletinBoardApi().then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <Container>
      みんなの投稿
      {posts.map((post, index) => {
        // いいねをしたことがあるか
        const isIGood = post.likes.find((user) => {
          return user.name === storage.name;
        });

        return (
          <PostCard
            key={index.toString()}
            id={post.id}
            title={post.title}
            contents={post.contents}
            contributor={post.user.name}
            like={post.likes.length}
            isLike={isIGood ? true : false}
          />
        );
      })}
    </Container>
  );
};

export default BulletinBoardList;
