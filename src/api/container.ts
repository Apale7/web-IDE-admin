import axios from "../axios/axiosSetting";

export interface container {
  key: string;
  id: string;
  name: string;
  created: number | string;
  image: string;
  status: number;
}

const getContainer = async (user_id?: number, container_id?: string) => {
  const res = await axios.get("/api/container/get_containers", {
    params: {
      user_id: user_id,
      container_id: container_id,
    },
  });

  if (!res) return [];
  let containers: container[] = [];
  for (let i = 0; i < res.data.data.containers.length; i++) {
    const e = res.data.data.containers[i];
    containers.push({
      key: String(i),
      id: e.id.substr(0, 7) + "...",
      name: e.name.substr(0, 20) + (e.name.length > 20 ? "..." : ""),
      created: new Date(e.created * 1000).toLocaleString(),
      image: e.image.split(":")[1].substr(0, 7) + "...",
      status: e.status,
    });
  }
  return containers;
};

export { getContainer };
