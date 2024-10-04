import ContactForm from "./ContactForm";
import HeroAboutSection from "./HeroAboutSection";
import HeroFeaturesSection from "./HeroFeaturesSection";
import HeroSection from "./HeroSection";
import HeroServiceSection from "./HeroServiceSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <HeroAboutSection />
      <HeroServiceSection />
      <HeroFeaturesSection />
      <div className="pt-8 !px-4 lg:pt-5 flex justify-center">
        <ContactForm className="w-[85%] lg:w-full" />
      </div>
    </main>
  );
};

export default Home;
