import axios from "axios";
import { host } from "config";
import { SignUpQuery, SignInQuery, SignUpResponse } from "types/auth";

export const signUpApi = (query: SignUpQuery) =>
  axios.post<SignUpResponse>(`${host}/user/sign_up`, query);

export const signInApi = (query: SignInQuery) =>
  axios.post(`${host}/user/sign_in`, query);
