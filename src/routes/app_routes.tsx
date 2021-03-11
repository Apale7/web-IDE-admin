import { Route } from "react-router-dom";
import ContainerCreate from "../components/container/create";
export default function AppRouterComponent(props: any) {
  return (
    <div>
      <Route path={`/app/container_create`} component={ContainerCreate}></Route>
    </div>
  );
}
