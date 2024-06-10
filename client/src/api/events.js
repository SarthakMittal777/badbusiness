import serverInstance from "./server";

export const getEventData = async () => {
  try {
    const response = await serverInstance.get("/event/all");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getEventDataById = async (id) => {
  try {
    const response = await serverInstance.get(`/event/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createEventData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/event/create", data, {
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
export const editEventData = async (id, data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.put(`/event/update/${id}`, data, {
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

export const deleteEventData = async (id) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.delete(`/event/delete/${id}`, {
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
