import { Switch, Route } from "react-router-dom";
import { path } from "config";
import { BulletinBoardList, BulletinBoardCreate } from "pages/BulletinBoard";
import { SignIn, SignUp } from "pages/Auth";

const RouteWrapper: React.FC = () => {
  return (
    <Switch>
      <Route exact path={path.root} component={BulletinBoardList} />

      <Route
        exact
        path={path.bulletinBoardCreate}
        component={BulletinBoardCreate}
      />

      <Route path={path.signIn} component={SignIn} />
      <Route path={path.signUp} component={SignUp} />
    </Switch>
  );
};

export default RouteWrapper;
