import serverInstance from "./server";

export const getStoriesData = async () => {
  try {
    const response = await serverInstance.get("/story");
    return response.data;
  } catch (error) {
    console.error("Error fetching stories data:", error);
    throw error; 
  }
};