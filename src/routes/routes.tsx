import { BrowserRouter, Route } from "react-router-dom";

import MyLayOut from "../layout";

import Login from "../pages/login";
export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Route path="/app" component={MyLayOut} />
      <Route path="/login" component={Login} exact />
    </BrowserRouter>
  );
}
