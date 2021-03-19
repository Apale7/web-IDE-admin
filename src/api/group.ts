import axios from "../axios/axiosSetting";
import { parseUnixToLocalTimeString } from "../utils/time";
export interface group {
  id: number;
  created: number | string;
  ownerID: number;
  name: string;
}

interface getGroupReqParams {
  owner_id?: number;
  group_name?: string;
  group_id?: number;
  member_id?: number;
}

const getGroup = async (req: getGroupReqParams) => {
  const res = await axios.get("/api/group/get", {
    params: {
      ...req,
    },
  });
  const groups: group[] = [];
  for (let i = 0; i < res.data.data.groups.length; i++) {
    const e = res.data.data.groups[i];
    groups.push({
      id: e.id,
      created: parseUnixToLocalTimeString(e.created_at),
      ownerID: e.owner_id,
      name: e.group_name,
    });
  }
  return groups;
};

export { getGroup };
