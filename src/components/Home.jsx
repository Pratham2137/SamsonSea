import ContactForm from "./ContactForm";
import HeroAboutSection from "./HeroAboutSection";
import HeroFeaturesSection from "./HeroFeaturesSection";
import HeroSection from "./HeroSection";
import HeroServiceSection from "./HeroServiceSection";

// Home component starts here
const Home = () => {
  return (
    <main className="relative">
      {/* Hero sections */}
      <HeroSection /> {/* Main hero section with background video and logo */}
      <HeroAboutSection /> {/* Section for "About" content */}
      <HeroServiceSection /> {/* Section describing services */}
      <HeroFeaturesSection /> {/* Section showcasing features */}
      {/* Contact Form Wrapper with padding */}
      <div className="relative flex justify-center lg:pb-[650px] pb-[1200px] md:pb-[1100px] lg:mt-[-100px]">
        {/* Floating Contact Form */}
        <ContactForm className="w-[85%] lg:w-full absolute lg:absolute lg:-bottom-[80px] lg:z-10 h-full -bottom-[100px]" />
      </div>
    </main>
  );
};
// Home component ends here

export default Home;
