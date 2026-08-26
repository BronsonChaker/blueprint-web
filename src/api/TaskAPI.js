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

    console.log("Get Project Tasks", response.data);
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(TaskAPI);
