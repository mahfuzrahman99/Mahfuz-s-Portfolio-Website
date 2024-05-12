/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AddProject = ({ showModal, setShowModal }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const projectItem = {
      projectName: data.projectName,
      full_Screen_Shot: data.full_Screen_Shot,
      Short_Screen_Shot: data.Short_Screen_Shot,
      Live_Link: data.Live_Link,
      GitHub_Client_Side_Link: data.GitHub_Client_Side_Link,
      GitHub_Server_Side_Link: data.GitHub_Server_Side_Link,
      category: data.category, // Added category to projectItem
    };
    const houseRes = await axiosPublic.post("/projects", projectItem);
    console.log(houseRes.data);
    if (houseRes.data.insertedId) {
      // show success popup
      reset();
      setShowModal(false)
      Swal.fire({
        position: "top",
        icon: "success",
        title: `${data.projectName} is added to the projects list`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/owner_Dashboard/allProjects");
    }
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box max-h-[90vh] max-w-5xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center overflow-x-auto text-black"
            >
              <div className=" w-full md:w-4-xl bg-gray-200 p-8 rounded shadow-lg">
                <div className=" md:grid grid-cols-2 gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center text-[#00938a] col-span-2">
                    ADD A PROJECT
                  </h2>

                  {/* Project Name */}
                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Project Name:</label>
                    <input
                      className="w-full bg-white p-2 rounded-md mt-1"
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
                      {...register("full_Screen_Shot", {
                        required: "Full image is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
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
                      {...register("Short_Screen_Shot", {
                        required: "Short image URL is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.Short_Screen_Shot && (
                      <p className="text-red-500">
                        {errors.Short_Screen_Shot.message}
                      </p>
                    )}
                  </div>

                  {/* Live Link URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      Live link URL:
                    </label>
                    <input
                      {...register("Live_Link", {
                        required: "Live link URL is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.Live_Link && (
                      <p className="text-red-500">{errors.Live_Link.message}</p>
                    )}
                  </div>

                  {/* GitHub Client Link URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      GitHub client link URL:
                    </label>
                    <input
                      {...register("GitHub_Client_Side_Link", {
                        required: "GitHub client link URL is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
                    />
                    {errors.GitHub_Client_Side_Link && (
                      <p className="text-red-500">
                        {errors.GitHub_Client_Side_Link.message}
                      </p>
                    )}
                  </div>

                  {/* GitHub Server Link URL */}
                  <div className="mb-4 col-span-1">
                    <label className="block text-gray-700">
                      GitHub server link URL:
                    </label>
                    <input
                      {...register("GitHub_Server_Side_Link", {
                        required: "GitHub server link URL is required",
                      })}
                      className="w-full bg-white p-2 rounded-md mt-1"
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
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-2/6"
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

export default AddProject;
