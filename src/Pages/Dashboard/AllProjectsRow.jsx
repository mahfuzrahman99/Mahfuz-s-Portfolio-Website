/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { PhotoView } from "react-photo-view";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../AouthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UpdateProject from "./UpdateProject";

const AllProjectsRow = ({ project, i, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const {
    projectName,
    Short_Screen_Shot,
    Live_Link,
    GitHub_Client_Side_Link,
    GitHub_Server_Side_Link,
  } = project || {};

  const handleDelete = async (id, project) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      iconColor: "#00938a",
      showCancelButton: true,
      confirmButtonColor: "#00938a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    });

    if (confirmed.isConfirmed) {
      try {
        const res = await axiosPublic.delete(`/projects/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${project?.projectName} has been delete from projects lists.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error deleting project:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while deleting project.",
          icon: "error",
        });
      }
    }
  };
  // console.log(project.image)
  return (
    <>
      <tr className="bg-gray-100 text-xs text-black font-semibold">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={Short_Screen_Shot}>
            <img className="h-12" src={Short_Screen_Shot} alt={projectName} />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{projectName}</td>
        <td className="py-2 px-4 border-b-4">
          <a href={Live_Link} target="blanc">
            Live link
          </a>
        </td>
        <td className="py-2 px-4 border-b-4">
          <a href={GitHub_Client_Side_Link} target="blanc">
            GitHub client link
          </a>
        </td>
        <td className="py-2 px-4 border-b-4">
          <a href={GitHub_Server_Side_Link} target="blanc">
            GitHub server link
          </a>
        </td>
        {user?.email === "mahfuzurrahmanshabbir@gmail.com" ? (
          <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
            <button
              onClick={() => setShowModal(true)}
              className="flex justify-center m-1 p-1 rounded bg-[#00938a]"
            >
              <span className="text-4xl">
                <MdOutlineSecurityUpdateGood />
              </span>
            </button>
            <UpdateProject
              project={project}
              refetch={refetch}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </td>
        ) : (
          ""
        )}
        {user?.email === "mahfuzurrahmanshabbir@gmail.com" ? (
          <td className="py-2 px-4 border-b-4">
            <button
              onClick={() => handleDelete(project._id, project)}
              className="bg-red-500 text-white px-2 py-1 rounded ml-2"
            >
              <span className="text-3xl">
                <RiDeleteBin6Line />
              </span>
            </button>
          </td>
        ) : (
          ""
        )}
      </tr>
    </>
  );
};

export default AllProjectsRow;
