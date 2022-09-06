import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const ClaimPage = () => {
  return (

      <div className="bg-[#23170b]">
        <Header />
        {/* Content Part */}
        <div className="mt-[159px] container mx-auto px-[50px] font-['play']">
          <div className="flex h-[81px]">
            <ul className="w-[39%] h-[81px] flex gap-2">
              <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
                <img alt="kucoin" src="./assets/images/claim/kucoin.png"></img>
              </li>
              <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
                <img alt="gate" src="./assets/images/claim/gate.png"></img>
              </li>
              <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
                <img
                  alt="binance"
                  src="./assets/images/claim/binance.png"></img>
              </li>
              <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
                <img
                  alt="pancake"
                  src="./assets/images/claim/pancake.png"></img>
              </li>
              <li className="w-[85px] h-[81px] bg-yellow-dark rounded-[5px] flex items-center justify-center">
                <img alt="okex" src="./assets/images/claim/okex.png"></img>
              </li>
            </ul>

            <div className="w-[3.5%] flex ml-[3.5%] items-center h-[81px]">
              <input
                type="checkbox"
                className="w-[41px] h-[41px] border-[1px] border-[#F6B432] outline-0 text-white"
              />
            </div>
            <div className="flex ml-[0.8%] items-center w-[20%] h-[81px]">
              <p className="  text-white leading-[20px] font-bold text-[16px] ">
                Show Only claimable Tokens
              </p>
            </div>
            <div className="relative items-center h-[81px] flex ml-[0.8%] w-[16%]">
              <input
                type="search"
                className="bg-[#2f25lc] w-[100%] h-[50px] bg-[#2f251c] rounded-[5px] text-[20px]" placeholder=""></input>
              <div className="flex absolute ml-[12px] items-center h-[81px]">
                <img
                  alt="search"
                  src="./assets/images/search.png"
                  className="w-[20px] h-[20px]"></img>
                <p className="font-normal text-[20px] leading-[30px] text-[#979e8d] ml-[10px]">
                  Search
                </p>
              </div>
            </div>

            <div className="items-center flex ml-[19px] h-[81px] w-[16%]">
              <div className="w-[100%] h-[57px] bg-[#2f251c] flex items-center h-[81px]">
                <button className="w-[50%] h-[51px] bg-yellow-dark">
                  <p className="text-[white] text-[16px] font-bold leading-[20px] ">
                    Monthly
                  </p>
                </button>
                <button className="w-[50%] h-[51px]">
                  <p className="text-[white] text-[16px] font-bold leading-[20px]">
                    Linear
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* claims */}

          <div className="mt-[40px] mb-[263px]">
            <div className="h-[91px]  border-yellow-dark border-2 rounded-[5px] bg-gradient-to-t from-[#f6b43233] to-[#16161a00] flex">
              <div className="flex self-center h-[70px] w-[100%]">
                <img
                  alt="verse"
                  src="./assets/images/claim/verse.png"
                  className="w-[63px] h-[63px] self-center ml-[2%]"></img>
                <div className="ml-[1.7%] self-center w-[21%]">
                  <p className=" h-[28px] font-bold text-[24px] leading-[28px] text-white">
                    Hero Arena Private
                  </p>
                  <p className="h-[19px] font-bold text-white leading-[19px] ">
                    (11th Vesting)
                  </p>
                </div>
                <div className="h-[70px]  border ml-[18.7%]"></div>
                <div className="mt-[4px] ml-[2.3%] mr-[2.3%]  w-[8.5%]">
                  <p className="w-[100%] h-[16px] text-white font-normal leading-[16px] text-[14px]">
                    Your Allocation
                  </p>
                </div>
                <div className="h-[70px]  border"></div>

                <div className="ml-[1.7%] mt-[4px] w-[17%]">
                  <p className="w-[111px] h-[16px] text-white font-normal leading-[16px] text-[14px]">
                    Claim Start Date{" "}
                  </p>
                  <p className="w-[199px] h-[19px] text-white font-bold leading-[19px] text-[16px] mt-[13px]">
                    2022-Aug-21 20:00 UTC{" "}
                  </p>
                </div>

                <div className=" self-center w-[13.1%]">
                  <button className="rounded-[5px] bg-yellow-dark w-[100%] h-[44.5px]">
                    <p className="font-bold text-[15px] leading-[17px] h-[17px]">
                      Unavailable
                    </p>
                  </button>
                </div>
                <div className="self-center w-[5.4%]">
                  <button className="ml-[20px] rounded-[50%] bg-yellow-dark w-[43px] h-[43px] flex justify-center items-center border-4 border-[#937642]">
                    <img
                      alt="add"
                      src="./assets/images/claim/message-add.png"
                      className=""></img>
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
