/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpdateProject = ({ showModal, setShowModal, project, refetch }) => {
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
    projectName,
    full_Screen_Shot,
    Short_Screen_Shot,
    Live_Link,
    GitHub_Client_Side_Link,
    GitHub_Server_Side_Link,
    category,
  } = project || {};

  const onSubmit = async (data) => {
    const projectItem = {
      projectName: data.projectName,
      full_Screen_Shot: data.full_Screen_Shot,
      Short_Screen_Shot: data.Short_Screen_Shot,
      Live_Link: data.Live_Link,
      GitHub_Client_Side_Link: data.GitHub_Client_Side_Link,
      GitHub_Server_Side_Link: data.GitHub_Server_Side_Link,
      category: data.category,
    };
  //  console.log(projectItem)
    const projectRes = await axiosPublic.patch(`/projects/${_id}`, projectItem);
    console.log("console from patch request", projectRes.data)
    if (projectRes.data.modifiedCount) {
      reset();
      refetch();
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${data?.projectName} is updated successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/owner_Dashboard/allProjects");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update the project. Please try again.",
      });
    }
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center"
            >
              <div className="max-w-3xl w-full bg-gray-200 p-8 rounded shadow-lg">
                <div className="md:grid grid-cols-2 gap-2">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-[#00938a] col-span-2">
                    Update Home
                  </h2>

                  {/* Project Name */}
                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Project Name:</label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={projectName || ""}
                      {...register("projectName", {
                        required: "Project Name is required",
                      })}
                    />
                    {errors.projectName && (
                      <p className="text-red-500">
                        {errors.projectName.message}
                      </p>
                    )}
                  </div>

                  {/* Full Image URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Full Image URL:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={full_Screen_Shot || ""}
                      {...register("full_Screen_Shot", {
                        required: "Full image is required",
                      })}
                    />
                    {errors.full_Screen_Shot && (
                      <p className="text-red-500">
                        {errors.full_Screen_Shot.message}
                      </p>
                    )}
                  </div>

                  {/* Short Image URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Short image URL:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={Short_Screen_Shot || ""}
                      {...register("Short_Screen_Shot", {
                        required: "Short image URL is required",
                      })}
                    />
                    {errors.Short_Screen_Shot && (
                      <p className="text-red-500">
                        {errors.Short_Screen_Shot.message}
                      </p>
                    )}
                  </div>

                  {/* Live link URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Live link URL:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={Live_Link || ""}
                      {...register("Live_Link", {
                        required: "Live link URL is required",
                      })}
                    />
                    {errors.Live_Link && (
                      <p className="text-red-500">{errors.Live_Link.message}</p>
                    )}
                  </div>

                  {/* GitHub client link URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      GitHub client link URL:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={GitHub_Client_Side_Link || ""}
                      {...register("GitHub_Client_Side_Link", {
                        required: "GitHub client link URL is required",
                      })}
                    />
                    {errors.GitHub_Client_Side_Link && (
                      <p className="text-red-500">
                        {errors.GitHub_Client_Side_Link.message}
                      </p>
                    )}
                  </div>

                  {/* GitHub server link URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      GitHub server link URL:
                    </label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={GitHub_Server_Side_Link || ""}
                      {...register("GitHub_Server_Side_Link", {
                        required: "GitHub server link URL is required",
                      })}
                    />
                    {errors.GitHub_Server_Side_Link && (
                      <p className="text-red-500">
                        {errors.GitHub_Server_Side_Link.message}
                      </p>
                    )}
                  </div>

                  {/* Category Dropdown Select */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Select a category:
                    </label>
                    <select
                      {...register("category", {
                        required: "Please select a category",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                      defaultValue={category || ""}
                    >
                      <option value="">Select...</option>
                      <option value="full_stack_based">Full Stack Based</option>
                      <option value="frontend_based">Frontend Based</option>
                      <option value="javascript_based">JavaScript Based</option>
                      <option value="vanilla_css_based">
                        Vanilla CSS Based
                      </option>
                    </select>
                    {errors.category && (
                      <p className="text-red-500">{errors.category.message}</p>
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

export default UpdateProject;
