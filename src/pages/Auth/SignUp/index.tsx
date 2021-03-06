import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import { storage } from "helper";
import { Text } from "components/atom";
import { Button, Form, Input, message } from "antd";
import { signUpApi } from "apis";
import { SignUpQuery } from "types";
import { path } from "config";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const SignUp: React.FC = () => {
  const history = useHistory();
  const onFinish = (values: SignUpQuery) => {
    signUpApi(values)
      .then((res) => {
        storage.token = res.data.token;
        storage.name = res.data.name;
        message.success("新規登録に成功しました");
        setTimeout(() => (window.location.pathname = "/"), 500);
      })
      .catch((e) => {
        message.error("新規登録に失敗しました");
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <Text mb={32} fs={20} textAlign="center">
        新規登録
      </Text>

      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "名前を入力してください" }]}
        >
          <Input placeholder="名前" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "メールアドレスを入力してください" },
          ]}
        >
          <Input placeholder="メールアドレス" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "パスワードを入力してください" }]}
        >
          <Input.Password placeholder="パスワード" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[
            { required: true, message: "確認のパスワードを入力してください" },
          ]}
        >
          <Input placeholder="パスワードの確認" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            送信
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SignUp;
