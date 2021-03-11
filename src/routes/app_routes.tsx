import { Switch } from "react-router";
import AuthRoute from "../components/auth_route/auth_route";
import ContainerCreate from "../components/container/create";
export default function AppRouterComponent(props: any) {
  return (
    <Switch>
      <AuthRoute
        path={`/app/container_create`}
        component={ContainerCreate}
        auth={["container"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/container_manage`}
        component={() => {
          return <div>this is container_manage</div>;
        }}
        auth={["container"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/image_create`}
        component={() => {
          return <div>this is image_create</div>;
        }}
        auth={["image"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/image_manage`}
        component={() => {
          return <div>this is image_manage</div>;
        }}
        auth={["image"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/group_create`}
        component={() => {
          return <div>this is group_create</div>;
        }}
        auth={["group", "group_admin"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/group_manage`}
        component={() => {
          return <div>this is group_manage</div>;
        }}
        auth={["group", "group_admin"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/group_join`}
        component={() => {
          return <div>this is group_join</div>;
        }}
        auth={["group"]}
      ></AuthRoute>
    </Switch>
  );
}
