import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "components/atom";
import { Button, Form, Input, message } from "antd";
import { editBulletinBoardApi, getByIdBulletinBoardApi } from "apis";
import { GetBulletinBoardByIdResponse } from "../../../types";
import { useHistory } from "react-router";
import { path } from "config/path";

const Container = styled.div`
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`;

const BulletinBoardEdit = (props: any) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const id = Number(props.match.params.id);
  const [
    bulletinBoard,
    setBulletinBoard,
  ] = useState<GetBulletinBoardByIdResponse | null>();

  useEffect(() => {
    getByIdBulletinBoardApi({ id }).then((res) => {
      setBulletinBoard(res.data);
      form.setFieldsValue({ title: res.data.title });
    });
  }, []);

  useEffect(() => {
    form.setFieldsValue(bulletinBoard);
  }, [bulletinBoard]);

  const onFinish = (values: any) => {
    editBulletinBoardApi({ id, ...values })
      .then((res) => {
        message.success("編集しました");
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
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
    </Container>
  );
};

export default BulletinBoardEdit;
