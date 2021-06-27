import styled from "styled-components";
import { PostCard } from "components/molecule";

const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
  /* background: gold; */
`;

// title: string;
// contents: string;
// contributor: string;
// like: number;

const BulletinBoardList = () => {
  return (
    <Container>
      みんなの投稿
      <PostCard
        title="タイトル"
        contents="コンテンツ"
        contributor="作成者"
        like={4}
      />
    </Container>
  );
};

export default BulletinBoardList;
