import { isLogin } from "./login";
import { getAuth } from "../cache/cache";
const getAuthList = () => {
  return getAuth();
};

export { getAuth };