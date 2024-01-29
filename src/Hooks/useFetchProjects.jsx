import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchProjects = () => {
  const axiosSecure = useAxiosPublic();

  const { data: projects = [], refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosSecure.get("/projects");
      return res.data;
    },
  });

  return [projects, refetch];
};

export default useFetchProjects;
