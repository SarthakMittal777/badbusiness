import serverInstance from "./server";

export const getCareerData = async () => {
  try {
    const response = await serverInstance.get("/career");
    console.log(response.data, "career data");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCareerDataById = async (id) => {
  try {
    const response = await serverInstance.get(`/career/${id}`);
    return response.data;
  } catch (error) {
    console.log(error); // Log the error for debugging
    throw new Error("Failed to fetch career data"); // Throw the error again for the caller to handle
  }
};

export const createCareerData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/career/create", data, {
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
export const editCareerData = async (id, data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.put(`/career/update/${id}`, data, {
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

export const deleteCareerData = async (id) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.delete(`/career/delete/${id}`, {
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
