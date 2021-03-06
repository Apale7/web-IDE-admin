import axios from "../axios/axiosSetting";

export interface container {
  key: string;
  id: string;
  name: string;
  created: number | string;
  image: string;
  status: number;
}

interface createContainerReq {
  user_id: number;
  image_id: string;
  container_name: string;
  username?: string;
}

interface deleteContainerReq {
  user_id: number;
  container_id: string;
}

const getContainer = async (user_id?: number, container_id?: string) => {
  const res = await axios.get("/api/container/get", {
    params: {
      user_id: user_id,
      container_id: container_id,
    },
  });
  console.log('res',res);
  
  if (!res || !res.data.data.containers) return [];
  let containers: container[] = [];
  for (let i = 0; i < res.data.data.containers.length; i++) {
    const e = res.data.data.containers[i];
    containers.push({
      key: String(i),
      id: e.id,
      name: e.name,
      created: new Date(e.created * 1000).toLocaleString(),
      image: e.image,
      status: e.status,
    });
  }
  return containers;
};

const deleteContainer = async (req: deleteContainerReq) => {
  const res = await axios.post("/api/container/delete", req);
  if (!res || !res.data) return false;
  return res.data.status_code === 0;
};

const createContainer = async (req: createContainerReq) => {
  const res = await axios.post("/api/container/create", req);
  if (!res || !res.data) return false;
  return res.data.status_code === 0;
};

export { getContainer, deleteContainer, createContainer };
