import { path } from "config";
import {
  BulletinBoardList,
  BulletinBoardCreate,
  BulletinBoardEdit,
} from "pages/BulletinBoard";
import { SignIn, SignUp } from "pages/Auth";

export const userRoutes = [
  {
    exact: true,
    path: path.root,
    component: BulletinBoardList,
    authentication: true,
  },
  {
    exact: true,
    path: path.bulletinBoardCreate,
    component: BulletinBoardCreate,
    authentication: true,
  },
  {
    exact: true,
    path: path.bulletinBoardEdit(":id"),
    component: BulletinBoardEdit,
    authentication: true,
  },
  {
    exact: true,
    path: path.signIn,
    component: SignIn,
    authentication: false,
  },
  {
    exact: true,
    path: path.signUp,
    component: SignUp,
    authentication: false,
  },
];

//   <Route exact path={path.root} component={BulletinBoardList} />
//   <Route
//     exact
//     path={path.bulletinBoardCreate}
//     component={BulletinBoardCreate}
//   />

//   <Route path={path.signIn} component={SignIn} />
//   <Route path={path.signUp} component={SignUp} />
