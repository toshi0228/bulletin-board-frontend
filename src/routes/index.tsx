import React, { ReactNode } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { path } from "config";
import { userRoutes } from "./userRoutes";
import { storage } from "helper";

// 認証確認するコンポーネント
const Auth = ({ children }: { children: ReactNode | any }) => {
  const history = useHistory();
  if (!storage.token) {
    history.push(path.signIn);
  }

  return children;
};

const RouteWrapper: React.FC = () => {
  return (
    <Switch>
      {userRoutes.map((route) => {
        return (
          <Route
            exact={route.exact}
            path={route.path}
            render={(props) => {
              return route.authentication ? (
                <Auth>
                  <Route
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                </Auth>
              ) : (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

export default RouteWrapper;
