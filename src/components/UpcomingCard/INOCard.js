import React from "react";

export default function INOCard(props) {
    return(
        <div className="relative md:w-[100%] sm:w-[293px] h-[372px] sm:mx-auto  rounded-[10px] border-2 border-yellow-dark">
              <div className="">
                <div className="flex justify-center">
                  <div className="">
                    <div className="bg-upcoming-img lg:w-[100%] md:w-[295px] sm:w-[282px] h-[258px] flex ">
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
    )
}