import { Switch, Route } from "react-router-dom";
import { path } from "config";
import { BulletinBoardList } from "pages/BulletinBoard";
import { SignIn, SignUp } from "pages/Auth";

const RouteWrapper: React.FC = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={BulletinBoardList} />
      <Route path={path.signIn} component={SignIn} />
      <Route path={path.signUp} component={SignUp} />
    </Switch>
  );
};

export default RouteWrapper;
