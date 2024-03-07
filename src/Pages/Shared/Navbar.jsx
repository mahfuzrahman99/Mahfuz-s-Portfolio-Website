/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AouthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // let user = true;
  const admin = user?.email === "mahfuzurrahmanshabbir@gmail.com";
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e?.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const isDarkTheme = theme === "dark";

  const navLinks = (
    <>
      <li>
        <a
          href="#about"
          className="font-bold hover:text-[#47b2f1] hover:font-bold  text-[#47b2f1]"
        >
          ABOUT
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="font-bold hover:text-[#47b2f1] hover:font-bold  text-[#47b2f1]"
        >
          CONTACT
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          className="font-bold hover:text-[#47b2f1] hover:font-bold  text-[#47b2f1]"
        >
          PORTFOLIO
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="font-bold hover:text-[#47b2f1] hover:font-bold  text-[#47b2f1]"
        >
          SKILLS
        </a>
      </li>
      { admin &&  
      <li>
        <NavLink
          to="/owner_Dashboard/allProjects"
          className="font-bold hover:text-[#47b2f1] hover:font-bold  text-[#47b2f1]"
        >
          OWNER PROFILE
        </NavLink>
      </li>}
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  };

  return (
    <div
      className={`navbar z-50 fixed top-0  ${
        isDarkTheme ? "bg-black bg-opacity-70" : "bg-white opacity-95"
      }  w-full`}
    >
      <div className="navbar-start w-full md:w-1/4">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-outline border-none hover:bg-transparent lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 z-50 ${
                isDarkTheme ? "text-[#a6adbb]" : "text-[#47b2f1]"
              }`}
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm absolute dropdown-content mt-3 z-[50] p-2 shadow bg-black bg-opacity-60 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div className="">
            {/* <img src={Plogo} alt="" /> */}
            <h1
              className={`text-3xl  mt-2 font-bold font-signature hidden md:block ${
                isDarkTheme ? "text-[#a6adbb]" : "text-[#47b2f1]"
              }`}
            >
              Mahfuzur Rahman Shabbir
            </h1>
            <h1
              className={`text-xl  mt-2 font-semibold font-signature md:hidden ${
                isDarkTheme ? "text-[#a6adbb]" : "text-[#47b2f1]"
              }`}
            >
              Mahfuzur Rahman
            </h1>
          </div>
          <label className="swap swap-rotate md:hidden">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            {/* sun icon */}
            <svg
              className="swap-on text-[#a6adbb] fill-current w-4 md:w-8 h-4 mt-1 md:mt-auto md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off text-[#47b2f1] fill-current w-5 md:w-8 h-5 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
      <div className="navbar-end w-1/6 md:w-3/4">
        <div className=" hidden lg:flex justify-center items-center">
          <ul className="menu menu-horizontal text-black">{navLinks}</ul>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />
            {/* sun icon */}
            <svg
              className="swap-on text-[#a6adbb] fill-current w-4 md:w-8 h-4 mt-1 md:mt-auto md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off text-[#47b2f1] fill-current w-4 md:w-8 h-4 mt-1 md:mt-auto md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        
        <div className="dropdown dropdown-end flex items-center ">
          {admin ? (
            <>
              <div className="dropdown z-10 dropdown-bottom dropdown-end">
                <motion.figure
                  tabIndex={0}
                  animate={{
                    scale: [1, 1, 1, 1, 1],
                    rotate: [0, 0, 0, 0, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <img
                    src={user?.photoURL}
                    className="h-[35px] md:h-[50px] w-[35] md:w-[50px] rounded-full"
                    alt={user?.displayName ? user?.displayName : "Not Found"}
                  />
                </motion.figure>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-black bg-opacity-60"
                >
                  <li>
                    <a className="text-[#47b2f1]">
                      {user?.displayName ? "Mahfuzur Rahman" : "Mahfuzur Rahman"}
                    </a>
                  </li>
                  <li>
                    <a>
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          ease: "linear",
                          duration: 0.5,
                          x: { duration: 0.5 },
                        }}
                        onClick={handleLogout}
                        className=" btn-sm border-none btn-outline rounded-md font-semibold uppercase hover:bg-transparent  text-[#47b2f1]"
                      >
                        Logout
                      </motion.button>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
          <label
            tabIndex={0}
            className="btn btn-outline btn-circle border-none hover:bg-transparent avatar"
          >
            
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
