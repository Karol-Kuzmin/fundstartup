import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import IMORoadMap from "../../components/RoadMap/IMORoadMap";
import INOCard from "../../components/UpcomingCard/INOCard";

const NFTLaunchpad = () => {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);
  return (
    <div className="bg-[#23170b]">
      <Header />
      <div className="container mx-auto px-[50px] font-['play'] ">
        {/* NFT Launchpad */}

        <div className="mt-[78px]">
          <p className="w-[271px] h-[30px] font-bold text-[32px] leading-[10px] text-yellow-dark">
            NTF LAUNCHPAD
          </p>
          <div className=" flex h-[402px] mt-[39px] w-[100%]">
            <button className="w-[44px] h-[44px] rounded-[5px] bg-yellow-dark self-center flex justify-center items-center">
              <img alt="" src="./assets/images/arrow-left-black.png"></img>
            </button>
            <img
              alt=""
              src="./assets/images/upcoming_card.png"
              className="w-[34%] h-auto ml-[4.5%] "></img>

            <div className="ml-[4.4%] w-[45%]">
              <p className="w-[21.7%] h-[28px] font-bold text-[24px] leading-[28px] text-white flex mt-[10px]">
                0/0 &nbsp;<p className="text-yellow-dark">raised</p>
              </p>
              <p className="w-[40%] h-[50px] font-bold text-[43px] leading-[50px] text-white mt-[27px]">
                Reval 1
              </p>
              <p className="w-[100%] h-[56px] font-normal text-[24px] leading-[28px] text-white mt-[27px]">
                You will be able to find the general information regarding the
                NFT projects here.
              </p>
              <div className="flex mt-[81px]">
                <button className="w-[120px] h-[39px] bg-yellow-dark rounded-[5px] flex justify-center items-center">
                  <p className="w-[80px] h-[19px] font-bold text-[16px] leading-[19px]">
                    View More
                  </p>
                </button>
                <div className="flex ml-[25px] items-center">
                  <img
                    alt="bag"
                    src="./assets/images/strongbox.png"
                    className="w-[17px] h-[17px]"></img>
                  <p className="w-[122px] h-[19px] font-bold text-[16px] leading-[19px] text-white ml-[5px]">
                    Awaiting Reveal
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[9.8%]">
              <div className="flex justify-end items-center h-[402px]">
                <button className=" w-[44px] h-[44px] rounded-[5px] bg-yellow-dark self-center flex justify-center items-center">
                  <img alt="" src="./assets/images/arrow-right-black.png"></img>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* IMP Upcoming */}
        <div className="pt-[77px] ">
          <div className="lg:flex justify-between">
            <h2 className="xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold leading-[44px] font-Mont">
              IMO Upcoming
            </h2>
            <div className="flex items-center justify-center gap-[43px] lg:mt-[20px] mt-[20px]">
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
          {/* <div className="flex  grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-[3.381rem] lg:mt-[46px] md:mt-[26px] mt-[15px] gap-[30px]">
            <div className="relative w-[293px] h-[372px] rounded-[10px] border-2 border-yellow-dark">
              <div className="">
                <div className="flex justify-center">
                  <div className="">
                    <div className="bg-upcoming-img w-[282px] h-[258px] flex ">
                      <div className="grid grid-cols-2 container mx-auto px-[17px] mt-[18px]">
                        <button className="w-[58.5px] h-[31px] bg-yellow-dark rounded-[5px] flex items-center justify-center ">
                          <p className="w-[43px] h-[19px] font-bold text-[16px] leading-[19px]">
                            New
                          </p>
                        </button>
                        <button className="w-[53.5px] h-[32px] border-2 border-yellow-dark  rounded-[5px] flex justify-self-end justify-center items-center">
                          <img
                            alt="heart"
                            src="./assets/images/heart.png"></img>
                          &nbsp;&nbsp;
                          <p className=" text-yellow-dark">0</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <hr className="border-yellow-dark w-[88%] mt-[5px]"></hr>
                    </div>
                    <div className="grid grid-cols-2 mt-[12px] mx-auto container px-[17px]">
                      <div>
                        <p className="w-[52.5px] h-[14px] font-bold text-[12px] leading-[14px] text-white">
                          Reveal 1
                        </p>
                        <p className="w-[88.4px] h-[14px] font-normal text-[12px] leading-[14px] text-white mt-[8px]">
                          0 busd raised
                        </p>
                      </div>
                      <button className="w-[111px] h-[37px] bg-yellow-dark rounded-[5px] flex justify-center items-center">
                        <p className="w-[80px] h-[19px] font-bold text-[16px] leading-[19px]">
                          View More
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" flex h-[57px] absolute bottom-[0px] w-[100%]">
                  <button className="self-end flex border-t-2 border-[#f6b432] w-[100%] h-[36px] text-[12px] text-[#ffffff] bg-[#43361f]  rounded-b-lg">
                    <div className="grid grid-cols-2 container mx-auto px-[17px]  items-center h-[32px]">
                      <p className="w-[42px] h-[14px] font-normal text-[12px] leading-[14px] text-white">
                        Status
                      </p>
                      <p className="w-[98px] h-[14px] font-normal text-[12px] leading-[14px] text-white justify-self-end">
                        Awoting Reveal
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <IMORoadMap/>
        </div>

        {/* INOs Upcoming */}

        <div className="pt-[34px] ">
          <div className="lg:flex justify-between">
            <h2 className="xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold leading-[44px] font-Mont">
              Upcoming INOs
            </h2>
            <div className="flex items-center justify-center gap-[43px] lg:mt-[20px] mt-[20px]">
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
          {/* <div className="flex  grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-[3.381rem] lg:mt-[46px] md:mt-[26px] mt-[15px] gap-[30px]">
            <div className="relative w-[295px] h-[372px] rounded-[10px] border-2 border-yellow-dark">
              <div className="">
                <div className="flex justify-center">
                  <div className="">
                    <div className="bg-upcoming-img w-[282px] h-[258px] flex ">
                      <div className="grid grid-cols-2 container mx-auto px-[17px] mt-[18px]">
                        <button className="w-[58.5px] h-[31px] bg-yellow-dark rounded-[5px] flex items-center justify-center ">
                          <p className="w-[43px] h-[19px] font-bold text-[16px] leading-[19px]">
                            New
                          </p>
                        </button>
                        <button className="w-[53.5px] h-[32px] border-2 border-yellow-dark  rounded-[5px] flex justify-self-end justify-center items-center">
                          <img
                            alt="heart"
                            src="./assets/images/heart.png"></img>
                          &nbsp;&nbsp;
                          <p className=" text-yellow-dark">0</p>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <hr className="border-yellow-dark w-[88%] mt-[5px]"></hr>
                    </div>
                    <div className="grid grid-cols-2 mt-[12px] mx-auto container px-[17px]">
                      <div>
                        <p className="w-[52.5px] h-[14px] font-bold text-[12px] leading-[14px] text-white">
                          Reveal 1
                        </p>
                        <p className="w-[88.4px] h-[14px] font-normal text-[12px] leading-[14px] text-white mt-[8px]">
                          0 busd raised
                        </p>
                      </div>
                      <button className="w-[111px] h-[37px] bg-yellow-dark rounded-[5px] flex justify-center items-center">
                        <p className="w-[80px] h-[19px] font-bold text-[16px] leading-[19px]">
                          View More
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" flex h-[57px] absolute bottom-[0px] w-[100%]">
                  <button className="self-end flex border-t-2 border-[#f6b432] w-[100%] h-[36px] text-[12px] text-[#ffffff] bg-[#43361f]  rounded-b-lg">
                    <div className="grid grid-cols-2 container mx-auto px-[17px]  items-center h-[32px]">
                      <p className="w-[42px] h-[14px] font-normal text-[12px] leading-[14px] text-white">
                        Status
                      </p>
                      <p className="w-[98px] h-[14px] font-normal text-[12px] leading-[14px] text-white justify-self-end">
                        Awoting Reveal
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <IMORoadMap/>
        </div>

        {/* Explore INOs */}
        <div className="pt-[54px] ">
          <div className="lg:flex justify-between">
            <h2 className="xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold leading-[44px] font-Mont">
              Upcoming INOs
            </h2>
          </div>
          <div className="container mx-auto pt-[36px]">
            <div className="grid grid-cols-5 gap-0">
              <button className="w-[100%] h-[72px] border-yellow-dark border-2  rounded-l-[5px] bg-gradient-to-t from-[#f6b43233] to-[#16161a00]">
                <p className="text-white">All</p>
              </button>
              <button className="w-[100%] h-[72px] border-yellow-dark border-2  bg-gradient-to-t from-[#f6b43233] to-[#16161a00]">
                <p className="text-white">metaverses</p>
              </button>
              <button className="w-[100%] h-[72px] border-yellow-dark border-2  bg-gradient-to-t from-[#f6b43233] to-[#16161a00]">
                <p className="text-white">NFT</p>
              </button>
              <button className="w-[100%] h-[72px] border-yellow-dark border-2  bg-gradient-to-t from-[#f6b43233] to-[#16161a00]">
                <p className="text-white">collectbles</p>
              </button>
              <button className="w-[100%] h-[72px] border-yellow-dark border-2 rounded-r-[5px] bg-gradient-to-t from-[#f6b43233] to-[#16161a00]">
                <p className="text-white">real business backing</p>
              </button>
            </div>
          </div>
        </div>

        {/* No record found */}

        <div className="pt-[54px] pb-[104px] ">
          <div className="lg:flex justify-between">
            <h2 className="xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold leading-[44px] font-Mont">
            No Record Found
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NFTLaunchpad;
