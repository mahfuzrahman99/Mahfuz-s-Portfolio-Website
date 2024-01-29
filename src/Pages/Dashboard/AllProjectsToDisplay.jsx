/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AouthProvider";
import AllProjectsRow from "./AllProjectsRow";

const AllProjectsToDisplay = ({ projectsToDisplay, refetch }) => {
  const { user } = useContext(AuthContext);


  return (
    <div className="max-w-5xl mx-auto w-[300px] md:w-auto">
      <div className="bg-gray-100 p-4 overflow-x-auto">
        <h1 className="text-xl md:text-3xl mb-2 font-bold text-black">
          Total Projects:{" "}
          {user?.email === "mahfuzurrahmanshabbir@gmail.com"
            ? projectsToDisplay?.length
            : 0}
        </h1>
        <div>
          <table className="min-w-full bg-gray-300">
            <thead className="rounded-t-xl bg-[#00938a] text-white">
              <tr className="rounded-t-xl bg-[#00938a]">
                <th className="py-2 px-4 border-b">NO</th>
                <th className="py-2 px-4 border-b">Picture</th>
                <th className="py-2 px-4 border-b">Project Name</th>
                <th className="py-2 px-4 border-b">Live link</th>
                <th className="py-2 px-4 border-b">GitHub client Link</th>
                <th className="py-2 px-4 border-b">GitHub server Link</th>
                {user?.email === "mahfuzurrahmanshabbir@gmail.com" ? (
                  <th className="py-2 px-4 border-b">Update</th>
                ) : (
                  ""
                )}
                {user?.email === "mahfuzurrahmanshabbir@gmail.com" ? (
                  <th className="py-2 px-4 border-b">Delete</th>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            {user?.email === "mahfuzurrahmanshabbir@gmail.com" ? (
              <tbody>
                {projectsToDisplay?.map((project, i) => (
                  <AllProjectsRow
                    key={project._id}
                    project={project}
                    refetch={refetch}
                    i={i}
                  />
                ))}
              </tbody>
            ) : (
              ""
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsToDisplay;
