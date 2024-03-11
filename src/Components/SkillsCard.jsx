/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";

const SkillsCard = ({ glrColor, shadColor, textColor, icon, title }) => {
  return (
    <>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor={glrColor}
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className="shadow-md col-span-1 text-center rounded-lg"
          style={{ boxShadow: `0px 4px 6px ${shadColor}` }}
        >
          <div
            className="px-[110px] md:px-[117px] pb-4 text-8xl"
            style={{ color: textColor }}
          >
            {icon}
          </div>
          <h1 className="mb-2 font-medium">{title}</h1>
        </div>
      </Tilt>
    </>
  );
};

export default SkillsCard;
