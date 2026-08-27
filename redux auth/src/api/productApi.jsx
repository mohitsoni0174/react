import { axiosInstance } from "../config/axiosInstance";

export const getProductsDataApi = async () => {
  try {
    const res = await axiosInstance.get("/products");

    return res.data;
  } catch (error) {
    console.error("Error in product API:", error);
    throw error;
  }
};
