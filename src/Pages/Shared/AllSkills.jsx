/* eslint-disable react/prop-types */
import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss,SiExpress, SiFirebase } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import SkillsHook from "../../Hooks/SkillsHook";

const AllSkills = () => {
    return (
        <div className="md:grid grid-cols-3 gap-3 text-white md:gap-5">
            <SkillsHook 
            shadowColor={"#f16529"}
            textColor={"#f16529"}
            icon={<FaHtml5/>}
            glareColor="#f16529"
            name="HTML"
            />
            <SkillsHook 
            shadowColor={"#039be5"}
            textColor={"#039be5"}
            icon={<FaCss3/>}
            glareColor="#039be5"
            name="CSS"
            />
            <SkillsHook 
            shadowColor={"#ffd600"}
            textColor={"#ffd600"}
            icon={<IoLogoJavascript/>}
            glareColor="#ffd600"
            name="JavaScript"
            />
            <SkillsHook 
            shadowColor={"#00d7fe"}
            textColor={"#00d7fe"}
            icon={<FaReact/>}
            glareColor="#00d7fe"
            name="React"
            />
            <SkillsHook 
            shadowColor={"#44a8b3"}
            textColor={"#44a8b3"}
            icon={<SiTailwindcss/>}
            glareColor="#44a8b3"
            name="TailwindCss"
            />
            <SkillsHook 
            shadowColor={"#fdfdfd"}
            textColor={"#fdfdfd"}
            icon={<SiExpress/>}
            glareColor="#fdfdfd"
            name="Express JS"
            />
            <SkillsHook 
            shadowColor={"#116149"}
            textColor={"#116149"}
            icon={<BiLogoMongodb/>}
            glareColor="#116149"
            name="MongoDB"
            />
            <SkillsHook 
            shadowColor={"#026e00"}
            textColor={"#026e00"}
            icon={<FaNode/>}
            glareColor="#026e00"
            name="Node.js"
            />
            <SkillsHook 
            shadowColor={"#f7c52c"}
            textColor={"#f7c52c"}
            icon={<SiFirebase/>}
            glareColor="#f7c52c"
            name="Firebase"
            />
        </div>
    );
};

export default AllSkills;