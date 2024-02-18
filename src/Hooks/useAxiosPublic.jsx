import axios from "axios";
const axiosSecure = axios.create({
    baseURL: "https://mahfuz-prtfolio-website-server-side.vercel.app",
  // baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;