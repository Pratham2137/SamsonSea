import PageNavigate from "./PageNavigate";

const PrivacyPolicy = () => {
  return (
    <div>
      <PageNavigate title="Privacy Policy" src="/" />
      <div className="flex justify-center py-16 px-5">
        <div className="flex flex-col gap-7 justify-center max-w-[1200px] min-w-[350px]">
          <div className="relative w-fit self-center">
            <h2 className="text-3xl text-center text-[#091242] font-semibold mb-1">Privacy Policy</h2>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] h-[3px] bg-[--pageYellow] w-[60%]"></span>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#091242] ">
              Introduction
            </h3>
            <p className="text-[#606060]">
              At Samson Sea, we value your privacy and are committed to
              protecting the personal information you share with us. This
              Privacy Policy outlines how we collect, use, and safeguard your
              data when you visit our website and interact with our services.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-lg mb-1 text-[#091242] ">
                1. Information We Collect{" "}
              </h4>
              <p className="text-[#606060]">
                We may collect personal information from you in several ways,
                including but not limited to:- Contact Forms: When you fill out
                forms on our website to inquire about our services, we may
                collect your name, email address, phone number, and any other
                details you provide.
              </p>
              <p className="text-[#606060]">
                Cookies and Usage Data: We use cookies and similar tracking
                technologies to monitor the activity on our website and collect
                information, including your IP address, browser type, pages
                visited, and the date and time of your visit.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-lg mb-1 text-[#091242] ">
                2. How We Use Your Information
              </h4>
              <p className="text-[#606060]">
                The information we collect is used for the following purposes:-
                To respond to your inquiries and provide the services you
                request.{" "}
              </p>
              <p className="text-[#606060]">
                To improve our website&apos;s functionality and user
                experience.- To communicate with you about updates, promotions,
                and other relevant information.To analyze website traffic and
                usage patterns.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-lg mb-1 text-[#091242] ">
                3. Data Security{" "}
              </h4>
              <p className="text-[#606060]">
                We are committed to protecting your personal information and
                employ reasonable security measures to prevent unauthorized
                access, disclosure, alteration, or destruction of your data.
                However, no method of data transmission over the internet is
                entirely secure, and we cannot guarantee absolute security.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-lg mb-1 text-[#091242] ">
                4. Use of Stock Images{" "}
              </h4>
              <p className="text-[#606060]">
                Our website may include images obtained from stock image
                providers. These images are used solely for illustrative
                purposes and do not imply endorsement, affiliation, or any other
                association with the individuals, products, or companies
                depicted in the images. All stock images used on our website are
                licensed appropriately from reputable sources.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-lg mb-1 text-[#091242] ">
                5. Third-Party Links{" "}
              </h4>
              <p className="text-[#606060]">
                Our website may contain links to other websites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party's site. We have no control over,
                and assume no responsibility for, the content, privacy policies,
                or practices of any third-party sites or services.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-lg mb-1 text-[#091242] ">
                {" "}
                6. Your Rights
              </h4>
              <p className="text-[#606060]">
                You have the right to access, update, or delete the personal
                information we hold about you. If you wish to exercise these
                rights, please contact us at the email address provided below.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-lg mb-1 text-[#091242] ">
                7. Changes to This Privacy Policy
              </h4>
              <p className="text-[#606060]">
                We reserve the right to update or modify this Privacy Policy at
                any time. Any changes will be posted on this page with an
                updated revision date. We encourage you to review this policy
                periodically to stay informed about how we are protecting your
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
