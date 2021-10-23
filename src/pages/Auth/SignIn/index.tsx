import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Form, Button, Input, message } from "antd";

import { Text } from "components/atom";
import { storage } from "helper";
import { signInApi } from "apis";
import { SignInQuery } from "types";
import { path } from "config";
import { UserContext } from "context";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const SignIn: React.FC = () => {
  const { setUserName, userName } = useContext(UserContext);

  useEffect(() => {}, [setUserName, userName]);

  const onFinish = (values: SignInQuery) => {
    signInApi(values)
      .then((res) => {
        storage.token = res.data.token;
        storage.name = res.data.userName;
        message.success("ログインに成功しました");
        setTimeout(() => (window.location.pathname = path.root), 1000);
      })
      .catch((e) => {
        message.error("ログインに失敗しました");
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Container>
      <Text mb={32} fs={20} textAlign="center">
        ログイン
      </Text>

      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            送信
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SignIn;
