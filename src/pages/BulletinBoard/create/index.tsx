import React from "react";
import styled from "styled-components";
import { Text } from "components/atom";
import { Button, Form, Input, message } from "antd";
import { createBulletinBoardApi } from "apis";
import { useHistory } from "react-router";
import { path } from "config/path";

const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`;

const BulletinBoardCreate = () => {
  const history = useHistory();
  const onFinish = (values: any) => {
    createBulletinBoardApi(values)
      .then((res) => {
        message.success("作成しました");
        setTimeout(() => history.push(path.root), 1000);
      })
      .catch((e) => {
        message.error(e.response.data);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Text>タイトル</Text>
        <Form.Item
          name="title"
          rules={[{ required: true, message: "タイトルを入力してください" }]}
        >
          <Input />
        </Form.Item>

        <Text mt={40}>コンテンツ</Text>
        <Form.Item
          name="contents"
          rules={[{ required: true, message: "投稿内容を入力してください" }]}
        >
          <Input.TextArea style={{ height: 280 }} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          送信
        </Button>
      </Form>
    </Container>
  );
};

export default BulletinBoardCreate;
