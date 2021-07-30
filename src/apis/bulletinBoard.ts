import axios from "axios";
import { host } from "config";
import { BulletinBoardQuery } from "types";
import { storage } from "helper";

export const getBulletinBoardListApi = () => {
  return axios.get(`${host}/bulletin-board`);
};

// ポストカードの作成
export const createBulletinBoardApi = (query: BulletinBoardQuery) => {
  axios.defaults.headers.common["Authorization"] = storage.token;
  return axios.post(`${host}/bulletin-board/create`, query);
};
