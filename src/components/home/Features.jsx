import React from "react";
import easy from "../../assets/home/desktop/easy.png";
import simple from "../../assets/home/desktop/simple.png";

const Features = () => {
  return (
    <section className="home-features-bg">
      <div className="w-container px-cx mx-auto text-center flexCenter flex-col xl:text-left">
        <div className="mb-15 flexCenter flex-col xl:flex-row">
          <img src={easy} alt="Easy to implement" className="xl:ml-[-55px]" />
          <div className="xl:ml-[25px]">
            <h3 className="heading3 -mt-8 mb-8 md:mb-6">Easy to implement</h3>
            <p className="md:max-w-[573px] ">
              Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
          <img src={simple} alt="Simple UI & UX" className="xl:mr-[-100px] " />
          <div className="xl:mr-[50px]">
            <h3 className="heading3 mb-8 md:mb-6">Simple UI & UX</h3>
            <p className="md:max-w-[573px]">Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
