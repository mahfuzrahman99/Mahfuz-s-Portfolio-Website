/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../AouthProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UpdateCredential from "./UpdateCredential";

const AllCredentialRow = ({ credential, i, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const {
    credential_Name,
    credential_Screen_Shot,
    credential_Email,
    credential_phone,
    credential_Password
  } = credential || {};

  const handleDelete = async (id, credential) => {
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
        const res = await axiosPublic.delete(`/credentials/${id}`);
        console.log("console log from hare", res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${credential?.credentialName} has been delete from projects lists.`,
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
  return (
    <>
      <tr className="bg-gray-100 text-xs text-black font-semibold">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">{credential_Name}</td>
        <td className="py-2 px-4 border-b-4">{credential_Email}</td>
        <td className="py-2 px-4 border-b-4">{credential_phone}</td>
        <td className="py-2 px-4 border-b-4">{credential_Password}</td>
        <td className="py-2 px-4 border-b-4">
          <a href={credential_Screen_Shot} target="blanc">Click here to view image</a>
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
            <UpdateCredential
              credential={credential}
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
              onClick={() => handleDelete(credential._id, credential)}
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

export default AllCredentialRow;
