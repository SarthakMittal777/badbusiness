import serverInstance from "./server";

export const getStoryData = async () => {
  try {
    const response = await serverInstance.get("/story");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getStoryDataById = async (id) => {
  try {
    const response = await serverInstance.get(`/story/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createStoryData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/story/create", data, {
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
export const editStoryData = async (id, data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.put(`/story/update/${id}`, data, {
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

export const deleteStoryData = async (id) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.delete(`/story/delete/${id}`, {
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
