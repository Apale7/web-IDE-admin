import { RouteComponentProps, StaticContext } from "react-router";

export interface routeInfo {
  path: string;
  exact?: boolean | undefined;
  component: any;
  auth?: string[];
}
