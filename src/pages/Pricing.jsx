import React from "react";

const Pricing = () => {
  return (
    <section className="mt-[-110px] mb-28 md:mt-[-150px] md:mb-[100px] xl:mt-[-430px] xl:mb-[96px]">
      <div className="w-container px-cx mx-auto text-center xl:text-left">
        <h1 className="heading1 xl:text-[56px] xl:leading-[56px]">Pricing</h1>
        <div className="mt-20 md:flex xl:mt-[72px]">
          {/* free plan */}
          <div>
            <h2 className="heading5 mb-[17px] md:mb-[13px]">Free Plan</h2>
            <p className="paragraph">Build and test using our core set of products with up to 100 API requests</p>
            <h3 className="heading6 mt-2 pb-6  border-b-[1px] border-darkBlue/25 md:mt-[19px] md:pb-[21px] xl:mt-2 xl:pb-6 ">$0.00</h3>
            <ul className="py-6 pricing-li max-w-[96px] mx-auto md:py-[21px] xl:py-6 xl:ml-7">
              <li className="active">Transactions</li>
              <li className="active">Auth</li>
              <li className="active">Identity</li>
              <li>Investments</li>
              <li>Assets</li>
              <li>Liabilities</li>
              <li>Income</li>
            </ul>
            <div className="pt-10 border-t-[1px] border-darkBlue/25 xl:pt-12">
              <a href="/pricing" className="cta ctaAccess">
                Request Access
              </a>
            </div>
          </div>

          {/* basic plan */}
          <div className="mt-16 md:mt-0 md:mx-[10px]">
            <h2 className="heading5 mb-[17px] md:mb-[13px]">Basic Plan</h2>
            <p className="paragraph">Launch your project with unlimited requests and no contractual minimums</p>
            <h3 className="heading6 mt-2 pb-6  border-b-[1px] border-darkBlue/25 md:mt-[19px] md:pb-[21px] xl:mt-2 xl:pb-6">$249.00</h3>
            <ul className="py-6 pricing-li max-w-[96px] mx-auto md:py-[21px] xl:py-6 xl:ml-7">
              <li className="active">Transactions</li>
              <li className="active">Auth</li>
              <li className="active">Identity</li>
              <li className="active">Investments</li>
              <li className="active">Assets</li>
              <li>Liabilities</li>
              <li>Income</li>
            </ul>
            <div className="pt-10 border-t-[1px] border-darkBlue/25 xl:pt-12">
              <a href="/pricing" className="cta ctaAccess">
                Request Access
              </a>
            </div>
          </div>

          {/* premium plan */}
          <div className="mt-16 md:mt-0">
            <h2 className="heading5 mb-[17px] md:mb-[13px]">Premium Plan</h2>
            <p className="paragraph">Build and test using our core set of products with up to 100 API requests</p>
            <h3 className="heading6 mt-2 pb-6  border-b-[1px] border-darkBlue/25 md:mt-[19px] md:pb-[21px] xl:mt-2 xl:pb-6">$499.00</h3>
            <ul className="py-6 pricing-li max-w-[96px] mx-auto md:py-[21px] xl:py-6 xl:ml-7">
              <li className="active">Transactions</li>
              <li className="active">Auth</li>
              <li className="active">Identity</li>
              <li className="active">Investments</li>
              <li className="active">Assets</li>
              <li className="active">Liabilities</li>
              <li className="active">Income</li>
            </ul>
            <div className="pt-10 border-t-[1px] border-darkBlue/25 xl:pt-12">
              <a href="/pricing" className="cta ctaAccess">
                Request Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
