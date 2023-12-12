/* eslint-disable react/prop-types */

import Tilt from "react-parallax-tilt";

const SkillsHook = ({ shadowColor, textColor, icon, glareColor, name }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor={glareColor}
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <div
        className={` shadow-[${shadowColor}] shadow-md col-span-1 text-center rounded-lg`}
      >
        <div className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[${textColor}]`}>
          {icon}
        </div>
        <h1 className="mb-2 font-medium">{name}</h1>
      </div>
    </Tilt>
  );
};

export default SkillsHook;
