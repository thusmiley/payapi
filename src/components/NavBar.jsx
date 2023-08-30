import React from "react";
import logo from "../assets/shared/desktop/logo.svg";
import close from "../assets/shared/mobile/close.svg";
import menu from "../assets/shared/mobile/menu.svg";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="home-hero-bg">
      <div className="w-container px-cx mx-auto flexBetween pt-10 pb-[160px] relative md:pb-[230px] xl:pb-[500px]">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <nav className="md:w-[80%] xl:w-[85%]">
          {/* desktop, tablet menu  */}
          <div className="hidden md:flex justify-between items-center ml-[64px] ">
            <div>
              <a href="/pricing" className="hover:text-navy font-bold text-[15px]">
                Pricing
              </a>
              <a href="/about" className="mx-10 hover:text-navy font-bold text-[15px]">
                About
              </a>
              <a href="/contact" className="hover:text-navy font-bold text-[15px]">
                Contact
              </a>
            </div>
            <a href="/contact" className="cta ctaPink">
              Schedule a Demo
            </a>
          </div>

          <img src={menu} alt="menu" onClick={() => setToggle(!toggle)} className="md:hidden cursor-pointer" />

          {/* mobile menu  */}
          <div className={`${!toggle ? "hidden" : "fixed"} md:hidden left-[18%] top-0 bottom-0 right-0 bg-navy/[0.97] px-[5%] pt-12 z-10`}>

            <img src={close} alt="close menu" onClick={() => setToggle(!toggle)} className="md:hidden cursor-pointer float-right" />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } absolute left-0 right-0 mx-auto justify-center flex-col w-[90%] text-center text-[20px] text-linkWhite/70 font-bold pt-[43px] border-t-[1px] border-t-linkWhite/[.15] mt-[45px] sidebar`}
            >
              <a href="/pricing" className="hover:text-linkWhite/100">
                Pricing
              </a>
              <a href="/about" className="my-8 hover:text-linkWhite/100">
                About
              </a>
              <a href="/contact" className="hover:text-linkWhite/100">
                Contact
              </a>
              <a href="/contact" className="cta ctaPink mt-8">
                Schedule a Demo
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
