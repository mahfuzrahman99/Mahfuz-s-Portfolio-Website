import { useState } from "react";
import AllCredentialsToDisplay from "./AllCredentialsToDisplay";
import AddCredential from "./AddCredential";
import useFetchCredentials from "../../../Hooks/useFetchCredentials";

const AllCredentials = () => {
  // const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchedCredential, setSearchedCredential] = useState();
  const [credentials, refetch] = useFetchCredentials() || [];

  // useEffect(() => {
  //   fetch("/credentials.json")
  //     .then((res) => res.json())
  //     .then((data) => setDatas(data));
  // }, []);

  const handleSearchCredential = (e) => {
    e.preventDefault();
    const enteredSearchValue = e.target.search.value.toLowerCase();
    e.target.reset();

    const filteredCredential = credentials?.filter(
      (data) => data.projectName.toLowerCase() === enteredSearchValue
    );

    setSearchedCredential(filteredCredential || []);
  };
  // const credentialsToDisplay = searchedCredential?.length ? searchedCredential : credentials;
  // Always default to an empty array if credentialsToDisplay is undefined
  const credentialsToDisplay =
    Array.isArray(searchedCredential) && searchedCredential.length
      ? searchedCredential
      : Array.isArray(credentials)
      ? credentials
      : [];
  return (
    <div>
      <div className="flex justify-between m-3 md:m-10">
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-ghost bg-[#00938a] text-white p-2 rounded-md"
          >
            ADD A Credential
          </button>
          <AddCredential
            showModal={showModal}
            setShowModal={setShowModal}
            refetch={refetch}
          />
        </div>
        <div>
          <form onSubmit={handleSearchCredential} className="join">
            <input
              type="text"
              name="search"
              className="hover:border-none px-5 join-item"
              placeholder="Search a project..."
            />
            <button className="btn join-item rounded-r-md bg-[#00938a] text-white p-2">
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div>
        <AllCredentialsToDisplay
          refetch={refetch}
          credentialsToDisplay={credentialsToDisplay}
        />
      </div>
    </div>
  );
};

export default AllCredentials;
