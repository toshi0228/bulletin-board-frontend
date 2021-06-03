import React from "react";
import styled from "styled-components";

import { storage } from "helper";
import { Text } from "components/atom";
import { Button, Form, Input } from "antd";
import { signUpApi } from "apis";
import { SignUpQuery } from "types";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const SignUp: React.FC = () => {
  const onFinish = (values: SignUpQuery) => {
    signUpApi(values)
      .then((res) => {
        storage.token = res.data.token;
        alert("ログインに成功しました");
        window.location.reload();
      })
      .catch((e) => {
        alert("ログインに失敗しました");
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
