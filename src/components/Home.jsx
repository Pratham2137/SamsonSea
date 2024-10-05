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
      <div className="relative flex justify-center lg:pb-[650px] lg:mt-[-100px]">
        {/* Floating Contact Form */}
        <ContactForm className="w-[85%] lg:w-full lg:absolute lg:-bottom-[80px] lg:z-10 h-full" />
      </div>
    </main>
  );
};

export default Home;
