import React from "react";
import personal from "../../assets/home/desktop/icon-personal-finances.svg";
import banking from "../../assets/home/desktop/icon-banking-and-coverage.svg";
import consumer from "../../assets/home/desktop/icon-consumer-payments.svg";

const Benefits = () => {
  return (
    <section className="my-20 md:my-[100px] xl:mt-[60px]">
      <div className="w-container px-cx mx-auto text-center md:flex md:flex-row">
        <div className="flexCenter flex-col">
          <img src={personal} alt="benefit icon" />
          <h4 className="heading4 mt-8 mb-4">Personal Finances</h4>
          <p className="paragraph">
            Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.
          </p>
        </div>
        <div className="flexCenter flex-col my-12 md:my-0 md:mx-[15px] xl:mx-[30px]">
          <img src={banking} alt="benefit icon" />
          <h4 className="heading4 mt-8 mb-4">Banking & Coverage</h4>
          <p className="paragraph">
            With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.
          </p>
        </div>
        <div className="flexCenter flex-col">
          <img src={consumer} alt="benefit icon" />
          <h4 className="heading4 mt-8 mb-4">Consumer Payments</h4>
          <p className="paragraph">
            It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
