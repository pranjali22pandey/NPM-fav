import axiosInstance from "../axios";

export const getNPMPackages = async (
  searchQuery = null,
  size = 250,
  from = 0
) => {
  try {
    const endpoint = `search?q=${searchQuery ? searchQuery : "''"}&size=${
      size ? size : 10
    }&from=${from ? from : 0}`;
    const response = await axiosInstance.get(endpoint);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
