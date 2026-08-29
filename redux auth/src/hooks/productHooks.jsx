import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";

export const useProductApi = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 5000,
  });
  return {
    isPending,
    data,
    error,
  };
};
