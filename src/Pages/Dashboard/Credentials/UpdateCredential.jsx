/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const UpdateCredential = ({ showModal, setShowModal, credential, refetch }) => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const {
    _id,
    credential_Name,
    credential_Email,
    credential_phone,
    credential_Screen_Shot,
    credential_Password,
  } = credential || {};

  const onSubmit = async (data) => {
    const credentialItem = {
      credential_Name: data.credential_Name,
      credential_Email: data.credential_Email,
      credential_phone: data.credential_phone,
      credential_Screen_Shot: data.credential_Screen_Shot,
      credential_Password: data.credential_Password,
    };
    //  console.log(credentialItem)
    const credentialRes = await axiosPublic.patch(
      `/credentials/${_id}`,
      credentialItem
    );
    console.log("console from patch request", credentialRes);
    if (credentialRes.data.modifiedCount) {
      reset();
      refetch();
      setShowModal(false);
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${data?.credential_Name} is updated successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/owner_Dashboard/allCredentials");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update the credential. Please try again.",
      });
    }
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-3xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center"
            >
              <div className="max-w-3xl w-full bg-gray-200 p-8 rounded shadow-lg">
                <div className="md:grid grid-cols-2 gap-2">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-[#00938a] col-span-2">
                    Update Credential
                  </h2>

                  {/* Project Name */}
                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">
                      Credential Name:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={credential_Name || ""}
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

                  {/* Full Image URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Credential Email:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={credential_Email || ""}
                      {...register("credential_Email", {
                        required: "Credential Image is required",
                      })}
                    />
                    {errors.credential_Email && (
                      <p className="text-red-500">
                        {errors.credential_Email.message}
                      </p>
                    )}
                  </div>

                  {/* Short Image URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Credential Phone Number:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={credential_phone || ""}
                      {...register("credential_phone", {
                        required: "Credential Phone Number is required",
                      })}
                    />
                    {errors.credential_phone && (
                      <p className="text-red-500">
                        {errors.credential_phone.message}
                      </p>
                    )}
                  </div>

                  {/* Live link URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Credential Screenshot URL:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={credential_Screen_Shot || ""}
                      {...register("credential_Screen_Shot", {
                        required: "Credential Screenshot URL is required",
                      })}
                    />
                    {errors.credential_Screen_Shot && (
                      <p className="text-red-500">
                        {errors.credential_Screen_Shot.message}
                      </p>
                    )}
                  </div>

                  {/* GitHub client link URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Credential Password:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={credential_Password || ""}
                      {...register("credential_Password", {
                        required: "Credential Password is required",
                      })}
                    />
                    {errors.credential_Password && (
                      <p className="text-red-500">
                        {errors.credential_Password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#00938a] hover:bg-[#126f6a] text-white font-bold py-2 px-4 rounded md:w-1/6"
                  >
                    Update
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

export default UpdateCredential;
