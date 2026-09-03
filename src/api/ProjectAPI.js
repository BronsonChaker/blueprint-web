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
  viewProject: async function (id, cancel = false) {
    const response = await api.request({
      url: `/jobs/${id}`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.viewProject.name].handleRequestCancellation()
            .signal
        : undefined,
    });

    return response.data;
  },

  createProject: async function (data, cancel = false) {
    const response = await api.request({
      url: `/jobs/create`,
      method: "POST",
      data,
      signal: cancel
        ? cancelApiObject[this.createProject.name].handleRequestCancellation()
            .signal
        : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(ProjectAPI);
