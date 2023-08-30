import React from "react";
import phone from "../../assets/home/desktop/phone-hero.png";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {};

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <section className="mt-[-160px] md:mt-[-230px] xl:mt-[-500px]">
      <div className="w-container px-cx mx-auto xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
        <img src={phone} alt="phone" className="w-[60vw] mx-auto md:w-[45%] xl:mr-[-50px]" />

        <div className="text-center xl:text-left">
          <h1 className="heading1 -mt-6 mb-6 md:max-w-[573px] md:mx-auto md:mb-[22px] xl:mt-0 xl:mb-10">Start building with our APIs for absolutely free.</h1>
          <form onSubmit={handleSubmit} className="flexCenter flex-col md:flex-row relative md:max-w-[445px] md:mx-auto xl:mx-0">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              aria-label="your email address"
              value={email}
              onChange={handleEmailChange}
              required
              className="bg-white rounded-full py-4 pl-[27px] w-[100%] boxShadow font-bold text-darkBlue placeholder:text-lightBlue placeholder:text-[15px] text-[15px] outline-none"
            />
            <button className="cta ctaPink w-[100%] mt-4 mb-6 md:my-0 md:absolute md:w-[190px] md:right-0">Schedule a Demo</button>
          </form>
          <p className="paragraph md:mt-4 xl:ml-[27px]">
            Have any questions?{" "}
            <a href="/contact" className="font-bold">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
