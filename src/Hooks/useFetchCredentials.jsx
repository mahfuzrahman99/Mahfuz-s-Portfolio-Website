import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchCredentials = () => {
  const axiosSecure = useAxiosPublic();

  const { data: credentials = [], refetch } = useQuery({
    queryKey: ["credentials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/credentials");
      return res.data;
    },
  });

  return [credentials, refetch];
};

export default useFetchCredentials;
