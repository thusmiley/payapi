import React from "react";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {};

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <section className="mb-20 md:mb-[100px] xl:mt-[400px]">
      <div className="w-container px-cx mx-auto text-center xl:flex xl:flex-row xl:justify-between xl:items-center xl:text-left">
        <h2 className="heading1 mb-8 md:mb-10 xl:text-[48px] xl:leading-[56px] xl:tracking-[-.37px] xl:mb-0">Ready to start?</h2>
        <form onSubmit={handleSubmit} className="subscribe flexCenter flex-col md:flex-row relative md:max-w-[445px] md:mx-auto xl:w-[100%] xl:mx-0">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            aria-label="your email address"
            value={email}
            onChange={handleEmailChange}
            required
            className="bg-white  rounded-full py-4 pl-[27px] w-[100%] boxShadow font-bold placeholder:text-darkBlue/50"
          />
          <button className="cta ctaPink w-[100%] mt-4 mb-6 md:my-0 md:absolute md:w-[190px] md:right-0">Schedule a Demo</button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
