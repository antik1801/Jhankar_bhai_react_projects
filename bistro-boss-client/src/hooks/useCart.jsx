import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../ContextProviders/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email && !!token,
    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`);
      console.log('res from axios', response)
      return response.data;
    },
  });

  return [cart, refetch];
};
export default useCart;
