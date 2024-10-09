import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ContactForm = ({ className }) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwGvbNKUmFngvMb4v7VrALtk8U7kccejnw_KZFg-1lBiEBS9U0rtyzi3kguhx73Fkk4/exec";

  const [phone, setPhone] = useState(""); // State for storing phone number

  // Function to format phone number with country code in parentheses
  const formatPhoneNumber = (phoneNumber) => {
    // Extract country code and the actual number
    const countryCode = phoneNumber.match(/^\+\d+/); // Regex to match the country code
    const number = phoneNumber.replace(countryCode, ""); // Extracting the number part

    // Return the formatted phone number as (country code) number
    return countryCode ? `(${countryCode}) ${number}` : phoneNumber;
  };

  useEffect(() => {
    const form = document.forms["contact-form"];

    if (form) {
      const handleSubmit = (e) => {
        e.preventDefault();

        // Manually append the formatted phone number to the FormData object
        const formData = new FormData(form);
        const formattedPhone = formatPhoneNumber(phone); // Format the phone number
        formData.append("phone", formattedPhone);

        fetch(scriptURL, { method: "POST", body: formData })
          // eslint-disable-next-line no-unused-vars
          .then((response) =>
            alert("Thank you! Your form is submitted successfully.")
          )
          .then(() => {
            window.location.reload();
          })
          .catch((error) => console.error("Error!", error.message));
      };

      form.addEventListener("submit", handleSubmit);

      // Cleanup event listener when component unmounts
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, [phone]); // Dependency array to update whenever phone changes

  const classes = `flex justify-center py-5 px-4 ${className || ""}`;

  return (
    <div className={classes}>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-x-10 gap-y-10 shadow-custom-dark rounded-md max-w-[1200px] min-w-[350px] p-10 bg-white">
        <div className="flex flex-col items-center lg:items-start lg:w-[55%] gap-y-5">
          <div className="">
            <h2 className="lg:text-4xl text-3xl font-bold lg:font-semibold mb-4 text-[#132238] lg:text-start text-center">
              Let&apos;s discuss your Project
            </h2>
            <p className="text-[#87909D] text-sm lg:w-[80%] text-center w-full lg:text-justify">
              For any inquiries or to learn more about our services, please
              don&apos;t hesitate to reach out to us. Our team is ready to
              assist you with all your maritime needs and provide prompt,
              professional support.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 hover:shadow-md w-[300px] p-3 rounded-md">
              <div className="bg-[#091242] p-3 rounded-md">
                <SlLocationPin className="text-white font-bold h-5 w-5" />
              </div>
              <div>
                <h5 className="text-[#424E60]">Location:</h5>
                <p className="text-[#132238] font-semibold">
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 hover:shadow-md w-[300px] p-3 rounded-md">
              <div className="bg-[#091242] p-3 rounded-md">
                <MdOutlineMail className="text-white font-bold h-5 w-5" />
              </div>
              <div>
                <h5 className="text-[#424E60]">My Email:</h5>
                <a
                  href="mailto:smsnsea@gmail.com"
                  className="text-[#132238] font-semibold"
                >
                  smsnsea@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 hover:shadow-md w-[300px] p-3 rounded-md">
              <div className="bg-[#091242] p-3 rounded-md">
                <FiPhoneCall className="text-white font-bold h-5 w-5" />
              </div>
              <div>
                <h5 className="text-[#424E60]">Call Us Now:</h5>
                <div className="text-[#132238] font-semibold flex ">
                  <a href="tel:9870445480">9870445480</a>
                  <p>&ensp;/&ensp;</p>
                  <a href="tel:7768825296">7768825296</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5 items-center">
            <a
              className="hover:bg-[#091242] hover:text-white text-[#091242] text-xl p-2 rounded"
              href="https://www.facebook.com/"
            >
              <FaFacebookF />
            </a>
            <a
              className="hover:bg-[#091242] hover:text-white text-[#091242] text-xl p-2 rounded"
              href="https://www.instagram.com/"
            >
              <FaInstagram />
            </a>
            <a
              className="hover:bg-[#091242] hover:text-white text-[#091242] text-xl p-2 rounded"
              href="https://in.linkedin.com/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[#87909D] text-[15px] mb-6 lg:text-start text-center">
            Get in touch with Samson Sea for reliable maritime solutions.
            We&apos;re here to assist with all your inquiries
          </p>
          <div>
            <form
              action=""
              method="post"
              name="contact-form"
              className="space-y-7"
            >
              {/* Input Box for Name */}
              <div className="relative mb-6 inputBox">
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full py-2.5 text-base border-b border-gray-300 bg-transparent outline-none focus:border-[#091242]  transition-all"
                />
                <label className="absolute top-0 left-0 py-2.5 text-base pointer-events-none transition-all duration-300">
                  Name*
                </label>
              </div>

              {/* Input Box for Email */}
              <div className="relative mb-6 inputBox">
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full py-2.5 text-base border-b border-gray-300 bg-transparent outline-none focus:border-[#091242]  transition-all"
                />
                <label className="absolute top-0 left-0 py-2.5 text-base pointer-events-none transition-all duration-300">
                  Email*
                </label>
              </div>

              {/* Input Box for Location */}
              <div className="relative mb-6 inputBox">
                <input
                  required
                  name="location"
                  type="text"
                  className="w-full py-2.5 text-base border-b border-gray-300 bg-transparent outline-none focus:border-[#091242]  transition-all"
                />
                <label className="absolute top-0 left-0 py-2.5 text-base  pointer-events-none transition-all duration-300">
                  Location
                </label>
              </div>

              {/* Dropdown for Service Selection */}
              <div className="relative mb-6 inputBox">
                <select
                  required
                  name="service"
                  className="w-full py-2.5 text-base border-b border-gray-300 bg-transparent outline-none focus:border-[#091242] transition-all "
                  defaultValue="Select a Service"
                >
                  <option value="Select a Service" disabled>
                    Select a Service*
                  </option>
                  <option value="Ship Management & Consultancy Services">
                    Ship Management & Consultancy Services
                  </option>
                  <option value="Ship Brokers & Charterers-Offshore">
                    Ship Brokers & Charterers-Offshore
                  </option>
                  <option value="Men and Material Movement">
                    Men and Material Movement
                  </option>
                  <option value="Offshore Personnel Transportation">
                    Offshore Personnel Transportation
                  </option>
                  <option value="Ship Sale & Purchase">
                    Ship Sale & Purchase
                  </option>
                  <option value="Salvage & Towage Services">
                    Salvage & Towage Services
                  </option>
                </select>
              </div>

              {/* Mobile Number with Country Code */}
              <div className="relative mb-6 inputBox">
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)} // Store phone number in state
                  inputStyle={{
                    height: 45 + "px",
                    width: "100%",
                    border: "none",
                    borderBottom: "1px solid #D1D5DB",
                    borderRadius: 0 + "px",
                  }}
                  buttonStyle={{
                    background: "transparent",
                    width: 50 + "px",
                    border: "none",
                  }}
                  containerStyle={{
                    borderRadius: 0 + "px",
                  }}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#091242] hover:bg-[--pageYellow] duration-300 py-3 px-8 text-white text-base font-medium flex items-center gap-2 rounded"
              >
                Submit <PiPaperPlaneRightBold />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
