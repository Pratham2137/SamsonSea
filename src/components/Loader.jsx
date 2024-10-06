import Logo from "../assets/Navbar/SamsonSea-Logo.png"

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 relative">
      </div>
        <img src={Logo} className="absolute z-10 w-[110px] h-[60px]"/>
    </div>
  );
};

export default Loader;
