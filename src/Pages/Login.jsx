/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginImg from "../assets/Login.jpg";
import { useContext } from "react";
import { AuthContext } from "./AouthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate()

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/owner_dashboard/allProjects");
      })
  };

  return (
    <div
      className="bg-black bg-opacity-40 h-[100vh] flex items-center "
      style={{ backgroundImage: `url(${loginImg})` }}
    >
      <div className=" flex flex-col bg-[#00938a] bg-opacity-30 p-4 rounded-xl  md:w-[450px] mx-auto">
        <h1 className="text-2xl font-bold text-center py-4 text-white">
          User Login
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="email" className="text-black">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="p-2 rounded-md bg-white text-black"
              placeholder="Input your valid email here"
            />
          </div>
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="password" className="text-black">
              Password:
            </label>
            <input
              type="text"
              name="password"
              className="p-2 rounded-md bg-white text-black"
              placeholder="Input your password here"
            />
          </div>
          <div className="flex justify-center w-2/4 mx-auto mt-2 col-span-2">
            <button
              type="submit"
              className="btn btn-ghost bg-white p-2 rounded-md w-full text-xl font-bold uppercase text-[#00938a] hover:text-white"
            >
              Login
            </button>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-white">
                Not registered...!{" "}
              </p>
              <Link
                to={"/register"}
                className="text-red-600 font-bold uppercase btn btn-ghost btn-sm bg-white hover:bg-white p-1 ml-2"
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
