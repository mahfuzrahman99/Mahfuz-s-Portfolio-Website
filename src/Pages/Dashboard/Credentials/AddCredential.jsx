/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddCredential = ({ showModal, setShowModal }) => {
  const {
    handleSubmit,
    register,
    // reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const credentialItem = {
      credential_Name: data.credential_Name,
      credential_Email: data.credential_Email,
      credential_phone: data.credential_phone,
      credential_Password: data.credential_Password,
      credential_Screen_Shot: data.credential_Screen_Shot,
    };
    const credentialRes = await axiosPublic.post("/credentials", credentialItem);
    // console.log(credentialRes.data.credential_Name);
    console.log("console from outside")
    if (credentialRes.data) {
      console.log("console from inside");
      // show success popup
      // reset();
      // setShowModal(false);
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${data.credential_Name} is added to the projects list`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/owner_Dashboard/allCredentials");
    }
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center overflow-x-auto text-black"
            >
              <div className=" w-full md:w-4-xl bg-gray-200 p-8 rounded shadow-lg">
                <div className=" md:grid grid-cols-2 gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center text-[#00938a] col-span-2">
                    ADD A Credential
                  </h2>

                  {/* Credential Name */}
                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">
                      Credential Name:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      {...register("credential_Name", {
                        required: "Credential Name is required",
                      })}
                    />
                    {errors.credential_Name && (
                      <p className="text-red-500">
                        {errors.credential_Name.message}
                      </p>
                    )}
                  </div>

                  {/* Credential Email */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Credential Email:
                    </label>
                    <input
                      {...register("credential_Email", {
                        required: "Credential Email is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.credential_Email && (
                      <p className="text-red-500">
                        {errors.credential_Email.message}
                      </p>
                    )}
                  </div>

                  {/* Credential Screenshot URL URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Credential Screenshot URL:
                    </label>
                    <input
                      {...register("credential_Screen_Shot", {
                        required: "Credential Screenshot URL is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.credential_Screen_Shot && (
                      <p className="text-red-500">
                        {errors.credential_Screen_Shot.message}
                      </p>
                    )}
                  </div>

                  {/* Credential Phone Number */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Credential Phone Number:
                    </label>
                    <input
                      {...register("credential_phone", {
                        required: "Credential Phone Number is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.credential_phone && (
                      <p className="text-red-500">
                        {errors.credential_phone.message}
                      </p>
                    )}
                  </div>

                  {/* Credential Password */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Credential Password:
                    </label>
                    <input
                      {...register("credential_Password", {
                        required: "Credential Password is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.credential_Password && (
                      <p className="text-red-500">
                        {errors.credential_Password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#00938a] hover:bg-[#126f6a] text-white font-bold py-2 px-4 rounded md:w-1/6"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button onClick={() => setShowModal(false)} className="btn">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default AddCredential;
