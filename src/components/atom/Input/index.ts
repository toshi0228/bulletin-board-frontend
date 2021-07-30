import styled from "styled-components";
import { Input } from "antd";

export const AntInput = styled(Input)`
  background: #ffffff;
  box-shadow: 10px 10px 20px #dcdcdc;
  border-radius: 4px;
  font-size: 16px;
  height: 56px;
  border: none;
  ::placeholder {
    font-size: 16px;
    font-weight: bold;
  }
`;
