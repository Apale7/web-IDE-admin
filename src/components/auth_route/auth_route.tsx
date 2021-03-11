import { useState } from "react";
import { Redirect, Route } from "react-router";
import { routeInfo } from "../../routes";
import { getAuth } from "../../auth/auth";
export default function AuthRoute(props: routeInfo) {
  const [auths, setAuths] = useState(getAuth());

  if (!auths.includes("image")) {
    return <Redirect to="/login" />;
  }
  return (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
}
