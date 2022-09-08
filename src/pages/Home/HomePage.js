import React, { useState } from "react";
import HomeAdvisorCard from "../../components/AdvisorCard/HomeAdvisorCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./accordion.css";
import "tw-elements";
import UpcomingRoadMap from "../../components/RoadMap/UpcomingRoadMap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AdvisorRoadMap from "../../components/RoadMap/AdvisorRoadMap";
import PartnerRoadMap from "../../components/RoadMap/PartnerRoadMap";

const HomePage = () => {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);
  const [arrowRightB, setArrowRightB] = useState(false);
  const [arrowLeftC, setArrowLeftC] = useState(false);
  const [arrowRightC, setArrowRightC] = useState(false);
  const [arrowLeftD, setArrowLeftD] = useState(false);
  const [arrowRightD, setArrowRightD] = useState(false);
  const [arrowRightE, setArrowRightE] = useState(false);

  return (
    <div>
      <div className="bg-home bg-cover">
        <Header />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:mt-[55px] items-start px-[50px]">
            <div className="grid sm:justify-items-start justify-items-center">
              <p className="font-Mont lg:text-[52px]  sm:text-[30px] text-[20px] text-white font-bold sm:leading-[63px] leading-[40px] non-italic text-start">
                Become an early investor in the top
                <span className="text-yellow-dark"> BlockChain NFT</span> and
                <span className="text-yellow-dark"> Metaverses</span>
              </p>
              <span className="text-white font-Mont sm:text-[18px] text-[12px] font-normal sm:leading-[22px] leading-[16px] non-italic sm:text-start  sm:pr-[110px]">
                Fundstartup is the leading blockchain NFT and Metaverses
                launchpad with over 100 projects launched with the highest
                average ROI in the industry.
              </span>
              <div className="flex gap-x-4 mt-[32px]">
                <button className="p-[16px] bg-yellow-dark rounded-[5px] sm:text-[18px] text-[12px] font-Mont leading-[22px] font-bold">
                  Buy FSP
                </button>
                <button className="p-[16px] bg-yellow-dark rounded-[5px] sm:text-[18px] text-[12px] font-Mont leading-[22px] font-bold">
                  How To Start
                </button>
              </div>
              <span className="text-white font-Mont text-[18px] leading-[22px] font-[400] mt-[36px]">
                Available On
              </span>
              <div className="sm:flex justify-between mt-[20px] pb-[62px] gap-x-6 w-[100%]">
                <div className="flex  sm:gap-10 gap-2">
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
            </div>
            <div className="flex sm:hidden lg:block pb-[46px]">
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
          <div className="flex xl:justify-between lg:justify-between md:justify-between  sm:justify-around  items-center px-[50px]">
            <p className="flex items-center font-Mont md:text-[36px] sm:text-[24px] leading-[44px] text-yellow-dark">
              Upcoming INO & IMO
            </p>
            <div className="flex items-center justify-center gap-[43px]">
              <div className="js-next1">
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
                />
              </div>
              <div className="js-prev1">
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
          <div className="px-[50px]">
          <UpcomingRoadMap />
          </div>
          
          <div className="mt-[150px] px-[50px]">
            <div className="border-2 border-yellow-dark bg-gradient-to-t from-[#f6b43233] to-[#16161a00] rounded-[8px] border-solid">
              <div className="grid md:grid-cols-12 sm:grid-cols-1">
                <div className=" col-span-3 lg:px-[55px] lg:py-[94px] lg:mt-[0px] lg:ml-[0px] md:mt-[50px] md:ml-[25px] sm:mt-[30px] xs:justify-self-center ">
                  <img src="./assets/images/lock.png" alt="Lock" />
                </div>
                <div className="py-[33px] pl-[27px] col-span-9 xl:ml-[-50px] ">
                  <h2 className="font-Mont font-bold text-[48px] text-white leading-[59px] md:text-start sm:text-center">
                    Fund Startup Protected Launch
                  </h2>

                  <div className="grid xl:grid-cols-2 md:grid-cols-1 mt-[38px] sm:justify-center ">
                    <div className="flex pb-10 items-center">
                      <div className="w-[16px] h-[16px] rounded-[50%] bg-yellow-dark" />
                      <span className="font-Mont text-[18px] text-white leading-[22px] ml-2.5">
                        DAO Voting System for Projects
                      </span>
                    </div>
                    <div className="flex pb-10 items-center xl:ml-[-30px]">
                      <span className="w-[16px] h-[16px] rounded-[50%] bg-yellow-dark" />
                      <span className="font-Mont text-[18px] text-white leading-[22px] ml-2.5">
                        Reinforced penalties for non-complient projects
                      </span>
                    </div>
                    <div className="flex  pb-10 items-center">
                      <div className="w-[16px] h-[16px] rounded-[50%] bg-yellow-dark" />
                      <span className="font-Mont text-[18px] text-white leading-[22px] ml-2.5">
                        Strict policies for projects listings
                      </span>
                    </div>

                    <div className="flex pb-10 items-center xl:ml-[-30px]">
                      <span className="w-[16px] h-[16px] rounded-[50%] bg-yellow-dark" />
                      <span className="font-Mont text-[18px] text-white leading-[22px] ml-2.5">
                        Launch refund for participants
                      </span>
                    </div>
                    <div className="flex justfiy-content">
                      <button className="px-3 py-4 bg-yellow-dark rounded-[5px] font-Mont font-[18px] leading-[22px] font-bold">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[150px] px-[50px]">
            <h3 className="font-Mont font-bold text-[36px] leading-[44px] text-yellow-dark lg:text-start md:text-center lg:pr-20">
              The Easiest way of Investing in BlockChain Games, NFTs and
              Metaverses
            </h3>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-[3.381rem] mt-[68px] mb-[98px]">
              <div className="flex relative bg-gradient-to-t from-[#f6b43233] to-[#16161a00] rounded-[8px] w-[100%] h-[190px] border-2 border-[#f6b432] rounded-[8px] border-solid">
                <span className="w-16 h-16 p-3.5 bg-yellow-dark rounded-[50%] absolute left-5 top-[-32px]">
                  <img src="./assets/images/game_icon1.png" alt="Icon1" />
                </span>
                <div className="text-start px-3.5 pt-[47px]">
                  <h3 className="font-Mont text-[16px] text-white font-bold leading-5 ">
                    Access to Leading Projcets
                  </h3>
                  <p className="mt-[12px] font-Mont text-[16px] text-white leading-5 pr-5">
                    As a launchpad and incubator we're constantly searching for
                    the best upcoming, NFTs and metaverses projects for our
                    holders to invest
                  </p>
                </div>
              </div>
              <div className="flex relative bg-gradient-to-t from-[#f6b43233] to-[#16161a00] rounded-[8px] w-[100%] h-[190px]  border-2 border-[#f6b432] rounded-[8px] border-solid">
                <span className="w-16 h-16 p-3.5 bg-yellow-dark rounded-[50%] absolute left-5 top-[-32px]">
                  <img src="./assets/images/game_icon2.png" alt="Icon2" />
                </span>
                <div className="text-start px-3.5 pt-[47px]">
                  <h3 className="font-Mont text-[16px] text-white font-bold leading-5 ">
                    Projects Due Diligence
                  </h3>
                  <p className="mt-[12px] font-Mont text-[16px] text-white leading-5 pr-5">
                    We do the hard work of checking if the project is worth
                    investing in, meeting the team and deeply analyzing its
                    whitepaper prior to the INO
                  </p>
                </div>
              </div>
              <div className="flex relative bg-gradient-to-t from-[#f6b43233] to-[#16161a00] rounded-[8px] w-[100%] h-[190px] border-2 border-[#f6b432] rounded-[8px] border-solid">
                <span className="w-16 h-16 p-3.5 bg-yellow-dark rounded-[50%] absolute left-5 top-[-32px]">
                  <img src="./assets/images/game_icon3.png" alt="Icon3" />
                </span>
                <div className="text-start px-3.5 pt-[47px]">
                  <h3 className="font-Mont text-[16px] text-white font-bold leading-5 ">
                    Purchase the tokens and NFTs early
                  </h3>
                  <p className="mt-[12px] font-Mont text-[16px] text-white leading-5 pr-5">
                    Get the advantage fo pre-launch purchasing of tokens and
                    NFTs of the projects and the listing price prior to everyone
                  </p>
                </div>
              </div>
              <div className="flex relative bg-gradient-to-t from-[#f6b43233] to-[#16161a00] rounded-[8px] w-[100%] h-[190px] border-2 border-[#f6b432] rounded-[8px] border-solid">
                <span className="w-16 h-16 p-3.5 bg-yellow-dark rounded-[50%] absolute left-5 top-[-32px]">
                  <img src="./assets/images/game_icon4.png" alt="Icon4" />
                </span>
                <div className="text-start px-3.5 pt-[47px]">
                  <h3 className="font-Mont text-[16px] text-white font-bold leading-5 ">
                    Stake and Farm for Passive Income
                  </h3>
                  <p className="mt-[12px] font-Mont text-[16px] text-white leading-5 pr-5">
                    Holders can get double rewards by staking and farming FSP
                    Token and also get free tokens from our incubated projects
                    vis the Seed Staking Feature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-home-a bg-cover">
          <div className="container mx-auto">
            <div className="px-[50px] text-start">
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 py-[52px] gap-[31px]">
                <div className="col-span-1">
                  <span className=" text-[100px] leading-[122px] text-yellow-dark font-bold">
                    "
                  </span>
                  <p className="font-Mont text-[36px] leading-[44px] text-yellow-dark font-bold">
                    What our customer is saying?
                  </p>
                  <p className="font-Mont text-[15px] leading-[18px] text-white">
                    What is the community saying about Fund Startup
                  </p>
                </div>
                <div className="col-span-2">
                  <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-[31px]">
                    <div className="relative bg-[#16161A]  w-[100%] h-[350px] border-2 border-[#f6b432] rounded-[10px] border-solid px-[23.5px] pt-[34px] pb-[16px]">
                      <p className="customer font-Mont text-[18px] text-white leading-[22px] pr-3 max-h-[160px] overflow-y-auto">
                        "I love fundstartup.net website, they give the best
                        return on my investment and uptodate project that fit
                        with NFT and Metaverse"
                      </p>
                      <div className="absolute bottom-[75px] flex border-b border-yellow-dark gap-2.5 w-[88%] py-[8%]">
                        <button className="font-Mont text-[16px] leading-[20px] font-bold px-[14px] py-[7px] bg-yellow-dark rounded-[5px]">
                          Advisor
                        </button>
                        <button className="font-Mont text-[16px] leading-[20px] font-bold px-[14px] py-[7px] bg-yellow-dark rounded-[5px]">
                          Influencer
                        </button>
                      </div>
                      <div className="absolute xl:right-[9%] bottom-[3%] flex items-center">
                        <img src="./assets/images/jame.png" alt="Jame" />
                        <div className="block mx-1">
                          <p className="font-Mont text-[16px] text-white leading-[20px] font-bold">
                            Jame Matis
                          </p>
                          <p className="font-Mont text-[14px] text-white leading-[17px]">
                            Content Creator And Crypto Investor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-[#16161A] w-[100%] h-[350px] border-2 border-[#f6b432] rounded-[10px] border-solid px-[23.5px] pt-[34px] pb-[16px]">
                      <p className="customer font-Mont text-[18px] text-white leading-[22px] pr-3 max-h-[160px] overflow-y-auto">
                        "Fundstartup is a great place to discover new project at
                        early stage which I can invest with less cost and
                        project is legit. I got a higher return on my investment
                        in a short period"
                      </p>
                      <div className="absolute bottom-[75px] flex border-b border-yellow-dark flex gap-2.5 w-[88%] py-[8%]">
                        <button className="font-Mont text-[16px] leading-[20px] font-bold px-[14px] py-[7px] bg-yellow-dark rounded-[5px]">
                          Advisor
                        </button>
                        <button className="font-Mont text-[16px] leading-[20px] font-bold px-[14px] py-[7px] bg-yellow-dark rounded-[5px]">
                          Influencer
                        </button>
                      </div>
                      <div className="absolute xl:right-[9%] bottom-[3%] flex items-center">
                        <img src="./assets/images/john.png" alt="John" />
                        <div className="block mx-1">
                          <p className="font-Mont text-[16px] text-white leading-[20px] font-bold">
                            John Hoover
                          </p>
                          <p className="font-Mont text-[14px] text-white leading-[17px]">
                            Content Creator And Crypto Investor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Join Fundstartup.net */}
        <div className="container mx-auto pt-[100px] pb-[140px]">
          <div className="mx-[50px]">
            <div className="xl:flex justify-between w-[100%] h-auto border-2 border-[#f6b432] rounded-[8px] border-solid px-[82px] py-[40px]">
              <div className="md:text-start sm:text-center">
                <p className="font-Mont font-bold text-[36px] leading-[44px] text-white md:w-[80%] sm:[100%]">
                  Join Fundstartup.net And Content Creator Network
                </p>
                <p className="font-Mont text-white text-[18px] leading-[22px] pt-[27px]">
                  If you have an amazing project that you'd like to launch at
                  Startup Fund, apply now!
                </p>
              </div>
              <div className="flex justify-self-center w-[134px] h-[134px] rounded-[50%] xl:my-[0px] sm:my-[20px] px-[33px] py-[51px] bg-gradient-to-t from-[#f6b43233] to-[#f6b4324d] border-2 border-yellow-dark border-solid">
                <img
                  src={
                    !arrowRightB
                      ? "./assets/images/ArrowRight.png"
                      : "./assets/images/ArrowRight_a.png"
                  }
                  className="w-[67.16px] h-[31.29px] hover:cursor-pointer"
                  alt="ArrowRight"
                  onMouseEnter={
                    !arrowRightB
                      ? () => setArrowRightB(true)
                      : () => setArrowRightB(false)
                  }
                  onMouseLeave={
                    !arrowRightB
                      ? () => setArrowRightB(true)
                      : () => setArrowRightB(false)
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}

        <div className="container mx-auto pt-[100px] pb-[140px]">
          <div className="mx-[50px] xl:flex">
            <div className="text-start">
              <h2 className="xl:w-[517px]   font-[Montserrat] text-[36px] text-[#f6b432] font-bold leading-[44px]">
                How to join the blockchain NFT & Metaverse Revolution with us
              </h2>

              <p className="xl:w-[375px] h-[43px] text-[16px] text-[white] font-normal leading-[22px] mt-[10px]">
                Only 3 little steps are needed for you to start enjoying all the
                advantages of Fund Startup
              </p>
            </div>
            <div className="flex sm:justify-center sm:mt-[50px] xl:mt-0 sm:pl-[30px]">
              <div className="border-2 border-yellow-dark h-[708px] xl:ml-[80px] "></div>

              <div className="pl-[90px] ml-[-128px]">
                <div className="w-[71px] h-[71px] rounded-[35.5px] bg-[#f6b432]">
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/handbag.png"
                      className="w-[42.74px] h-[42.71px] mt-[10px]"
                      alt="handbag"
                    />
                  </div>
                </div>
                <br></br>
                <div className="w-[71px] h-[71px] rounded-[35.5px] bg-[#f6b432] mt-[140px]">
                  <div className="flex justify-center">
                    <img
                      src="/assets/images/cake.png"
                      className="w-[43px] h-[40px] mt-[15px]"
                      alt="cake"
                    />
                  </div>
                </div>
                <br></br>
                <div className="w-[71px] h-[71px] rounded-[35.5px] bg-[#f6b432] mt-[134px]">
                  <div className="justify-center flex">
                    <img
                      src="/assets/images/flag.png"
                      className="w-[32px] h-[40px] mt-[15px]"
                      alt="flag"
                    />
                  </div>
                </div>
                <br></br>
                <div className="w-[71px] h-[71px] rounded-[35.5px] bg-[#f6b432] mt-[144px]">
                  <div className="justify-center flex">
                    <img
                      src="/assets/images/check.png"
                      className="w-[40px] h-[40px] mt-[15px]"
                      alt="check"
                    />
                  </div>
                </div>
              </div>
              <div className="pl-[30px] ">
                <div className="">
                  <p className="font-['Montserrat'] text-[18px] text-white font-bold leading-[22px] text-start">
                    Purchase FSP Token
                  </p>
                  <p className="font-normal leading-22px text-[18px] font-['Montserrat'] text-white mt-[15px] h-[84px] text-start">
                    FSP is token that enables its holders to participate in the
                    INOs, stake and farm for passive income
                  </p>
                  <button className="mt-[7px] p-[16px] bg-yellow-dark rounded-[5px] text-[18px] font-Mont leading-[22px] font-bold w-[112px] h-[47px] flex self-start">
                    Buy FSP
                  </button>
                </div>

                <div className="mt-[50px]">
                  <p className="font-['Montserrat'] text-[18px] text-white font-bold leading-[22px] text-start">
                    Stake or Farm your FSP Token
                  </p>
                  <p className="font-normal leading-22px text-[18px] font-['Montserrat'] text-white mt-[15px] h-[84px] text-start">
                    Add your FSP to one of our staking or farming pools and earn
                    passive income
                  </p>
                  <button className="mt-[7px] p-[16px] bg-yellow-dark rounded-[5px] text-[18px] font-Mont leading-[22px] font-bold w-[112px] h-[47px] flex self-start">
                    Buy FSP
                  </button>
                </div>

                <div className="mt-[50px]">
                  <p className="font-['Montserrat'] text-[18px] text-white font-bold leading-[22px] text-start">
                    Complete KYC
                  </p>
                  <p className="font-normal leading-22px text-[18px] font-['Montserrat'] text-white mt-[15px] h-[84px] text-start">
                    It's a simple step to ensure your participation in the INO
                    and IMO
                  </p>
                  <button className="mt-[7px] p-[16px] bg-yellow-dark rounded-[5px] text-[18px] font-Mont leading-[22px] font-bold w-[112px] h-[47px] flex self-start">
                    Buy FSP
                  </button>
                </div>

                <div className="mt-[50px]">
                  <p className="font-['Montserrat'] text-[18px] text-white font-bold leading-[22px] text-start">
                    You're all set!
                  </p>
                  <p className="font-normal leading-22px text-[18px] font-['Montserrat'] text-white mt-[15px] h-[84px] text-start">
                    Now you can purchase the tokens and NFTs os the best
                    blockchain. Now you can purchase the token & NFT on the Best
                    Blockchain Launchpad.
                  </p>
                  <button className="mt-[7px] p-[16px] bg-yellow-dark rounded-[5px] text-[18px] font-Mont leading-[22px] font-bold w-[112px] h-[47px] flex self-start">
                    Buy FSP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our Advisors */}
        <div className="bg-home-b">
          <div className="container mx-auto pt-[50px] pb-[70px]">
            <div className="flex justify-between px-[50px] ">
              <p className="font-Mont text-[36px] leading-[44px] text-yellow-dark">
                Our Advisors
              </p>
              <div className="flex items-center gap-[43px]">
                <div className="js-next2">
                  <img
                    id="arrowLeft"
                    src={`${
                      !arrowLeftC
                        ? "./assets/images/ArrowLeft.png"
                        : "./assets/images/ArrowLeft_a.png"
                    }`}
                    alt="ArrowLeft"
                    className="w-[37px] h-[17px] hover:cursor-pointer"
                    onMouseEnter={
                      !arrowLeftC
                        ? () => setArrowLeftC(true)
                        : () => setArrowLeftC(false)
                    }
                    onMouseLeave={
                      !arrowLeftC
                        ? () => setArrowLeftC(true)
                        : () => setArrowLeftC(false)
                    }
                    // onMouseEnter={()=>alert("ddd")}
                  />
                </div>
                <div className="js-prev2">
                  <img
                    id="arrowRight"
                    src={
                      !arrowRightC
                        ? "./assets/images/ArrowRight.png"
                        : "./assets/images/ArrowRight_a.png"
                    }
                    alt="ArrowRight"
                    className="w-[37px] h-[17px] hover:cursor-pointer"
                    onMouseEnter={
                      !arrowRightC
                        ? () => setArrowRightC(true)
                        : () => setArrowRightC(false)
                    }
                    onMouseLeave={
                      !arrowRightC
                        ? () => setArrowRightC(true)
                        : () => setArrowRightC(false)
                    }
                  />
                </div>
              </div>
            </div>
            <AdvisorRoadMap />
          </div>
        </div>

        {/* our Partners */}
        <div className="container mx-auto mt-[81px]">
          <div className="mx-[50px] h-[145px]">
            <div className="flex justify-between  ">
              <p className="font-Mont text-[36px] leading-[44px] text-yellow-dark">
                Our Partners
              </p>
              <div className="flex items-center gap-[43px]">
                <div className="js-next3">
                <img
                  id="arrowLeft"
                  src={`${
                    !arrowLeftD
                      ? "./assets/images/ArrowLeft.png"
                      : "./assets/images/ArrowLeft_a.png"
                  }`}
                  alt="ArrowLeft"
                  className="w-[37px] h-[17px] hover:cursor-pointer"
                  onMouseEnter={
                    !arrowLeftD
                      ? () => setArrowLeftD(true)
                      : () => setArrowLeftD(false)
                  }
                  onMouseLeave={
                    !arrowLeftD
                      ? () => setArrowLeftD(true)
                      : () => setArrowLeftD(false)
                  }
                />
                </div>
                <div className="js-prev3">
                <img
                  id="arrowRight"
                  src={
                    !arrowRightD
                      ? "./assets/images/ArrowRight.png"
                      : "./assets/images/ArrowRight_a.png"
                  }
                  alt="ArrowRight"
                  className="w-[37px] h-[17px] hover:cursor-pointer"
                  onMouseEnter={
                    !arrowRightD
                      ? () => setArrowRightD(true)
                      : () => setArrowRightD(false)
                  }
                  onMouseLeave={
                    !arrowRightD
                      ? () => setArrowRightD(true)
                      : () => setArrowRightD(false)
                  }
                />
                </div>
                
              </div>
            </div>
            <div className="h-[66px] mt-[35px]">
              {/* <img src="/assets/images/ourp.png" alt="Ourp" /> */}
              <PartnerRoadMap/>
            </div>
          </div>
        </div>

        {/* Accordian */}
        <div className="container mx-auto h-[387px] mt-[243px]">
          <div className="px-[50px] lg:flex">
            <div className="text-start w-[370px] h-[160px]">
              <h2 className="  font-[Montserrat] text-[36px] text-[#f6b432] font-bold leading-[44px]">
                Frequently Asked Questions
              </h2>

              <p className="w-[375px] h-[46px] text-[16px] text-[white] font-normal leading-[20px] mt-[26px]">
                Haven’t found the answers your are looking for? <br></br>
                Contact us at &nbsp;
                <span className="text-yellow-dark">
                  support@fundstartup.net
                </span>
              </p>
            </div>

            <div className="w-[100%] text-white text-start sm:mt-[50px] lg:mt-0">
              <article>
                <div className="contentWrapper">
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="question1"
                        name="accordionGroup"
                        className="toggleState"
                      />
                      <h2 className="question">
                        <label htmlFor="question1">
                          What does IMO and INO mean?
                        </label>
                      </h2>
                      <p className="answer">
                        These are acronyms that stand for Initial Metaverse
                        Offer (IMO) and Initial NFT Offer (INO) which are the
                        main services provided by Fund Startup. Though the IMOs
                        and INOs FSP holders can purchase the tokens or NFTs or
                        a project prior to the listing and because of that, the
                        investors are able to enjoy higher ROI from these
                        projects.
                      </p>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="question2"
                        name="accordionGroup"
                        className="toggleState"
                      />
                      <h2 className="question">
                        <label htmlFor="question2">
                          What is the maximum file upload size?
                        </label>
                      </h2>
                      <p className="answer">
                        No more than 2GB. All files in your account must fit
                        your allotted storage space.
                      </p>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="question3"
                        name="accordionGroup"
                        className="toggleState"
                      />
                      <h2 className="question">
                        <label htmlFor="question3">
                          How do I reset my password?
                        </label>
                      </h2>
                      <p className="answer">
                        Click “Forgot password” from the login page or “Change
                        password” from your profile page. A reset link will be
                        emailed to you.
                      </p>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="question4"
                        name="accordionGroup"
                        className="toggleState"
                      />
                      <h2 className="question">
                        <label htmlFor="question4">
                          Can I cancel my subscription?
                        </label>
                      </h2>
                      <p className="answer">
                        Yes! Send us a message and we’ll process your request no
                        questions asked.
                      </p>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="question5"
                        name="accordionGroup"
                        className="toggleState"
                      />
                      <h2 className="question">
                        <label htmlFor="question5">
                          Do you provide additional support?
                        </label>
                      </h2>
                      <p className="answer">
                        Chat and email support is available 24/7. Phone lines
                        are open during normal business hours.
                      </p>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-[100px] pb-[140px]">
          <div className="mx-[50px]">
            <div className="xl:flex justify-between w-[100%] h-auto border-2 border-[#f6b432] rounded-[8px] border-solid px-[82px] py-[40px]">
              <div className="md:text-start sm:text-center">
                <p className="font-Mont font-bold text-[36px] leading-[44px] text-white md:w-[80%] sm:[100%]">
                  Join Fundstartup.net And Content Creator Network
                </p>
                <p className="font-Mont text-white text-[18px] leading-[22px] pt-[27px]">
                  If you have an amazing project that you'd like to launch at
                  Startup Fund, apply now!
                </p>
              </div>
              <div className="flex justify-self-center w-[134px] h-[134px] rounded-[50%] xl:my-[0px] sm:my-[20px] px-[33px] py-[51px] bg-gradient-to-t from-[#f6b43233] to-[#f6b4324d] border-2 border-yellow-dark border-solid">
                <img
                  src={
                    !arrowRightE
                      ? "./assets/images/ArrowRight.png"
                      : "./assets/images/ArrowRight_a.png"
                  }
                  className="w-[67.16px] h-[31.29px] hover:cursor-pointer"
                  alt="ArrowRight"
                  onMouseEnter={
                    !arrowRightE
                      ? () => setArrowRightE(true)
                      : () => setArrowRightE(false)
                  }
                  onMouseLeave={
                    !arrowRightE
                      ? () => setArrowRightE(true)
                      : () => setArrowRightE(false)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
