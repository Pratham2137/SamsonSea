import ContactForm from "./ContactForm";
import PageNavigate from "./PageNavigate";

const ContactUs = () => {
  return (
    <main>
      <PageNavigate title="Contact Us" src="/contact-us" />
      <ContactForm />
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15048.85716280694!2d72.7784016!3d19.4463256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abc8cf28ded7%3A0xefc609cdb6310775!2sSamson%20Sea%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1728059698674!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[350px] border-0"
        ></iframe>
      </div>
    </main>
  );
};

export default ContactUs;
