import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "components/atom";
import { Button, Form, Input } from "antd";
import { editBulletinBoardApi, getByIdBulletinBoardApi } from "apis";
import { GetBulletinBoardByIdResponse } from "../../../types";
import BulletinBoardEditPage from "./edit";

const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`;

const BulletinBoardEdit = (props: any) => {
  const id = Number(props.match.params.id);
  const [bulletinBoard, setBulletinBoard] =
    useState<GetBulletinBoardByIdResponse | null>();

  useEffect(() => {
    getByIdBulletinBoardApi({ id }).then((res) => {
      setBulletinBoard(res.data);
    });
  }, []);

  const onFinish = (values: any) => {
    editBulletinBoardApi({ id, ...values })
      .then((res) => {
        alert("編集しました");
      })
      .catch((e) => {
        alert("編集に失敗しました");
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ title: bulletinBoard?.title || "aa" }}
      >
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
          編集完了
        </Button>
      </Form>

      <div>{bulletinBoard?.title}</div>

      <BulletinBoardEditPage />
    </Container>
  );
};

export default BulletinBoardEdit;
