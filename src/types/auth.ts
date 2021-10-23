export interface SignUpQuery {
  name: string;
  email: string;
  password: string;
  confirmPasssword: string;
}

export interface SignUpResponse {
  token: string;
  name: string;
}

export interface SignInQuery {
  email: string;
  password: string;
}
