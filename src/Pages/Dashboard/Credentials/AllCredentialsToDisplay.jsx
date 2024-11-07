/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../AouthProvider";
import AllCredentialRow from "./AllCredentialRow";
import Skeleton from "react-loading-skeleton";

const AllCredentialsToDisplay = ({ credentialsToDisplay, refetch }) => {
  const { user } = useContext(AuthContext);
  console.log(credentialsToDisplay);

  return (
    <div className="max-w-6xl mx-auto w-[300px] md:w-auto shadow-xl">
      <div className="bg-gray-100 p-4 overflow-x-auto">
        <h1 className="text-xl md:text-3xl mb-2 font-bold text-black">
          Total Credentials:{" "}
          {user?.email === "mahfuzurrahmanshabbir@gmail.com"
            ? credentialsToDisplay?.length
            : 0}
        </h1>
        <div>
          <table className="min-w-full bg-gray-300">
            <thead className="rounded-t-xl bg-[#00938a] text-white">
              <tr className="rounded-t-xl bg-[#00938a]">
                <th className="py-2 px-4 border-b">NO</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Password</th>
                <th className="py-2 px-4 border-b">ScreenShot URL</th>
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
              <>
                {credentialsToDisplay.length ? (
                  <tbody>
                    {Array.isArray(credentialsToDisplay) &&
                      credentialsToDisplay?.map((credential, i) => (
                        <AllCredentialRow
                          key={credential._id}
                          credential={credential}
                          refetch={refetch}
                          i={i}
                        />
                      ))}
                  </tbody>
                ) : (
                  <Skeleton count={credentialsToDisplay.length} />
                )}
              </>
            ) : (
              ""
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCredentialsToDisplay;
