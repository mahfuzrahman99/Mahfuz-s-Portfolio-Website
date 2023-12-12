import Tilt from "react-parallax-tilt";
import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiExpress, SiFirebase } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="md:grid grid-cols-3 gap-3 text-white md:gap-5">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#f16529"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#f16529] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#f16529]`}
          >
            <FaHtml5 />
          </div>
          <h1 className="mb-2 font-medium">HTML</h1>
        </div>
      </Tilt>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#039be5"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#039be5] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#039be5]`}
          >
            <FaCss3 />
          </div>
          <h1 className="mb-2 font-medium">CSS</h1>
        </div>
      </Tilt>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#ffd600"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#ffd600] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#ffd600]`}
          >
            <IoLogoJavascript />
          </div>
          <h1 className="mb-2 font-medium">JavaScript</h1>
        </div>
      </Tilt>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#00d7fe"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#00d7fe] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#00d7fe]`}
          >
            <FaReact />
          </div>
          <h1 className="mb-2 font-medium">React</h1>
        </div>
      </Tilt>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#44a8b3"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#44a8b3] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#44a8b3]`}
          >
            <SiTailwindcss />
          </div>
          <h1 className="mb-2 font-medium">Tailwindcss</h1>
        </div>
      </Tilt>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#fdfdfd"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#fdfdfd] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#fdfdfd]`}
          >
            <SiExpress />
          </div>
          <h1 className="mb-2 font-medium">Express JS</h1>
        </div>
      </Tilt>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#116149"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#116149] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#116149]`}
          >
            <BiLogoMongodb />
          </div>
          <h1 className="mb-2 font-medium">MongoDB</h1>
        </div>
      </Tilt>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#026e00"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#026e00] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#026e00]`}
          >
            <FaNode />
          </div>
          <h1 className="mb-2 font-medium">Node.js</h1>
        </div>
      </Tilt>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.8}
        glareColor="#f7c52c"
        glarePosition="bottom"
        glareBorderRadius="20px"
      >
        <div
          className={` shadow-[#f7c52c] shadow-md col-span-1 text-center rounded-lg`}
        >
          <div
            className={`px-[110px] md:px-[117px] pb-4 text-8xl text-[#f7c52c]`}
          >
            <SiFirebase />
          </div>
          <h1 className="mb-2 font-medium">Firebase</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Skills;
