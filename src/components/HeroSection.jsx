import Logo from "../assets/HomePage/SAMSON SEA PNG.png";
import Video from '../assets/HomePage/SAMSON NO TEXT.mp4'

const HeroSection = () => {
  return (
    <div className={`h-[calc(100vh-60px)] relative flex justify-center items-center`}>
    <video autoPlay loop muted playsInline className="w-full h-full object-cover z-[-1]">
      <source src={Video} type="video/mp4" />
    </video>
    <img src={Logo} alt="Logo" className={`absolute z-2 h-[300px]`} />
  </div>
  )
}

export default HeroSection