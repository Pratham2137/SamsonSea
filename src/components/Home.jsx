import ContactForm from "./ContactForm";
import HeroAboutSection from "./HeroAboutSection";
import HeroFeaturesSection from "./HeroFeaturesSection";
import HeroSection from "./HeroSection";
import HeroServiceSection from "./HeroServiceSection";

const Home = () => {
  return (
    <main className="relative">
      {/* Hero sections */}
      <HeroSection />
      <HeroAboutSection />
      <HeroServiceSection />
      <HeroFeaturesSection />

      {/* Contact Form Wrapper with padding */}
      <div className="relative flex justify-center lg:pb-[650px] pb-[1200px] md:pb-[1100px] lg:mt-[-100px]">
        {/* Floating Contact Form */}
        <ContactForm className="w-[85%] lg:w-full absolute lg:absolute lg:-bottom-[80px] lg:z-10 h-full -bottom-[100px]" />
      </div>
    </main>
  );
};

export default Home;
