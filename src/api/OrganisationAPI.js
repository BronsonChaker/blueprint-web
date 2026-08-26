import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const OrganisationAPI = {
  getSupervisors: async function (cancel = false) {
    const response = await api.request({
      url: "/organisations/users",
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });
    console.log(response.data);

    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(OrganisationAPI);
