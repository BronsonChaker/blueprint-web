import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const ProjectAPI = {
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/jobs/",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(ProjectAPI);
