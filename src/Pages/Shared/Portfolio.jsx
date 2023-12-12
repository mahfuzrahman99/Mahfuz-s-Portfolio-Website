import TwelveD from "../../assets/TwelveDecstopHomePage.png";
import TwelveS from "../../assets/TwelveSmallDeviseHomePage.png";
import ElevenD from "../../assets/ElevenDesctopHomePage.png";
import ElevenS from "../../assets/ElevenSmallDeviseHomePage.png";
import TenD from "../../assets/TenDesctopHomePage.png";
import TenS from "../../assets/TenSmallDeviseHomePage.png";
import "../Css/portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-xl font-medium underline">
        Checkout some of my work here
      </h1>
      <div>
        <div>
          <div className="flex flex-col md:flex-row gap-2 md:my-8 md:gap-12 items-center">
            <h1 className="text-3xl font-bold md:mb-4">CareCampusPro</h1>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mb-3">
              <a
                href="https://assignment-twelve-c5a2f.web.app/"
                target="blank"
                className="btn-sm btn-outline rounded-md border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Live Side
              </a>
              <span className="text-2xl mx-2 hidden md:block">|</span>
              <a
                href="https://github.com/mahfuzrahman99/Assignment-Twelve-Client-Side-Repo"
                target="blank"
                className="btn-sm btn-outline rounded-md  border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Client Side Repo
              </a>
              <span className="text-2xl mx-2 hidden md:block">|</span>
              <a
                href="https://github.com/mahfuzrahman99/Assignment-Twelve-Server-Side"
                target="blank"
                className="btn-sm btn-outline rounded-md  border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Server Side Repo
              </a>
            </div>
          </div>
          <div className="md:relative">
            <div className="max-w-3xl hidden md:block max-h-[400px] overflow-hidden rounded-lg shadow-2xl">
              <img
                className="rounded-lg shadow-2xl bg-[#47b2f1] scroll-container"
                src={TwelveD}
                alt=""
              />
            </div>
            <div className="md:absolute max-h-[400px] md:right-[100px] md:top-[80px] overflow-hidden rounded-lg shadow-2xl">
              <img
                className="rounded-lg shadow-2xl scroll-container bg-[#47b2f1]"
                src={TwelveS}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-44">
        <div>
          <div className="flex flex-col md:flex-row justify-end gap-2 md:my-8 md:gap-12 items-center">
            <h1 className="text-3xl font-bold md:hidden">Your Dream Coffee</h1>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 my-3">
              <a
                href="https://the-dragon-house.web.app/"
                target="blank"
                className="btn-sm btn-outline rounded-md border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Live Side
              </a>
              <span className="text-2xl mx-2 hidden md:block">|</span>
              <a
                href="https://github.com/mahfuzrahman99/Assignment-Eleven-Client-Side"
                target="blank"
                className="btn-sm btn-outline rounded-md  border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Client Side Repo
              </a>
              <span className="text-2xl mx-2 hidden md:block">|</span>
              <a
                href="https://github.com/mahfuzrahman99/Assignment-Eleven-Server-Side"
                target="blank"
                className="btn-sm btn-outline rounded-md  border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Server Side Repo
              </a>
            </div>
            <h1 className="text-3xl font-bold hidden md:block">Your Dream Coffee</h1>
          </div>
          <div className="md:relative">
            <div className="max-w-3xl hidden md:block ml-64 max-h-[400px]  overflow-hidden rounded-lg shadow-2xl">
              <img
                className="rounded-lg scroll-container shadow-2xl bg-[#47b2f1]"
                src={ElevenD}
                alt=""
              />
            </div>
            <div className="md:absolute max-h-[400px] md:left-[100px] md:top-[80px]  overflow-hidden rounded-lg shadow-2xl">
              <img
                className="rounded-lg scroll-container shadow-2xl bg-[#47b2f1]"
                src={ElevenS}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-col md:flex-row gap-2 md:my-8 md:gap-12 items-center">
            <h1 className="text-3xl font-bold md:mb-4">Automotive Care</h1>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mb-3">
              <a
                href="https://assignment-ten-1cb40.web.app/"
                target="blank"
                className="btn-sm btn-outline rounded-md border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Live Side
              </a>
              <span className="text-2xl mx-2 hidden md:block">|</span>
              <a
                href="https://github.com/mahfuzrahman99/Assignment-Ten-Client-Side"
                target="blank"
                className="btn-sm btn-outline rounded-md  border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Client Side Repo
              </a>
              <span className="text-2xl mx-2 hidden md:block">|</span>
              <a
                href="https://github.com/mahfuzrahman99/Assignment-Ten-Server-Side"
                target="blank"
                className="btn-sm btn-outline rounded-md  border-none hover:bg-[#47b2f1] text-white bg-[#47b2f1] hover:text-white text-lg font-medium"
              >
                Server Side Repo
              </a>
            </div>
          </div>
          <div className="md:relative">
            <div className="max-w-3xl hidden md:block max-h-[400px]  overflow-hidden rounded-lg shadow-2xl">
              <img
                className="rounded-lg scroll-container shadow-2xl bg-[#47b2f1]"
                src={TenD}
                alt=""
              />
            </div>
            <div className="md:absolute max-h-[400px] md:right-[100px] md:top-[80px]  overflow-hidden rounded-lg shadow-2xl">
              <img
                className="rounded-lg scroll-container shadow-2xl bg-[#47b2f1]"
                src={TenS}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
