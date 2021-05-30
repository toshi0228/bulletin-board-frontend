import axios from "axios";
import { host } from "config";
import { SignUpQuery } from "types/auth";

export const signUpApi = (query: SignUpQuery) =>
  axios.post(`${host}/user/sign_up`, query);
