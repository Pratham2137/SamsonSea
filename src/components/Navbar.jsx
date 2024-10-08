import { Link, useLocation } from "react-router-dom";
import { navigation } from "../constants";
import logo from "../assets/Navbar/SamsonSea-Logo.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const location = useLocation(); // Get the current route location

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  // Helper function to check if the current link is active
  const isActiveLink = (url) => location.pathname === url;

  const handleLinkClick = () => {
    if (openNavigation) {
      setOpenNavigation(false); // Close the menu when a link is clicked
    }
  };

  return (
    <header className="w-full h-[60px] flex justify-center items-center">
      <nav
        className={`flex justify-between items-center max-w-[1200px] min-w-[350px] h-full w-full px-7 ${
          openNavigation ? "w-full" : ""
        } `}
      >
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="SamsonSea" width={180} height={40} />
        </Link>
        <div
          className={`${
            openNavigation
              ? "absolute top-[60px] left-0 py-7 flex flex-col items-center w-full border-b-2 border-[--pageYellow] bg-white z-10"
              : "hidden"
          } gap-[2.5rem] uppercase lg:flex transition-all duration-300 `}
        >
          {navigation.map((navItems) => (
            <Link
              to={navItems.url}
              key={navItems.id}
              className="relative group py-1 px-3 rounded-xl"
              onClick={handleLinkClick} // Close the menu on link click
            >
              {navItems.title}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-[--pageYellow] ${
                  isActiveLink(navItems.url) ? "w-[50%]" : "w-0"
                } transition-all duration-300 group-hover:w-[50%]`}
              ></span>
            </Link>
          ))}
        </div>
        <Link
          to="#"
          className="hidden lg:block bg-[--pageYellow] px-6 py-1.5 rounded-3xl font-semibold text-[--pageBlue] hover:bg-[--pageBlue] hover:text-[--pageYellow] transition-all duration-300 active:bg-[#2d408a] hover:shadow-2xl"
        >
          Call Now
        </Link>
        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          {openNavigation ? (
            <IoMdClose className="text-3xl text-[--pageBlue]" />
          ) : (
            <IoMenu className="text-3xl text-[--pageBlue]" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
