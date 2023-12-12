import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_fsiuqse', 'template_k2ek7hd', form.current, '_Ry7faN3cOvUnjYMa')
        .then((result) => {
            console.log(result.text);
            if(result.text){
              Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Your message has been send",
                  showConfirmButton: false,
                  timer: 1500
                  });
              }
        }, (error) => {
            console.log(error.text);
        });
    };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     emailjs
//       .sendForm(
//         "service_fsiuqse",
//         "template_k2ek7hd",
//         form.current,
//         "_Ry7faN3cOvUnjYMa"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           if (result.text) {
//             Swal.fire({
//               position: "top",
//               icon: "success",
//               title: "Your message has been send",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           }
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <div>
      <div className="md:grid grid-cols-2">
        <div className=" col-span-1 my-auto">
          <div className="space-y-3 md:space-y-6">
            <h1 className="text-xl font-bold">My Contact Information</h1>
            <a
              href="mailto:mahfuzurrahmanshabbir@gmal.com"
              className="flex gap-2 items-center"
            >
              <span className="text-2xl">
                <MdOutlineMarkEmailRead />
              </span>{" "}
              <span>mahfuzurrahmanshabbir@gmal.com</span>
            </a>
            <a href="tel:+8801888677322" className="flex gap-2 items-center">
              <span className="text-xl">
                <FaPhoneVolume />
              </span>{" "}
              <span>+8801888677322</span>{" "}
            </a>
            <a
              href="https://github.com/mahfuzrahman99"
              target="blank"
              className="flex gap-2 items-center"
            >
              <span className="text-2xl">
                <FaGithub />
              </span>{" "}
              <span>Connect With Github</span>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/mahfuzur-rahman-shabbir-0496752a4/"
              target="blank"
              className="flex gap-2 items-center"
            >
              <span className="text-2xl">
                <FaLinkedin />
              </span>{" "}
              <span>Connect With Linkedin</span>{" "}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100027585996757"
              target="blank"
              className="flex gap-2 items-center"
            >
              <span className="text-2xl">
                <FaFacebook />
              </span>{" "}
              <span>Connect With Facebook</span>{" "}
            </a>
            <p className="flex gap-2 items-center">
              <span className="text-2xl">
                <FaHome />
              </span>
              <span>Address:- Sector-3, Uttara, Dhaka, Bangladesh</span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-3">
            Any Query or Feedback Please Send me an Email
          </h1>

          {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className=" bg-gray-800 rounded-lg p-4"
          >
            <input
              type="text"
              name="user_name"
              className="p-2 rounded-md w-full mb-2"
              placeholder="Inter Your Name"
            />
            <input
              type="email"
              name="user_email"
              className="p-2 rounded-md w-full mb-2"
              placeholder="Inter Your Email"
            />
            <input
              type="number"
              name="number"
              className="p-2 rounded-md w-full mb-2"
              placeholder="Inter Your WhatsApp Number"
            />
            <textarea
              name="message"
              className="p-2 rounded-md w-full mb-2"
              placeholder="Inter Your Message"
              cols="30"
              rows="4"
            ></textarea>
            <input
              type="submit"
              className="btn btn-outline border-none hover:text-white hover:bg-[#47b2f1] bg-[#47b2f1] text-xl font-semibold text-white p-2 rounded-md"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
