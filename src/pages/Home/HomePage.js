import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UpcomeingCard from "../../components/UpcomingCard/UpcomeingCard";

const HomePage = () => {
  const upcoming_data = [
    {
      img_url: "/assets/images/artonar_b.png",
      title: "ARtonar",
      content:
        "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse.",
    },
    {
      img_url: "/assets/images/artonar_b.png",
      title: "ARtonar",
      content:
        "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse.",
    },
    {
      img_url: "/assets/images/artonar_b.png",
      title: "ARtonar",
      content:
        "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse.",
    },
    {
      img_url: "/assets/images/artonar_b.png",
      title: "ARtonar",
      content:
        "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse.",
    },
  ];

  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);

  return (
    <div>
      <div className="bg-home bg-cover">
        <Header />
        <div className="container mx-auto">
          <div className="grid grid-cols-2 mt-[55px] items-start px-[50px]">
            <div className="grid justify-items-start">
              <p className="font-Mont text-[52px] text-white font-bold leading-[63px] non-italic text-start">
                Become an early <br />
                investor in the top <br />
                <span className="text-yellow-dark">BlockChain NFT</span> and
                <br />
                <span className="text-yellow-dark">Metaverses</span>
              </p>
              <span className="text-white font-Mont text-[18px] font-normal leading-[22px] non-italic text-start pr-[110px]">
                Fundstartup is the leading blockchain NFT and Metaverses
                launchpad with over 100 projects launched with the highest
                average ROI in the industry.
              </span>
              <div className="flex gap-x-4 mt-[32px]">
                <button className="p-[16px] bg-yellow-dark rounded-[5px] text-[18px] font-Mont leading-[22px] font-bold">
                  Buy FSP
                </button>
                <button className="p-[16px] bg-yellow-dark rounded-[5px] text-[18px] font-Mont leading-[22px] font-bold">
                  How To Start
                </button>
              </div>
              <span className="text-white font-Mont text-[18px] leading-[22px] font-[400] mt-[36px]">
                Available On
              </span>
              <div className="flex mt-[20px] pb-[62px] gap-x-6">
                <img
                  src="./assets/images/kucoin.png"
                  alt="Kucoin"
                  className="h-[19px]"
                />
                <img
                  src="./assets/images/gate.png"
                  alt="Gate"
                  className="h-[19px]"
                />
                <img
                  src="./assets/images/binance.png"
                  alt="Binance"
                  className="h-[19px]"
                />
                <img
                  src="./assets/images/pancakeswap.png"
                  alt="PancakeSwap"
                  className="h-[19px]"
                />
                <img
                  src="./assets/images/okex.png"
                  alt="OKEX"
                  className="h-[23px]"
                />
              </div>
            </div>
            <div className=" pb-[46px]">
              <img
                src="./assets/images/startup.png"
                alt="StartUp"
                className="w-[93%] ml-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mt-[150px] mx-auto">
          <div className="flex justify-between px-[50px]">
            <h1 className="font-Mont text-[36px] leading-[44px] text-yellow-dark">
              Upcoming INO & IMO
            </h1>
            <div className="flex items-center gap-[43px]">
              <img
                id="arrowLeft"
                src={`${
                  !arrowLeft
                    ? "./assets/images/ArrowLeft.png"
                    : "./assets/images/ArrowRight.png"
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
              <img
                id="arrowRight"
                src={
                  !arrowRight
                    ? "./assets/images/ArrowRight.png"
                    : "./assets/images/ArrowLeft.png"
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
          <div className="flex grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-[1.381rem] mt-[46px] px-[50px]">
            {upcoming_data.map((items) => (
              <UpcomeingCard upcoming={items} />
            ))}
          </div>
          <div className="mt-[150px] px-[50px]">
            <div className="border-2 border-yellow-dark bg-gradient-to-t from-[#f6b43233] to-[#16161a00] rounded-[8px] border-solid">
              <div className="flex">
                <div className="px-[55px] py-[94px]">
                  <img src="./assets/images/lock.png" alt="Lock" />
                </div>
                <div className="pt-[33px] pl-[27px]">
                  <h2 className="font-Mont font-bold text-[48px] text-white leading-[59px] text-start">
                    Fund Startup Protected Launch
                  </h2>

                  <div className="flex gap-14 mt-[38px]">
                    <div className="inline-block">
                      <div className="flex pb-10 items-center">
                        <div className="w-[16px] h-[16px] rounded-[50%] bg-yellow-dark" />
                        <span className="font-Mont text-[18px] text-white leading-[22px] ml-2.5">
                          DAO Voting System for Projects
                        </span>
                      </div>

                      <div className="flex  pb-10 items-center">
                        <div className="w-[16px] h-[16px] rounded-[50%] bg-yellow-dark" />
                        <span className="font-Mont text-[18px] text-white leading-[22px] ml-2.5">
                          Strict policies for projects listings
                        </span>
                      </div>
                      <div className="flex justfiy-content">
                        <button className="px-3 py-4 bg-yellow-dark rounded-[5px] font-Mont font-[18px] leading-[22px] font-bold">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="inline-block">
                      <div className="flex pb-10 items-center">
                        <span className="w-[16px] h-[16px] rounded-[50%] bg-yellow-dark" />
                        <span className="font-Mont text-[18px] text-white leading-[22px] ml-2.5">
                          Reinforced penalties for non-complient projects
                        </span>
                      </div>

                      <div className="flex pb-10 items-center">
                        <span className="w-[16px] h-[16px] rounded-[50%] bg-yellow-dark" />
                        <span className="font-Mont text-[18px] text-white leading-[22px] ml-2.5">
                          Launch refund for participants
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[150px] px-[50px]">
            <h3 className="font-Mont font-bold text-[36px] leading-[44px] text-yellow-dark text-start pr-20">The Easiest way of Investing in BlockChain Games, NFTs and Metaverses</h3>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
