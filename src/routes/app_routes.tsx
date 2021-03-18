import { Switch } from "react-router";
import AuthRoute from "../components/auth_route/auth_route";
import ContainerCreate from "../components/container/create";
import ContainerManage from "../components/container/manage";
import GroupCreate from "../components/group/create";
import GroupJoin from "../components/group/join";
import GroupManage from "../components/group/manage";
import ImageCreate from "../components/image/create";
import ImageManage from "../components/image/manage";
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
        component={ContainerManage}
        auth={["container"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/image_create`}
        component={ImageCreate}
        auth={["image"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/image_manage`}
        component={ImageManage}
        auth={["image"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/group_create`}
        component={GroupCreate}
        auth={["group", "group_admin"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/group_manage`}
        component={GroupManage}
        auth={["group", "group_admin"]}
      ></AuthRoute>
      <AuthRoute
        path={`/app/group_join`}
        component={GroupJoin}
        auth={["group"]}
      ></AuthRoute>
    </Switch>
  );
}
