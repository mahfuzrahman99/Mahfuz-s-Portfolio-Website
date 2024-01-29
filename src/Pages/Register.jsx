/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/Register.jpg";
import { AuthContext } from "./AouthProvider";
import swal from "sweetalert";

const Register = () => {
  const { createUser, updateTheProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(createUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(photo, email, password);

    if (/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      // create user
      createUser(email, password).then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Registration successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/owner_dashboard/allProjects");

        updateTheProfile(name, photo)
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } else {
      swal(
        "Error",
        "Your Password Must Be 6 character or longer and have atleast a uppercase and a spacial character",
        "error"
      );
      return;
    }
  };

  return (
    <div
      className="bg-black bg-opacity-40 h-[100vh] flex items-center "
      style={{ backgroundImage: `url(${registerImg})` }}
    >
      <div className="register-form flex flex-col bg-[#00938a] bg-opacity-30 p-4 rounded-xl max-w-2xl mx-auto md:w-[450px] w-full">
        <h1 className="text-2xl font-bold text-center py-4 text-white">
          User Registration
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-2 text-black"
        >
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="email" className=" text-white">
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
            <label htmlFor="password" className=" text-white">
              Password:
            </label>
            <input
              type="text"
              name="password"
              className="p-2 rounded-md bg-white text-black"
              placeholder="Input your password here"
            />
          </div>
          <div className="flex flex-col mt-2 col-span-2">
            <label htmlFor="photo" className=" text-white">
              Photo:
            </label>
            <input
              type="photo"
              name="photo"
              className="p-2 rounded-md bg-white text-black"
              placeholder="Input your photo URL here"
            />
          </div>
          <div className="flex justify-center w-2/4 mx-auto mt-2 col-span-2">
            <button
              type="submit"
              className="btn btn-ghost bg-white p-2 rounded-md w-full text-xl font-bold uppercase text-[#00938a] hover:text-white"
            >
              Register
            </button>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-white">
                Already registered...!{" "}
              </p>
              <Link
                to={"/login"}
                className="text-red-600 font-bold uppercase btn btn-ghost btn-sm bg-white hover:bg-white p-1 ml-2"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
