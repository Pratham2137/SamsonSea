import Logo from "../assets/HomePage/SAMSON SEA PNG.png";
import Video from "../assets/HomePage/SAMSON NO TEXT.mp4";

// HeroSection component starts here
const HeroSection = () => {
  return (
    // Main container for the Hero Section: positions and centers the video and logo
    <div
      className={`h-[calc(100vh-60px)] relative flex justify-center items-center`}
    >
      {/* Background video component: covers entire section and plays automatically */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover z-[-1]"
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Logo component: Positioned above the video */}
      <img src={Logo} alt="Logo" className={`absolute z-2 h-[300px]`} />
    </div>
  );
};
// HeroSection component ends here

export default HeroSection;
