import React from "react";
import teamMobile from "../assets/about/mobile/image-team-members.jpg";
import teamTablet from "../assets/about/tablet/image-team-members.jpg";
import teamDesktop from "../assets/about/desktop/image-team-members.jpg";

const About = () => {
  return (
    <section className="mt-[-110px] mb-20 md:mt-[-150px] md:mb-[72px] xl:mt-[-430px] xl:mb-[100px]">
      <div className="w-container px-cx mx-auto text-center xl:max-w-[920px]">
        <h1 className="heading1 md:max-w-[573px] md:mx-auto xl:text-[56px] xl:leading-[56px] xl:mx-0 xl:text-left xl:max-w-[730px]">
          We empower innovators by delivering access to the financial system
        </h1>

        <div className="mt-10 md:mt-[54px] md:flex md:justify-between md:items-start md:text-left">
          <h2 className="heading5 text-darkBlue mb-4 md:mb-0">Our Vision</h2>
          <p className="paragraph md:w-[70%]">
            Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability
            to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.
          </p>
        </div>
        <div className="mt-12 md:mt-[64px] md:flex md:justify-between md:items-start md:text-left xl:mt-[56px]">
          <h2 className="heading5 text-darkBlue mb-4 md:mb-0">Our Business</h2>
          <p className="paragraph md:w-[70%]">
            At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as
            well as robust reporting for traditional financial institutions and developers.
          </p>
        </div>
      </div>

      <div className="mt-[76px] mb-12 md:mb-[64px] md:mt-[92px] about-team-bg xl:py-[100px] xl:my-[-20px]">
        <picture>
          <source media="(max-width: 480px)" srcset={teamMobile} />
          <source media="(max-width: 1200px)" srcset={teamTablet} />
          <source media="(min-width: 1201px)" srcset={teamDesktop} />
          <img src={teamMobile} className="w-[100%]" alt="team" />
        </picture>
      </div>

      <div className="w-container px-cx mx-auto text-center border-y-[1px] border-darkBlue/25 py-4 md:flex md:justify-around md:items-center md:border-none md:py-0 xl:justify-start xl:text-left">
        <div className="md:border-y-[1px] border-darkBlue/25 md:w-[100%] md:py-4">
          <p className="text-[16px] leading-[28px]">Team Members</p>
          <h2 className="heading6 text-darkPink">300+</h2>
        </div>
        <div className="my-8 md:my-0 md:mx-[10px] md:border-y-[1px] border-darkBlue/25 md:w-[100%] md:py-4 xl:mx-[30px]">
          <p className="text-[16px] leading-[28px]">Offices in the US</p>
          <h2 className="heading6 text-darkPink">3</h2>
        </div>
        <div className="md:border-y-[1px] border-darkBlue/25 md:w-[100%] md:py-4">
          <p className="text-[16px] leading-[28px]">Transactions analyzed</p>
          <h2 className="heading6 text-darkPink">10M+</h2>
        </div>
      </div>

      <div className="w-container px-cx mx-auto text-center mt-12 md:mt-[64px] xl:max-w-[920px] xl:mt-[72px]">
        <div className="md:flex md:justify-between md:items-start md:text-left">
          <h2 className="heading5 text-darkBlue mb-4 md:mb-0">The Culture</h2>
          <p className="paragraph md:w-[70%]">
            We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or
            co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.
          </p>
        </div>
        <div className="mt-12 md:mt-[64px] md:flex md:justify-between md:items-start md:text-left xl:mt-[56px]">
          <h2 className="heading5 text-darkBlue mb-4 md:mb-0">The People</h2>
          <p className="paragraph md:w-[70%]">
            We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
