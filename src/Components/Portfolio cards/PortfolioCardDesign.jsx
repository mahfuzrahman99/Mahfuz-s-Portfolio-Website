/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { FaCode, FaRegEye } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Pages/AouthProvider";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
// import UpdateProject from "../../Pages/Dashboard/UpdateProject";
// import useFetchProjects from "../../Hooks/useFetchProjects";

const PortfolioCardDesign = ({
  ProjectName,
  backgroundImage,
  LiveLink,
  ClientCode,
  ServerCode,
}) => {
  const { user } = useContext(AuthContext);
  const admin = user.email === "mahfuzurrahmanshabbir@gmail.com";
  const [isScrolling, setIsScrolling] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [project] = useFetchProjects();

  const handleMouseEnter = () => {
    setIsScrolling(true);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  return (
    <div className="my-3">
      <div className="bg-[#e2e8f0] rounded-t-md">
        <h1 className="text-lg font-semibold  text-center text-black p-1">
          {ProjectName}
        </h1>
        <div className="">
          <div className="flex justify-center items-center text-black ">
            <div className="flex justify-center gap-6 items-center mb-2">
              <div
                className="text-xl "
                data-tooltip-id="my-tooltip"
                data-tooltip-content="View Details"
              >
                <FaRegEye />
              </div>
              <div>
                <a
                  href={`${LiveLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Live Link"
                >
                  <TfiWorld />
                </a>
              </div>
              <div>
                <a
                  href={`${ClientCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Client Code"
                >
                  <FaCode />
                </a>
              </div>
              {
                <div>
                <a
                  href={`${ServerCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Server Code"
                >
                  <FaCode />
                </a>
              </div>
              }
              {admin ? (
                <div>
                  <Link
                    // onClick={() => setShowModal(true)}
                    to={`/owner_dashboard/allProjects`}
                    rel="noopener noreferrer"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Manage Project"
                  >
                    <FaEdit />
                  </Link>
                  {/* <UpdateProject
                    project={project}
                    refetch={refetch}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  /> */}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {/* first div */}
      <div
        className={`scroll-container mx-auto ${
          isScrolling ? "img-scrolling" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={backgroundImage} alt="" />
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default PortfolioCardDesign;
