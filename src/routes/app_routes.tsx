import { Route } from "react-router-dom";
export default function AppRouterComponent(props:any) {
  return (
    <div>
      <Route
        path={`${props.parent}/container_create`}
        component={() => {
          return <div>this is container_create</div>;
        }}
      ></Route>
    </div>
  );
}
