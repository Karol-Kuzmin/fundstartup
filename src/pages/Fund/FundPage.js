import React, { useState } from "react";
import PoolCard from "../../components/PoolCard/PoolCard";
import UpcomeingCard from "../../components/UpcomingCard/UpcomeingCard";
import TopPickCard from "../../components/TopPickCard/TopPickCard";
import CompletePoolCard from "../../components/CompletePoolCard/CompletePoolCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TopPickRoadMap from "../../components/RoadMap/TopPickRoadMap";
import UpcomingRoadMap from "../../components/RoadMap/UpcomingRoadMap";
import CompletePoolRoadMap from "../../components/RoadMap/CompletePoolRoadMap";

export default function FundPage() {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);

  const pool_data = [
    {
      title: "What is Fund Startup",
      content:
        "Before getting started, let's dig into Fund Startup and what it stands for",
    },
    {
      title: "Tier System",
      content: "Get to know more about the IMO & INO Allocation system here",
    },
    {
      title: "What is Fund Startup",
      content:
        "Timer for action! This guid enlights you on your blockchain NFT Metaverses path",
    },
  ];


  const myStyle = {
    backgroundImage: "url('/assets/images/bg.png')",
  };

  const [changeButton, setChangeButton] = useState("");

  return (
    <div className=" ">
      <div style={myStyle} className=" h-[615px]  bg-cover">
        <Header />
        <div className="container mx-auto">
        <div className="pt-[] mx-[50px]">
          <div className="text-start font-Mont font-bold leading-[63px]">
            <h1 className="text-[#FFFFFF]  lg:text-[52px] md:text-[52px] sm:text-[35px]">
              Enter the gateway of
            </h1>
            <h1 className="text-[#f6b432]  lg:text-[52px] md:text-[52px] sm:text-[35px]">
              Blockchain NFT & Metaverse
            </h1>
          </div>
          <div className="flex pt-[41px]">
            <div className="text-center ">
              <div className="flex justify-between grid  xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-5 ">
                <button
                  className={
                    changeButton === "kucoin"
                      ? "w-[100] h-[65px] border-2 border-[#0d74f5] rounded-[8px] border-solid flex justify-center items-center h-[65px] "
                      : "w-[100] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]"
                  }
                  onClick={() => setChangeButton("kucoin")}
                >
                  <img alt="" src="/assets/images/kucoin_b.png"></img>
                </button>
                <button
                  className={
                    changeButton === "gate"
                      ? "w-[100] h-[65px] border-2 border-[#0d74f5] rounded-[8px] border-solid flex justify-center items-center h-[65px] "
                      : "w-[100] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]"
                  }
                  onClick={() => setChangeButton("gate")}
                >
                  {" "}
                  <img alt="" src="/assets/images/gate_b.png"></img>
                </button>
                <button
                  className={
                    changeButton === "binance"
                      ? "w-[100] h-[65px] border-2 border-[#0d74f5] rounded-[8px] border-solid flex justify-center items-center h-[65px] "
                      : "w-[100] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]"
                  }
                  onClick={() => setChangeButton("binance")}
                >
                  {" "}
                  <img alt="" src="/assets/images/binance_b.png"></img>
                </button>
                <button
                  className={
                    changeButton === "pancake"
                      ? "w-[100] h-[65px] border-2 border-[#0d74f5] rounded-[8px] border-solid flex justify-center items-center h-[65px] "
                      : "w-[100] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]"
                  }
                  onClick={() => setChangeButton("pancake")}
                >
                  {" "}
                  <img alt="" src="/assets/images/pancake_b.png"></img>
                </button>
                <button
                  className={
                    changeButton === "ok"
                      ? "w-[65%] h-[65px] border-2 border-[#0d74f5] rounded-[8px] border-solid flex justify-center items-center h-[65px] "
                      : "w-[65%] h-[65px] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px] hover:border-[#0d74f5]"
                  }
                  onClick={() => setChangeButton("ok")}
                >
                  {" "}
                  <img alt="" src="/assets/images/okex_b.png"></img>
                </button>
                <button className="  sm:ml-[-4rem] ml-[-1.rem] w-[100%] h-[65px]">
                  {" "}
                  <p className="hover:text-[black] hover:bg-[#f6b432] font-bold text-[16px] text-[#f6b432]   font-['Montserrat'] border-2 border-[#f6b432] rounded-[8px] border-solid flex justify-center items-center h-[65px]">
                    Apply As A Project
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Pool Card  */}

      <div className="pt-[150px] container mx-auto px-[50px] ">
        <div className="w-[100%] ">
          {/* <PoolCard /> */}
          <div className=" grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8   font-['Montserrat'] font-bold ">
            {pool_data.map((items) => (
              <PoolCard poolData={items} />
            ))}
          </div>
        </div>
      </div>

      {/* upcoming INO &IMO */}

      <div className="pt-[150px] container mx-auto px-[50px]">
        <div className="flex md:justify-between sm:justify-around">
          <p className="flex items-center xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold leading-[44px] font-Mont">
            Upcoming INO & IMO
          </p>
          <div className="flex items-center justify-center gap-[43px]">
            <div className="js-prev1">
            <img
              id="arrowLeft"
              src={`${
                !arrowLeft
                  ? "./assets/images/ArrowLeft.png"
                  : "./assets/images/ArrowLeft_a.png"
              }`}
              alt="ArrowLeft"
              className="w-[37px] h-[17px] hover:cursor-pointer"
              onMouseEnter={
                !arrowLeft
                  ? () => setArrowLeft(true)
                  : () => setArrowLeft(false)
              }
              onMouseLeave={
                !arrowLeft
                  ? () => setArrowLeft(true)
                  : () => setArrowLeft(false)
              }
              // onMouseEnter={()=>alert("ddd")}
            />
            </div>
            <div className="js-next1">
            <img
              id="arrowRight"
              src={
                !arrowRight
                  ? "./assets/images/ArrowRight.png"
                  : "./assets/images/ArrowRight_a.png"
              }
              alt="ArrowRight"
              className="w-[37px] h-[17px] hover:cursor-pointer"
              onMouseEnter={
                !arrowRight
                  ? () => setArrowRight(true)
                  : () => setArrowRight(false)
              }
              onMouseLeave={
                !arrowRight
                  ? () => setArrowRight(true)
                  : () => setArrowRight(false)
              }
            />
            </div>
            
          </div>
        </div>
        {/* <div className="flex grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-[3.381rem] lg:mt-[46px] md:mt-[26px] mt-[15px] gap-[30px]">
          {upcoming_data.map((items) => (
            <UpcomeingCard upcoming={items} />
          ))}
        </div> */}
        {/* <UpcomeingCard /> */}
        <UpcomingRoadMap/>
      </div>

      {/* top pick startup of the month */}

      <div className="mt-[150px]  container mx-auto px-[50px]">
        <div className="flex md:justify-between sm:justify-around">
          <h2 className="xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold">
            Top Pick Startup of the Month
          </h2>
          <div className="flex items-center justify-center gap-[43px]">
            <div className="js-prev4">
            <img
              id="arrowLeft"
              src={`${
                !arrowLeft
                  ? "./assets/images/ArrowLeft.png"
                  : "./assets/images/ArrowLeft_a.png"
              }`}
              alt="ArrowLeft"
              className="w-[37px] h-[17px] hover:cursor-pointer"
              onMouseEnter={
                !arrowLeft
                  ? () => setArrowLeft(true)
                  : () => setArrowLeft(false)
              }
              onMouseLeave={
                !arrowLeft
                  ? () => setArrowLeft(true)
                  : () => setArrowLeft(false)
              }
              // onMouseEnter={()=>alert("ddd")}
            />
            </div>
            <div className="js-next4">
            <img
              id="arrowRight"
              src={
                !arrowRight
                  ? "./assets/images/ArrowRight.png"
                  : "./assets/images/ArrowRight_a.png"
              }
              alt="ArrowRight"
              className="w-[37px] h-[17px] hover:cursor-pointer"
              onMouseEnter={
                !arrowRight
                  ? () => setArrowRight(true)
                  : () => setArrowRight(false)
              }
              onMouseLeave={
                !arrowRight
                  ? () => setArrowRight(true)
                  : () => setArrowRight(false)
              }
            />
            </div>

            
          </div>
        </div>
        {/* <div className="flex grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-8 lg:mt-[46px] md:mt-[26px] mt-[15px]">
          {topPick_data.map((items) => (
            <TopPickCard topPickCard={items} />
          ))}
        </div> */}
        <TopPickRoadMap/>
      </div>

      {/* completed pools */}

      <div className=" mt-[150px]  container mx-auto px-[50px]">
        <div className="flex mt-[46px] md:justify-between sm:justify-around">
          <h2 className="xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold">
            Completed Pools
          </h2>
          <div className="flex items-center justify-center gap-[43px]">
            <div className="js-prev5">
            <img
              id="arrowLeft"
              src={`${
                !arrowLeft
                  ? "./assets/images/ArrowLeft.png"
                  : "./assets/images/ArrowLeft_a.png"
              }`}
              alt="ArrowLeft"
              className="w-[37px] h-[17px] hover:cursor-pointer"
              onMouseEnter={
                !arrowLeft
                  ? () => setArrowLeft(true)
                  : () => setArrowLeft(false)
              }
              onMouseLeave={
                !arrowLeft
                  ? () => setArrowLeft(true)
                  : () => setArrowLeft(false)
              }
              // onMouseEnter={()=>alert("ddd")}
            />
            </div>
            <div className="js-next5">
            <img
              id="arrowRight"
              src={
                !arrowRight
                  ? "./assets/images/ArrowRight.png"
                  : "./assets/images/ArrowRight_a.png"
              }
              alt="ArrowRight"
              className="w-[37px] h-[17px] hover:cursor-pointer"
              onMouseEnter={
                !arrowRight
                  ? () => setArrowRight(true)
                  : () => setArrowRight(false)
              }
              onMouseLeave={
                !arrowRight
                  ? () => setArrowRight(true)
                  : () => setArrowRight(false)
              }
            />
            </div>
          </div>
        </div>
        {/* <div className="flex grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-8 lg:mt-[46px] md:mt-[26px] mt-[15px]">
          {completePool_data.map((items) => (
            <CompletePoolCard completePoolData={items} />
          ))}
        </div> */}
        <CompletePoolRoadMap/>
      </div>

      <div className="mt-[154px]"><Footer /></div>
    </div>
  );
}
