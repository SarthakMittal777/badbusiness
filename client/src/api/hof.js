import serverInstance from "./server";

export const getHofData = async () => {
  try {
    const response = await serverInstance.get("/hof");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getHofDataById = async (id) => {
  try {
    const response = await serverInstance.get(`/hof/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createHofData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/hof/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const editHofData = async (id, data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.put(`/hof/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteHofData = async (id) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.delete(`/hof/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
