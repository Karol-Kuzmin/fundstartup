import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckBox from "../../components/checkbox/CheckBox";
const ClaimPage = () => {
  const [changeButton, setChangeButton] = useState("monthly");
  return (
    <div className="bg-[#23170b]">
      <Header />
      {/* Content Part */}
      <div className="mt-[159px] container mx-auto px-[50px] font-['play']">
        <div className="grid grid-cols-12  ">
          <ul className=" xl:col-span-5 lg:col-span-5 md:col-span-7 col-span-12 h-[81px] flex gap-2">
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="kucoin" src="./assets/images/claim/kucoin.png"></img>
            </li>
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="gate" src="./assets/images/claim/gate.png"></img>
            </li>
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="binance" src="./assets/images/claim/binance.png"></img>
            </li>
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="pancake" src="./assets/images/claim/pancake.png"></img>
            </li>
            <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
              <img alt="okex" src="./assets/images/claim/okex.png"></img>
            </li>
          </ul>

          <div className="flex lg:ml-[5%] xl:ml-[5%] md:ml-[5%] xl:col-span-3 lg:col-span-4 md:col-span-5 col-span-12">
            <div className=" flex  items-center h-[81px]">
              {/* <label>
                <input
                  type="checkbox"
                  className="claimcheckbox w-[41px] h-[41px] border-[1px] border-[#F6B432] outline-0 text-white "
                />
              </label> */}
              <CheckBox/>
            </div>
            <div className="flex ml-[2%] items-center  h-[81px]">
              <p className="text-white leading-[20px] font-bold text-[16px] ">
                Show Only claimable Tokens
              </p>
            </div>
          </div>

          <div className="relative items-center h-[81px] flex lg:ml-[0.8%] xl:col-span-2 lg:col-span-3 md:col-span-12 col-span-12 ">
            <form className="h-[50px] md:w-[100%] flex  searchbox" action="">
              <input
                type="search"
                className="w-[100%] rounded-[5px] text-white bg-[#2f251c]"
                placeholder="search.."
              />
            </form>
          </div>

          <div className="items-center flex xl:ml-[19px] h-[81px] lg:col-span-2 md:col-span-3 col-span-12">
            <div className="w-[100%] h-[57px] bg-[#2f251c] flex items-center justify-center">
              <button
                className={
                  changeButton === "monthly"
                    ? "w-[48%] h-[51px] bg-yellow-dark text-[black] text-[16px] font-bold leading-[20px]"
                    : "w-[48%] h-[51px]  text-[white] text-[16px] font-bold leading-[20px]"
                }
                onClick={() => setChangeButton("monthly")}
              >
                Monthly
              </button>
              <button
                className={
                  changeButton === "linear"
                    ? "w-[48%] h-[51px] bg-yellow-dark text-[black] text-[16px] font-bold leading-[20px]"
                    : "w-[48%] h-[51px]  text-[white] text-[16px] font-bold leading-[20px]"
                }
                onClick={() => setChangeButton("linear")}
              >
                Linear
              </button>
            </div>
          </div>
        </div>

        {/* claims */}

        <div className="mt-[40px] mb-[263px]">
          <div className="  border-yellow-dark border-2 rounded-[5px] bg-gradient-to-t from-[#f6b43233] to-[#16161a00] ">
            <div className="grid grid-cols-12  self-center container mx-auto px-5 lg:py-3 md:py-5 py-8  w-[100%]">
              <div className="2xl:order-1 xl:order-1 lg:order-1 md:order-1 order-1 flex xl:col-span-6 lg:col-span-5 md:col-span-10  col-span-10 ">
                <img
                  alt="verse"
                  src="./assets/images/claim/verse.png"
                  className="w-[63px] h-[63px] self-center "
                />
                <div className="ml-[3%] self-center ">
                  <p className=" h-[28px] font-bold sm:text-[24px] leading-[28px] text-white">
                    Hero Arena Private
                  </p>
                  <p className="h-[19px] font-bold text-white leading-[19px] ">
                    (11th Vesting)
                  </p>
                </div>
              </div>

              <div className="md:py-3 py-3 md:mt-3 mt-3 2xl:order-2 xl:order-2 lg:order-2 md:order-3 order-3 xl:col-span-2 lg:col-span-2 md:col-span-12 col-span-12 lg:w-[90%]   xl:border-x  lg:border-x lg:border-y-0 md:border-y border-y mt-[4px]   xl:pl-9 lg:px-5 ">
                <p className=" h-[16px] lg:text-center text-white font-normal leading-[16px]  text-[14px] ">
                  Your Allocation
                </p>
              </div>

              <div className="lg:block md:flex flex md:py-3 py-3 2xl:order-3 xl:order-3 lg:order-3 md:order-4 order-4 xl:col-span-2 lg:col-span-3 md:col-span-12 col-span-12  mt-[4px] ">
                <p className=" h-[16px] text-white font-normal leading-[16px] text-[14px]">
                  Claim Start Date{" "}
                </p>
                <div className="flex md:justify-end justify-end 2xl:w-[76.5%] xl:w-[93.5%] lg:w-[80.5%] md:w-[82%] w-[63%]">
                  <p className=" h-[19px] text-white font-bold leading-[19 px] sm:text-[16px] text-[13px] ">
                    2022-Aug-21 20:00 UTC{" "}
                  </p>
                </div>
              </div>

              <div className="2xl:order-4 xl:order-4 lg:order-4 md:order-5 order-5 xl:col-span-1 lg:col-span-1 md:col-span-12 col-span-12 self-center w-[100%] xl:ml-[0%] ">
                <button className="rounded-[5px] w-[100%] bg-yellow-dark font-bold text-[15px] leading-[17px] h-[44.5px]">
                  Unavailable
                </button>
              </div>
              <div className="2xl:order-5 xl:order-5 lg:order-5 md:order-2 order-2 xl:col-span- lg:col-span-1  md:col-span-2 col-span-2  self-center xl:ml-8 lg:ml-8 md:ml-[60px] ">
                <button className=" rounded-[50%] bg-yellow-dark w-[43px] h-[43px] flex justify-center items-center border-4 border-[#937642]">
                  <img
                    alt="add"
                    src="./assets/images/claim/message-add.png"
                    className=""
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClaimPage;
