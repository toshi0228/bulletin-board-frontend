import React, { createContext, useState } from "react";

interface IUserContext {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

// グローバルで持つデータを定義する。
export const UserContext = createContext<IUserContext>({
  userName: "",
  setUserName: () => "",
});

// グローバルで持つデータを作成する。
export const UserProvider: React.FC = (props) => {
  const { children } = props;

  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
