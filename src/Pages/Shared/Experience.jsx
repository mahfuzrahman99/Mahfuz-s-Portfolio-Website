import { useState, useEffect } from "react";
import companyLogo from "/src/assets/ts4ubootcamp_logo.jpg";

const Experience = () => {
  //   const [currentDate, setCurrentDate] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    // const formatDate = () => {
    //   const date = new Date();
    //   const formattedDate = new Intl.DateTimeFormat('default', {
    //     day: '2-digit',
    //     month: 'short',
    //     year: 'numeric',
    //   }).format(date);

    //   setCurrentDate(formattedDate);
    // };

    const calculateDuration = () => {
      const startDate = new Date("2024-03-28T08:00:00");
      const endDate = new Date();

      let years = endDate.getFullYear() - startDate.getFullYear();
      let months = endDate.getMonth() - startDate.getMonth();
      let days = endDate.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        days += new Date(
          endDate.getFullYear(),
          endDate.getMonth(),
          0
        ).getDate();
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setDuration(`${years} yrs, ${months} mos`);
    };

    // formatDate();
    calculateDuration();
  }, []);

  return (
    <div className="experience-container mt-8 mr-4 p-4 border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-3">Experience</h1>
      <div className="grid grid-cols-4 gap-4">
        {/* Company Logo */}
        <div>
          <img
            src={companyLogo}
            alt="TS4U Logo"
            className=" max-w-none rounded-xl"
          />
        </div>
        <div className="md:col-span-3 col-span-4">
          {/* Details Section */}
          <h2 className="font-bold text-lg">
            Frontend Developer <small className="font-[300]">at</small>
          </h2>
          <p className="">TS4U IT Engineering Bootcamp</p>
          <p className="">
            <span className="text-sm">{`Mar 2024 - Present · ${duration}`}</span>
            <br />
            Uttara, Dhaka, Bangladesh - On-site
          </p>
        </div>
        <div className="col-span-4">
          <div className="mt-2 text-sm">
            <p>
              {`I am currently working as a Frontend Developer at TS4U IT
              Engineering Bootcamp, a position I have held since March 28, 2024.
              In this role, I am responsible for developing and optimizing user
              interfaces, ensuring they are both visually appealing and highly
              functional. My tasks include coding in HTML, CSS, and JavaScript,
              as well as utilizing my skills in NEXT.js, React.js, Redux, Antd,
              Mentine UI, and SASS. I collaborate with designers and backend
              developers and implement responsive design techniques to enhance
              user experience across various devices. My experience in the MERN
              Stack has equipped me with the skills needed to contribute
              effectively to my team's projects and meet the company's
              objectives.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
