import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const UserAPI = {
  projectCount: async function (cancel = false) {
    const response = await api.request({
      url: `/jobs/count`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.projectCount.name].handleRequestCancellation()
            .signal
        : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(UserAPI);
