import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "../components/auth_route/auth_route";
import MyLayOut from "../layout";

import Login from "../pages/login";
export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/app" component={MyLayOut} auth={["login"]} />
        <Route path="/login" component={Login} exact />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
