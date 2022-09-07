import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import IMORoadMap from "../../components/RoadMap/IMORoadMap";
import INORoadMap from "../../components/RoadMap/INORoadMap";
import NftLaunchpadSlide from "../../components/RoadMap/NftLaunchpadSlide";

const NFTLaunchpad = () => {
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);
  const [arrowLeftB, setArrowLeftB] = useState(false);
  const [arrowRightB, setArrowRightB] = useState(false);
  return (
    <div className="bg-[#23170b]">
      <Header />
      <div className="container mx-auto px-[50px] font-['play'] ">
        {/* NFT Launchpad */}

        <div className="mt-[78px]">
          <p className="font-bold text-[32px] leading-[10px] lg:ml-[7%] text-yellow-dark lg:text-start sm:text-center">
            NTF LAUNCHPAD
          </p>
          <div className=" mt-[39px] relative">
            <button className="w-[44px] h-[44px] rounded-[5px] bg-yellow-dark self-center flex justify-center items-center js-next absolute top-[200px] z-10">
              <img alt="" src="./assets/images/arrow-left-black.png"></img>
            </button>
            <NftLaunchpadSlide/>
              <div className="absolute right-0 top-[200px] z-10">
                <button className=" w-[44px] h-[44px] rounded-[5px] bg-yellow-dark self-center flex justify-center items-center js-prev ">
                  <img alt="" src="./assets/images/arrow-right-black.png"></img>
                </button>
            </div>
          </div>
        </div>

        {/* IMP Upcoming */}
        <div className="pt-[77px] ">
          <div className="flex justify-between">
            <h2 className="xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold leading-[44px] font-Mont">
              IMO Upcoming
            </h2>
            <div className="flex items-center justify-center gap-[43px] lg:mt-[20px] mt-[20px]">
              <div className="js-next6">
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
              <div className="js-prev6">
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
          <IMORoadMap />
        </div>

        {/* INOs Upcoming */}

        <div className="pt-[34px] ">
          <div className="flex justify-between">
            <h2 className="xl:text-[36px] lg:text-[28px] md:text-[22px] text-[#f6b432] font-bold leading-[44px] font-Mont">
              Upcoming INOs
            </h2>
            <div className="flex items-center justify-center gap-[43px] lg:mt-[20px] mt-[20px]">
              <div className="js-next7">
                <img
                  id="arrowLeft"
                  src={`${
                    !arrowLeftB
                      ? "./assets/images/ArrowLeft.png"
                      : "./assets/images/ArrowLeft_a.png"
                  }`}
                  alt="ArrowLeft"
                  className="w-[37px] h-[17px] hover:cursor-pointer"
                  onMouseEnter={
                    !arrowLeftB
                      ? () => setArrowLeftB(true)
                      : () => setArrowLeftB(false)
                  }
                  onMouseLeave={
                    !arrowLeftB
                      ? () => setArrowLeftB(true)
                      : () => setArrowLeftB(false)
                  }
                />
              </div>
              <div className="js-prev7">
                <img
                  id="arrowRight"
                  src={
                    !arrowRightB
                      ? "./assets/images/ArrowRight.png"
                      : "./assets/images/ArrowRight_a.png"
                  }
                  alt="ArrowRight"
                  className="w-[37px] h-[17px] hover:cursor-pointer"
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
          <INORoadMap />
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
