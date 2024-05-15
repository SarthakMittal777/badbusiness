import serverInstance from "./server";

export const getServiceData = async () => {
  try {
    const response = await serverInstance.get("/service");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getServiceDataById = async (id) => {
  try {
    const response = await serverInstance.get(`/service/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createServiceData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/service/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const editServiceData = async (id, data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.put(`/service/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteServiceData = async (id) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.delete(`/service/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
