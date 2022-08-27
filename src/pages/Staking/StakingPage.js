import React, { useState } from "react";

const StakingPage = () => {
  const myStyle = {
    backgroundImage: "url('/assets/images/bg.png')",
  };

  const [changeButton1, setChangeButton1] = useState('stake');
  const [changeButton2, setChangeButton2] = useState('7');
  // const [changeButton3, setChangeButton3] = useState('kucoin');

  return (
    <div style={myStyle} className=" h-[749px]   bg-cover">
      <div className="container mx-auto flex  grid grid-cols-2 ">
        <div className="flex">
          <div className=" pt-[25%]  w-[100%] ">
            <div className="font-bold font-['Montserrat', ] ">
              <h1 className="text-[#FFFFFF] lg:text-[52px] md:text-[32px] flex">
                <p className="text-[#f6b432]">Stake</p>&nbsp; or farm your
              </h1>
              <h1 className="text-[#ffffff] lg:text-[52px]  md:text-[32px] flex">
                <p className="text-[#f6b432]">FSP</p>&nbsp; to join gaming{" "}
              </h1>
              <h1 className="text-[#f6b432] lg:text-[52px] md:text-[32px] flex">
                IMO’s &nbsp;<p className="text-[#ffffff]">&</p>&nbsp; INO’s{" "}
              </h1>
            </div>

            <h5 className="text-[#FFFFFF] lg:text-[18px] md:text-[14px] sm:text-[10px] flex mt-[20px]">
              {" "}
              And Get Free Tokens from Incubated Projects ({" "}
              <p className="text-[#f6b432]">Seed Staking</p> )
            </h5>

            <div className="flex pt-[30px]">
              <div className="  w-[100%] h-[164px] ">
                <div className="flex justify-between gap-4 ">
                  <button className="w-[202px] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]">
                    <img alt="" src="/assets/images/kucoin_b.png"></img>
                  </button>
                  <button className="w-[202px] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]">
                    {" "}
                    <img alt="" src="/assets/images/gate_b.png"></img>
                  </button>
                  <button className="w-[202px] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]">
                    {" "}
                    <img alt="" src="/assets/images/binance_b.png"></img>
                  </button>
                </div>
                <div className="flex  justify-between mt-[34px]">
                  <button className="w-[202px] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]">
                    {" "}
                    <img alt="" src="/assets/images/pancake_b.png"></img>
                  </button>
                  <button className="w-[127px] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]">
                    {" "}
                    <img alt="" src="/assets/images/okex_b.png"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className=" border-2 border-[#f6b432] rounded-[8px] border-solid mt-[27%]  w-[70%] ">
            <div className=" container mx-auto w-[80%] h-[493px] ">
              <div className="mt-[21px] flex justify-between gap-6">
                <button className="w-[91px] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton1 === "stake"
                        ? "text-[18] text-[black]  font-bold bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                        : "text-[18] text-[#f6b432]  hover:text-[black] hover:font-bold hover:bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                    }
                    onClick={() => setChangeButton1("stake")}
                  >
                    Stake
                  </p>
                </button>
                <button className="w-[91px] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton1 === "farm"
                        ? "text-[18] text-[black]  font-bold bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                        : "text-[18] text-[#f6b432]  hover:text-[black] hover:font-bold hover:bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                    }
                    onClick={() => setChangeButton1("farm")}
                  >
                    Farm
                  </p>
                </button>
                <button className="w-[91px] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton1 === "close"
                        ? "text-[18] text-[black]  font-bold bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                        : "text-[18] text-[#f6b432]  hover:text-[black] hover:font-bold hover:bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                    }
                    onClick={() => setChangeButton1("close")}
                  >
                    Close
                  </p>
                </button>
              </div>
              <hr className="border-[#f6b432] mt-[20px]"></hr>
              <p className="xl:text-[18px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-white mt-[18px] font-['Montserrat', s]">
                Lock Duration
              </p>

              <div className="mt-[15px] flex  justify-between  gap-3">
                <button className="w-[97px] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton2 === "7"
                        ? "pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[black] font-bold  bg-[#f6b432]"
                        : "pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[#f6b432] hover:font-bold hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                    }
                    onClick={() => setChangeButton2("7")}
                  >
                    7-Days
                  </p>
                </button>
                <button className="w-[97px] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton2 === "14"
                        ? "pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[black] font-bold  bg-[#f6b432]"
                        : "pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[#f6b432] hover:font-bold hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                    }
                    onClick={() => setChangeButton2("14")}
                  >
                    14-Days
                  </p>
                </button>
                <button className=" w-[97px] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton2 === "30"
                        ? "pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[black] font-bold  bg-[#f6b432]"
                        : "pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[#f6b432] hover:font-bold hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                    }
                    onClick={() => setChangeButton2("30")}
                  >
                    30-Days
                  </p>
                </button>
                <button className=" pb-[7px] w-[97px] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton2 === "60"
                        ? "pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[black] font-bold  bg-[#f6b432]"
                        : "pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[#f6b432] hover:font-bold hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                    }
                    onClick={() => setChangeButton2("60")}
                  >
                    60-Days
                  </p>
                </button>
              </div>

              <div className="mt-[21px] flex justify-center gap-6">
                <button className="w-[215px] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton2 === "90"
                        ? "pt-[8px] pb-[7px] text-[16] text-[black]  font-bold bg-[#f6b432]"
                        : "pt-[8px] pb-[7px] text-[16] text-[#f6b432] hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                    }
                    onClick={() => setChangeButton2("90")}
                  >
                    90-Days
                  </p>
                </button>
                <button className="w-[215px] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                  <p
                    className={
                      changeButton2 === "180"
                        ? "pt-[8px] pb-[7px] text-[16] text-[black]  font-bold bg-[#f6b432]"
                        : "pt-[8px] pb-[7px] text-[16] text-[#f6b432] hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                    }
                    onClick={() => setChangeButton2("180")}
                  >
                    180-Days
                  </p>
                </button>
              </div>

              <p className="mt-[20px] text-white xl:text-[18px] lg:text-[14px] md:text-[12px] sm:text-[10px]">
                Your staked amount : 0 FSP
              </p>
              <hr className="border-[#f6b432] mt-[10px]"></hr>
              <div className="flex text-white mt-[20px] grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ">
                <p className="xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px]">
                  APY Rate :
                </p>
                <p className="xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px]">
                  5%
                </p>
                <p className="xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px]">
                  Maturity Date :
                </p>
              </div>
              <hr className="mt-[20px] border-[#f6b432]"></hr>
              <div className="flex mt-[20px] items-center">
                <p className=" text-white xl:text-[18px] lg:text-[14px] md:text-[12px] sm:text-[10px]">
                  Balance : 0.0000 FSP
                </p>{" "}
                &nbsp;&nbsp;
                <img
                  alt=""
                  src="/assets/images/vector.png"
                  className="w-[18px] h-[22px]"
                ></img>
              </div>
              <div className="flex justify-center xl:pt-[3%] lg:pt-[4.5%] md:pt-[12%] sm:pt-[15%]">
                <button className="w-[453px] h-[43px] bg-[#f6b432] rounded-[8px]  font-bold border-[#f6b432] border-2 hover:border-[black]">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingPage;
