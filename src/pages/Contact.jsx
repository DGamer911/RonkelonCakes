import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const iconStyles = `px-2 py-3 block bg-white rounded-xl`;
  return (
    <div className=" lg:flex-row flex-col flex w-full">
      <div className="bg-[var(--color-cream)] h-[calc(100vh-60px)] lg:w-1/2 py-5 lg:py-0 w-full flex items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center">
          <h1
            style={{ fontFamily: "MyCustomFont" }}
            className="lg:text-5xl text-3xl font-medium"
          >
            Reach Out To Us <span className="text-[var(--color-orange)]" style={{fontFamily: "myCustomFont"}}>Today!</span>
          </h1>
          <p className="mt-4 px-10 font-light max-w-[600px]">
            We'd love to hear from you. whether you have a question, a special
            order, or feedback to share, the team at{" "}
            <strong><em>Bakehouse by Ronkelon</em></strong> is always happy to help.  
          </p>
          <div className="w-full mt-4 flex-col justify-center items-center">
            <ul className="flex items-center justify-center flex-wrap gap-2 w-full">
              <li className="text-base flex gap-2 items-center rounded w-[285px] bg-white">
                <span className="bg-[var(--color-coral)] text-white p-3 rounded-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span className="text-center">Ronkeobieloglan@gmail.com</span>
              </li>
              <li className="text-lg w-[285px] flex gap-2 items-center rounded w-100 bg-white">
                <span className="bg-green-400 text-white p-3 rounded-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <span>+234 803 260 5562</span>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
      <div className="bg-white lg:w-1/2 py-5 w-full lg:py-0  h-[calc(100vh-60px)] px-[40px] flex items-center justify-center">
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-[500px]"
          onSubmit={handleClick}
        >
          <div className="md:col-span-1 lg:col-span-1 sm:col-span-1 col-span-2">
            <label htmlFor="" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              className="border border-[var(--color-orange)] px-1 py-2 rounded-lg w-full"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-1 lg:col-span-1 sm:col-span-1 col-span-2">
            <label htmlFor="" className="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="border border-[var(--color-orange)] px-1 py-2 rounded-lg w-full"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="block mb-2">
              Email Address
            </label>
            <input
              type="text"
              className="border border-[var(--color-orange)] px-1 py-2 rounded-lg w-full"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="block mb-2">
              Message
            </label>
            <textarea
              className="border border-[var(--color-orange)] px-1   py-2 rounded-lg w-full"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full col-span-2 py-2 rounded-lg bg-[var(--color-orange)]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
