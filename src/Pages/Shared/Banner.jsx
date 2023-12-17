import bannerImg from "../../assets/IMG_20220712_182610-removebg-preview (1).png";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Banner = () => {
  return (
    <div className="flex items-center md:pt-14">
      <div className="absolute hidden md:block">
        <div className="fixed top-[35%]">
          <div className="group">
            <a
              href="https://www.linkedin.com/in/mahfuzur-rahman-shabbir-0496752a4/"
              className="px-2 flex gap-1 items-center transform transition-transform duration-300 group-hover:flex-none group-hover:-translate-x-2 "
            >
              <p className="group-hover:flex hidden text-2xl  font-bold">
                LinkedIn
              </p>
              <p className="text-6xl">
                <FaLinkedin />
              </p>
            </a>
          </div>
          <div className="group">
            <a
              href="https://github.com/mahfuzrahman99"
              className="px-2 flex gap-1 items-center transform transition-transform duration-300 group-hover:flex-none group-hover:-translate-x-2"
            >
              <p className="group-hover:flex hidden text-2xl font-bold">
                Github
              </p>
              <p className="text-6xl">
                <FaGithubSquare />
              </p>
            </a>
          </div>
          <div className="group transition-all duration-600">
            <a
              href="mailto:mahfuzurrahmanshabbir@gmail.com"
              className="px-2 flex gap-1 items-center group-hover:flex-none group-hover:-translate-x-2"
            >
              <p className="group-hover:flex hidden text-2xl font-bold ">
                Email
              </p>
              <p className="text-6xl">
                <MdEmail />
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto md:grid grid-cols-2 gap-3 my-12 relative">
        <div className=" my-auto col-span-1 text-left space-y-3 md:p-0 p-4">
          <h1 className="text-3xl md:text-6xl font-bold">
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Front End Developer
            </span>
          </h1>
          <p>
            Greetings! I am Mahfuzur Rahman Shabbir, a skilled MERN stack
            developer and front-end specialist. With expertise in crafting
            visually appealing websites, I excel at translating ideas into
            interactive web applications. Whether you are a small business
            building an online presence or a medium-sized enterprise, I am here
            to meet your digital needs
          </p>
          <div className="flex items-center ">
            <a
              href="#portfolio"
              className="text-xl font-semibold btn btn-outline border-none text-white bg-[#06b6d4] rounded-md hover:bg-[#a6adbb] mr-3"
            >
              Portfolio
              <span className="font-bold">
                <HiArrowRight />
              </span>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1enjY4MvV-kPAV9vZz8er5I14OCK7dWVN"
              className="text-xl font-semibold btn btn-outline border-none text-white bg-[#06b6d4] rounded-md hover:bg-[#a6adbb]"
            >
              Resume
              <span className="font-bold">
                <HiArrowDown />
              </span>
            </a>
            {/* <a
              href="/public/resume.pdf"
              download="resume.pdf"
              className="text-xl font-semibold btn btn-outline border-none text-white bg-[#06b6d4] rounded-md hover:bg-[#a6adbb]"
            >
              Resume
              <span className="font-bold">
                <HiArrowDown />
              </span>
            </a> */}
          </div>
        </div>
        <div className="flex justify-center w-full col-span-1">
          <Tilt className="parallax-effect" perspective={500}>
            <PhotoView src={bannerImg}>
              <div className="inner-element ">
                <img
                  className="h-[400px] rounded-xl bg-[#a6adbb] shadow-[#a6adbb] shadow-lg"
                  src={bannerImg}
                  alt=""
                />
              </div>
            </PhotoView>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Banner;
