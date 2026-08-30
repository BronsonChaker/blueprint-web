import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const TaskAPI = {
  getProjectTasks: async function (id, cancel = false) {
    const response = await api.request({
      url: `/jobs/${id}/tasks`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getProjectTasks.name].handleRequestCancellation()
            .signal
        : undefined,
    });

    return response.data;
  },
  getCriticalTasks: async function (cancel = false) {
    const response = await api.request({
      url: `/tasks/critical`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[
            this.getCriticalTasks.name
          ].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
  getMilestoneTasks: async function (cancel = false) {
    const response = await api.request({
      url: `/tasks/milestone`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[
            this.getMilestoneTasks.name
          ].handleRequestCancellation().signal
        : undefined,
    });

    console.log("Milestone", response.data);

    return response.data;
  },
  getAllTasks: async function (cancel = false) {
    const response = await api.request({
      url: `/tasks/`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAllTasks.name].handleRequestCancellation()
            .signal
        : undefined,
    });

    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(TaskAPI);
