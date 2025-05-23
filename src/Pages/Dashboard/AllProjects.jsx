import { useState } from "react";
import useFetchProjects from "../../Hooks/useFetchProjects";
import AllProjectsToDisplay from "./AllProjectsToDisplay";
import AddProject from "./AddProject";

const AllProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchedHouse, setSearchedHouse] = useState()
  const [projects, refetch] = useFetchProjects() || [];
  
  const handleSearchBlog = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();

    const filteredHouse = projects?.filter(
      (house) => house.projectName.toLowerCase() === enteredSearchValue
    );

    setSearchedHouse(filteredHouse);
  };
  const projectsToDisplay = searchedHouse?.length ? searchedHouse : projects;
// console.log(typeof(projectsToDisplay))
  return (
    <div>
      <div className="flex justify-between m-3 md:m-10">
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-ghost bg-[#00938a] hover:bg-[#00938a] shadow-xl text-white p-2 rounded-md"
          >
            ADD A PROJECT
          </button>
          <AddProject showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div>
          <form onSubmit={handleSearchBlog} className="join">
            <input
              type="text"
              name="search"
              className="hover:border-none px-5 join-item bg-[#fff] shadow-xl outline-none"
              placeholder="Search a project..."
            />
            <button className="btn join-item rounded-r-md bg-[#00938a] hover:bg-[#00938a] border-none text-white p-2">
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div>
        {
        <AllProjectsToDisplay
          refetch={refetch}
          projectsToDisplay={projectsToDisplay}
        />
        }
      </div>
    </div>
  );
};

export default AllProjects;
