import serverInstance from "./server";
const token = localStorage.getItem("accesstoken");
export const getPartnerData = async () => {
  try {
    const response = await serverInstance.get("/partner");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getPartnerDataById = async (id) => {
  try {
    const response = await serverInstance.get(`/partner/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createPartnerData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/partner/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const editPartnerData = async (id, data) => {
  try {
    const response = await serverInstance.put(`/partner/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deletePartnerData = async (id) => {
  try {
    const response = await serverInstance.delete(`/partner/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
