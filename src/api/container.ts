import axios from "axios";

export interface container {
  key: string;
  id: string;
  name: string;
  created: number | string;
  image: string;
  status: number;
}

const getContainer = (user_id?: number, container_id?: string) => {
  return axios
    .get("/api/container/get_containers", {
      params: {
        user_id: user_id,
        container_id: container_id,
      },
    })
    .then((res) => {
      if (!res) return [];
      let containers: container[] = []
      for (let i = 0; i < res.data.data.containers.length; i++) {
          const e = res.data.data.containers[i];
          containers.push({
              key: String(i),
              id: e.id.substr(0, 7)+"...",
              name: e.name.split(":")[1],
              created: new Date(e.created*1000).toLocaleString(),
              image: e.image.substr(0, 7)+"...",
              status: e.status
          })
      }
      return containers
    });
};

export { getContainer };
