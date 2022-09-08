import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const StakingPage = () => {
  const myStyle = {
    backgroundImage: "url('/assets/images/bg.png')",
  };

  const [changeButton1, setChangeButton1] = useState("stake");
  const [changeButton2, setChangeButton2] = useState("7");
  // const [changeButton3, setChangeButton3] = useState('kucoin');

  return (
    <div>
      <div style={myStyle} className=" lg:h-[749px] h-[100%]  bg-cover">
        <Header />
        <div className="font-Mont container mx-auto  grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:px-[50px] mt-[74px]">
          <div className="flex justify-center  ">
            <div className=" lg:px-0 px-5 ">
              <div className="flex lg:justify-start justify-center">
                <div className="font-bold ">
                  <h1 className="text-[#FFFFFF] xl:text-[52px] lg:text-[40px] md:text-[32px] flex">
                    <p className="text-[#f6b432]">Stake</p>&nbsp; or farm your
                  </h1>
                  <h1 className="text-[#ffffff] xl:text-[52px] lg:text-[40px]  md:text-[32px] flex">
                    <p className="text-[#f6b432]">FSP</p>&nbsp; to join gaming{" "}
                  </h1>
                  <h1 className="text-[#f6b432] xl:text-[52px] lg:text-[40px] md:text-[32px] flex">
                    IMO’s &nbsp;<p className="text-[#ffffff]">&</p>&nbsp; INO’s{" "}
                  </h1>
                </div>
              </div>

              <div className="lg:justify-start justify-center flex">
                <h5 className="text-[#FFFFFF] xl:text-[18px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px] flex mt-[20px]">
                  And Get Free Tokens from Incubated Projects (
                  <p className="text-[#f6b432]">Seed Staking</p> )
                </h5>
              </div>

              <div className="flex lg:pt-[30px] pt-[20px]">
                <div className="  w-[100%] h-[164px] ">
                  <div className="grid grid-cols-3 justify-between lg:gap-8 gap-1 ">
                    <button className="w-[100%] md:h-[65px] h-[40px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center  hover:border-[#0d74f5]">
                      <img alt="" src="/assets/images/kucoin_b.png"></img>
                    </button>
                    <button className="w-[100%] md:h-[65px] h-[40px]  border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center hover:border-[#0d74f5]">
                      {" "}
                      <img alt="" src="/assets/images/gate_b.png"></img>
                    </button>
                    <button className="w-[100%] md:h-[65px] h-[40px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center  hover:border-[#0d74f5]">
                      {" "}
                      <img alt="" src="/assets/images/binance_b.png"></img>
                    </button>
                  </div>
                  <div className="grid grid-cols-3   justify mt-[34px] lg:gap-8 gap-1">
                    <button className="w-[100%] md:h-[65px] h-[40px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center  hover:border-[#0d74f5]">
                      {" "}
                      <img alt="" src="/assets/images/pancake_b.png"></img>
                    </button>
                    <button className="w-[65%] md:h-[65px] h-[40px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center  hover:border-[#0d74f5]">
                      {" "}
                      <img alt="" src="/assets/images/okex_b.png"></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:justify-end justify-center lg:mt-[0px] lg:mt-[20px] lg:pb-[0px] pb-[20px] lg:px-0 px-5 md:mt-[20px]">
            <div className=" border-2 border-[#f6b432] rounded-[8px] border-solid  lg:w-[90%] md:w-[80%] w-[100%]">
              <div className="  mx-auto px-2 h-[493px] ">
                <div className="mt-[21px]  gap-4 grid grid-cols-12">
                  <div className="col-span-4">
                    <button className="w-[100%] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                      <p
                        className={
                          changeButton1 === "stake"
                            ? "text-[18] text-[black]  font-bold bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                            : "text-[18] text-[#f6b432]  hover:text-[black] hover:font-bold hover:bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                        }
                        onClick={() => setChangeButton1("stake")}>
                        Stake
                      </p>
                    </button>
                  </div>
                  <div className="col-span-4">
                    <button className="w-[100%] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                      <p
                        className={
                          changeButton1 === "farm"
                            ? "text-[18] text-[black]  font-bold bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                            : "text-[18] text-[#f6b432]  hover:text-[black] hover:font-bold hover:bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                        }
                        onClick={() => setChangeButton1("farm")}>
                        Farm
                      </p>
                    </button>
                  </div>
                  <div className="col-span-4">
                    <button className="w-[100%] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                      <p
                        className={
                          changeButton1 === "close"
                            ? "text-[18] text-[black]  font-bold bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                            : "text-[18] text-[#f6b432]  hover:text-[black] hover:font-bold hover:bg-[#f6b432] self-center pt-[8px] pb-[7px]"
                        }
                        onClick={() => setChangeButton1("close")}>
                        Close
                      </p>
                    </button>
                  </div>
                </div>
                <hr className="border-[#f6b432] mt-[20px]"></hr>
                <div className="justify-start flex">
                  <p className="xl:text-[18px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-white mt-[18px]">
                    Lock Duration
                  </p>
                </div>

                <div>
                  <div className="mt-[15px] flex  justify-between  gap-4 grid grid-cols-12">
                    <div className="col-span-3">
                      <button
                        className={
                          changeButton2 === "7"
                            ? "w-[100%] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[10px] text-[14px] text-[black] font-bold  bg-[#f6b432]"
                            : "w-[100%] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[10px] text-[14px] text-[#f6b432] hover:font-bold hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                        }
                        onClick={() => setChangeButton2("7")}>
                        7-Days
                      </button>
                    </div>
                    <div className="col-span-3">
                      <button
                        className={
                          changeButton2 === "14"
                            ? "w-[100%] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[10px] text-[14px] text-[black] font-bold  bg-[#f6b432]"
                            : "w-[100%] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[10px] text-[14px] text-[#f6b432] hover:font-bold hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                        }
                        onClick={() => setChangeButton2("14")}>
                        14-Days
                      </button>
                    </div>
                    <div className="col-span-3">
                      <button
                        className={
                          changeButton2 === "30"
                            ? "w-[100%] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[10px] text-[14px] text-[black] font-bold  bg-[#f6b432]"
                            : "w-[100%] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[10px] text-[14px] text-[#f6b432] hover:font-bold hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                        }
                        onClick={() => setChangeButton2("30")}>
                        30-Days
                      </button>
                    </div>

                    <div className="col-span-3">
                      <button
                        className={
                          changeButton2 === "60"
                            ? "w-[100%] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[10px] text-[14px] text-[black] font-bold  bg-[#f6b432]"
                            : "w-[100%] h-[43px]  border-2 border-[#f6b432] rounded-[8px] border-solid pt-[7px] pb-[5px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[10px] text-[14px] text-[#f6b432] hover:font-bold hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                        }
                        onClick={() => setChangeButton2("60")}>
                        60-Days
                      </button>
                    </div>
                  </div>

                  <div className="mt-[21px] grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      <button className="w-[100%] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                        <p
                          className={
                            changeButton2 === "90"
                              ? "pt-[8px] pb-[7px] text-[16] text-[black]  font-bold bg-[#f6b432]"
                              : "pt-[8px] pb-[7px] text-[16] text-[#f6b432] hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                          }
                          onClick={() => setChangeButton2("90")}>
                          90-Days
                        </p>
                      </button>
                    </div>
                    <div className="col-span-6">
                      <button className="w-[100%] h-[43px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
                        <p
                          className={
                            changeButton2 === "180"
                              ? "pt-[8px] pb-[7px] text-[16] text-[black]  font-bold bg-[#f6b432]"
                              : "pt-[8px] pb-[7px] text-[16] text-[#f6b432] hover:text-[black] hover:font-bold hover:bg-[#f6b432]"
                          }
                          onClick={() => setChangeButton2("180")}>
                          180-Days
                        </p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <p className="mt-[20px] text-white xl:text-[18px] lg:text-[14px] md:text-[12px] sm:text-[10px]">
                    Your staked amount : 0 FSP
                  </p>
                </div>
                <hr className="border-[#f6b432] mt-[10px]"></hr>
                <div className="flex text-white mt-[20px] grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ">
                  <p className="xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] flex self-start">
                    APY Rate :
                  </p>
                  <p className="xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] flex justify-self-end">
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
                    className="w-[18px] h-[22px]"></img>
                </div>
                <div className="flex justify-center xl:pt-[3%] lg:pt-[4.5%] md:pt-[4%] sm:pt-[15%] pt-[1.5%]">
                  <button className="w-[453px] h-[43px] bg-[#f6b432] rounded-[8px]  font-bold border-[#f6b432] border-2 hover:border-[black]">
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StakingPage;
