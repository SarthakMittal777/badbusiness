import serverInstance from "./server";

export const getAdminData = async () => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.get("/admin/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const addAdminData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/admin/add", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateAdminData = async (email, data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.put(`/admin/update/${email}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdminData = async (adminEmail, currentAdminCredentials) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.delete(`/admin/remove-from-db/${adminEmail}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: currentAdminCredentials,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
