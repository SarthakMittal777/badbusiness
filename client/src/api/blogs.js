import serverInstance from "./server";

export const getBlogData = async () => {
  try {
    const response = await serverInstance.get("/blog");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getBlogDataById = async (id) => {
  try {
    const response = await serverInstance.get(`/blog/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const createBlogData = async (data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.post("/blog/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const editBlogData = async (id, data) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.put(`/blog/update/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlogData = async (id) => {
  try {
    const token = localStorage.getItem("accesstoken");
    const response = await serverInstance.delete(`/blog/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
