
import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiExpress, SiFirebase } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import SkillsCard from "../Components/SkillsCard";

const Skills = () => {
  return (
    <div className="md:grid grid-cols-3 gap-3 text-white md:gap-5">
      <SkillsCard glrColor={"#f16529"} shadColor={"#f16529"} textColor={"#f16529"} icon={<FaHtml5 />} title={"HTML"}/>

      <SkillsCard glrColor={"#039be5"} shadColor={"#039be5"} textColor={"#039be5"} icon={<FaCss3 />} title={"CSS3"}/>

      <SkillsCard glrColor={"#ffd600"} shadColor={"#ffd600"} textColor={"#ffd600"} icon={<IoLogoJavascript />} title={"JavaScript"}/>

      <SkillsCard glrColor={"#00d7fe"} shadColor={"#00d7fe"} textColor={"#00d7fe"} icon={<FaReact />} title={"React"}/>

      <SkillsCard glrColor={"#44a8b3"} shadColor={"#44a8b3"} textColor={"#44a8b3"} icon={<SiTailwindcss />} title={"Tailwindcss"}/>

      <SkillsCard glrColor={"#fdfdfd"} shadColor={"#fdfdfd"} textColor={"#fdfdfd"} icon={<SiExpress />} title={"Express JS"}/>

      <SkillsCard glrColor={"#116149"} shadColor={"#116149"} textColor={"#116149"} icon={<BiLogoMongodb />} title={"MongoDB"}/>

      <SkillsCard glrColor={"#026e00"} shadColor={"#026e00"} textColor={"#026e00"} icon={<FaNode />} title={"Node JS"}/>

      <SkillsCard glrColor={"#f7c52c"} shadColor={"#f7c52c"} textColor={"#f7c52c"} icon={<SiFirebase />} title={"Firebase"}/>
    </div>
  );
};

export default Skills;
