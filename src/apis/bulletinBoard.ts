import axios from "axios";
import { host } from "config";
import {
  BulletinBoardQuery,
  BulletinBoardEditQuery,
  GetBulletinBoardByIdResponse,
  GetBulletinBoardResponse,
} from "types";
import { storage } from "helper";

export const getByIdBulletinBoardApi = ({ id }: { id: number }) => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  return axios.get<GetBulletinBoardByIdResponse>(
    `${host}/bulletin-board/${id}`
  );
};

export const getListBulletinBoardApi = () => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  return axios.get<GetBulletinBoardResponse[]>(`${host}/bulletin-board`);
};

// ポストカードの作成
export const createBulletinBoardApi = (query: BulletinBoardQuery) => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  return axios.post(`${host}/bulletin-board/create`, query);
};

// いいね作成
export const createBulletinBoardLikeApi = (id: string) => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  return axios.post(`${host}/bulletin-board/like/${id}`);
};

// いいね削除
export const deleteBulletinBoardLikeApi = (id: string) => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  return axios.delete(`${host}/bulletin-board/like/${id}`);
};

// 画像を登録
export const createBulletinBoardImageApi = (formData: any) => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  console.log(formData);
  return axios.post(`${host}/bulletin-board/image`, formData, {
    headers: { "content-type": "multipart/form-data" },
  });
};

// ポストカードの編集
export const editBulletinBoardApi = (query: BulletinBoardEditQuery) => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  return axios.patch(`${host}/bulletin-board/edit/${query.id}`, query);
};

// ポストカードの削除
export const deleteByIdBulletinBoardApi = (id: string) => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  return axios.delete(`${host}/bulletin-board/delete/${id}`);
};
