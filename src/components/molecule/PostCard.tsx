import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";
import { Text } from "components/atom";

interface IPostCardProps {
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
`;

const GoogIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PostCard = (porps: IPostCardProps) => {
  const { title, contents, contributor, like } = porps;
  return (
    <Container>
      <Text fs={20}>{title}</Text>
      <Text fs={14} mt={8}>
        {contents}
      </Text>
      <Text fs={14} mt={8}>
        投稿者: {contributor}
      </Text>

      <GoogIconWrapper>
        <Text>
          <HeartOutlined />
        </Text>
        <Text ml={4} fs={14}>
          {like}
        </Text>
      </GoogIconWrapper>
    </Container>
  );
};

export default PostCard;
