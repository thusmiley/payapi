import React from "react";
import tesla from "../assets/shared/mobile/tesla.svg";
import microsoft from "../assets/shared/mobile/microsoft.svg";
import hewlett from "../assets/shared/mobile/hewlett.svg";
import oracle from "../assets/shared/mobile/oracle.svg";
import google from "../assets/shared/mobile/google.svg";
import nvidia from "../assets/shared/mobile/nvidia.svg";

const Contact = () => {
  return (
    <section className="mt-[-120px] mb-20 md:mt-[-150px] md:mb-[100px] xl:mt-[-430px] xl:mb-[393px] xl:z-20 xl:absolute xl:left-0 xl:right-0 xl:mx-auto">
      <div className="w-container px-cx mx-auto text-center xl:flex">
        <div>
          <h1 className="heading1 md:max-w-[573px] md:mx-auto xl:text-[56px] xl:leading-[56px] xl:mx-0 xl:text-left xl:max-w-[730px]">
            Submit a help request and we’ll get in touch shortly.
          </h1>
          <form className="flex flex-col mt-10 contact md:mt-[54px] md:max-w-[445px] md:mx-auto xl:mx-0 xl:mt-[43px]">
            <input type="text" name="name" id="name" placeholder="Name" required />
            <input type="email" name="email" id="email" placeholder="Email Address" required />
            <input type="text" name="company" id="company" placeholder="Company Name" />
            <input type="text" name="title" id="title" placeholder="Title" />
            <textarea name="message" id="message" cols="30" rows="4" placeholder="Message" required></textarea>
            <div className="my-6 checkbox relative flexStart text-left items-center cursor-pointer">
              <input type="checkbox" name="subscribe" id="subscribe" required />
              <label htmlFor="subscribe" className="ml-[26px] text-darkBlue">
                Stay up-to-date with company announcements and updates to our API
              </label>
            </div>
            <button className="cta ctaAccess w-[152px]">Submit</button>
          </form>
        </div>

        <div className="mt-20 md:mt-[64px] xl:mt-[300px] xl:text-left xl:ml-[-80px]">
          <h2 className="heading5 text-darkBlue/75 md:max-w-[455px] md:mx-auto">Join the thousands of innovators already building with us</h2>
          <div className="grid grid-cols-2 grid-flow-row gap-10 justify-items-center items-center md:grid-cols-3 md:gap-[62px] mt-10 md:max-w-[541px] md:mx-auto">
            <img src={tesla} alt="client logo" />
            <img src={microsoft} alt="client logo" className="" />
            <img src={hewlett} alt="client logo" />
            <img src={oracle} alt="client logo" />
            <img src={google} alt="client logo" />
            <img src={nvidia} alt="client logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
