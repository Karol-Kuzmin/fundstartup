import React from "react";

export default function UpcomeingCard(props) {
 
  return (
    <div className="flex justify-center">
      <div className="flex  md:justify-self-center sm:justify-self-center md:w-[100%] sm:w-[70%] h-[372px] border-2 border-[#f6b432] rounded-[8px] border-solid ">
        <div className="w-[100%] relative">
          <div className=" container mx-auto px-[1.25rem]">
            <div className="mt-[24px]  flex">
              <button className="w-[55px] h-[31px]  rounded-[8px]   bg-amber-500">
                <p className="text-[16] text-[black] font-bold">INO</p>
              </button>
              <div className="flex justify-end  w-[80%]">
                <button className="w-[93px] h-[31px] border-2 border-[#f6b432] rounded-[8px] border-solid font-bold">
                  <p className="text-[16] text-[#f6b432]">1st Phase</p>
                </button>
              </div>
            </div>
            <div className="flex mt-[34px] items-center">
              <img alt="" src={props.upcoming.img_url}></img>
              <h2 className="text-[16] text-[#ffffff] ml-[7px] font-bold font-Mont">
                {props.upcoming.title}
              </h2>
            </div>
            <p className="customer text-[16px] text-[white] font-Mont mt-[16px] max-h-[100px] overflow-y-auto">
              {props.upcoming.content}
            </p>

            <hr className="border-[#f6b432] mt-[32px] "></hr>

            <div className="flex md:mt-[10px] sm:mt-[25px] items-center">
              <p className="text-white text-[12px]">TBA</p>

              <div className="flex justify-end  w-[88%]">
                <button className="w-[104px] h-[37px]  rounded-[8px]  bg-amber-500">
                  <p className="text-[16px] text-[black] font-bold ">
                    View More
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className=" ">
            <button className=" absolute right-[0px] bottom-[0px] border-t-2 border-[#f6b432] w-[100%] h-[36px] text-[12px] text-[#ffffff] bg-[#43361f]  rounded-b-lg">
              <p className="justify-start flex ml-[20px]">Public</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
