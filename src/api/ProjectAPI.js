import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const ProjectAPI = {
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/jobs/",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.products;
  },
};

const cancelApiObject = defineCancelApiObject(ProductAPI);
