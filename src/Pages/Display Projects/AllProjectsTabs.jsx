import { useState } from "react";
import FrontendBased from "./FrontendBased";
import FullStackBased from "./FullStackBased";
import VanillaCSSBased from "./VanillaCSSBased";
import VanillaJavascriptBased from "./VanillaJavascriptBased";

const AllProjectsTabs = () => {
  const [active, setActive] = useState(0);
  const tablist = [
    { label: "Full Stack Based", component: <FullStackBased />, id: 0 },
    { label: "Frontend Based", component: <FrontendBased />, id: 1 },
    {
      label: "JavaScript Based",
      component: <VanillaJavascriptBased />,
      id: 2,
    },
    { label: "Vanilla CSS Based", component: <VanillaCSSBased />, id: 3 },
  ];

  const handleTabs = (id) => {
    setActive(id);
  };

  const tabWidthPercentage =
    active === 0
      ? 105 / tablist.length
      : active === 2
      ? 98 / tablist.length
      : 99 / tablist.length;

  return (
    <>
      <div
        role="tablist"
        className="tabs bg-slate-200 p-1 md:p-3  rounded-md relative"
      >
        {tablist.map((tab) => (
          <a
            onClick={() => handleTabs(tab.id)}
            key={tab.id}
            role="tab"
            className={`text-[8px]  md:text-base tab z-20 font-extrabold md:font-semibold text-black ${
              active === tab.id ? "rounded-md bg-transparent" : ""
            } `}
          >
            {tab.label}
          </a>
        ))}
        <div
          className="absolute bottom-0 z-10 rounded-md shadow-2xl ml-1 bg-[#50b6f2] text-black transition-all duration-700 h-[80%] top-[10%]"
          style={{
            left: `${tabWidthPercentage * active}%`,
            width: `${tabWidthPercentage}%`,
          }}
        ></div>
      </div>
      <div>
        {tablist.map((tab) => (tab.id === active ? tab.component : ""))}
      </div>
    </>
  );
};

export default AllProjectsTabs;
