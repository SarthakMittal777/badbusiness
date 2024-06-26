import serverInstance from "./server";

export const getTeamData = async () => {
  try {
    const response = await serverInstance.get("/team");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getTeamDataById = async (id) => {
  try {
    const response = await serverInstance.get(`/team/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const createData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/team/create", data, {
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
export const editTeamData = async (id, data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.put(`/team/update/${id}`, data, {
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

export const deleteTeamData = async (id) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.delete(`/team/delete/${id}`, {
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
