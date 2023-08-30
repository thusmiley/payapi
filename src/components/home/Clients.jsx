import React from "react";
import tesla from "../../assets/shared/desktop/tesla.svg";
import microsoft from "../../assets/shared/desktop/microsoft.svg";
import hewlett from "../../assets/shared/desktop/hewlett.svg";
import oracle from "../../assets/shared/desktop/oracle.svg";
import google from "../../assets/shared/desktop/google.svg";
import nvidia from "../../assets/shared/desktop/nvidia.svg";

const Clients = () => {
  return (
    <section className="bg-navy my-20 home-clients-bg md:my-[100px] xl:mt-0 xl:mb-[150px]">
      <div className="w-container px-cx mx-auto flexCenter flex-col text-center text-linkWhite py-20 md:py-[88px] xl:flex-row-reverse xl:text-left xl:py-[100px]">
        <div className="grid grid-cols-2 grid-flow-row gap-10 justify-items-center items-center md:grid-cols-3 md:gap-[62px]">
          <img src={tesla} alt="client logo" />
          <img src={microsoft} alt="client logo" className="" />
          <img src={hewlett} alt="client logo" />
          <img src={oracle} alt="client logo" />
          <img src={google} alt="client logo" />
          <img src={nvidia} alt="client logo" />
        </div>
        <div className="mt-[56px] md:mt-[64px] xl:mt-0 xl:mr-[130px]">
          <h2 className="heading2 mb-4 md:mb-6">Who we work with</h2>
          <p className="paragraph mb-12 text-linkWhite/70 md:max-w-[456px]">
            Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to
            create easy and accessible experiences for their users.
          </p>
          <a href="/about" className="cta ctaTransparent border-[1px] border-linkWhite">
            About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
