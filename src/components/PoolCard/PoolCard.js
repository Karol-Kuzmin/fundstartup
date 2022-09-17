import React from "react";

export default function PoolCard(props) {
  return (
    <div className="flex justify-center">
      <div className="  md:justify-self-center sm:justify-self-center md:w-[100%] sm:w-[70%]  h-[207px] border-2 border-[#f6b432] rounded-[8px] border-solid pl-[21px] pr-[20px]">
        <div className="text-start">
          <h3 className="  xs:text-[22px] sm:text-[24px] text-[12px] text-[#f6b432] mt-[20px] leading-[29px]">
            {props.poolData.title}
          </h3>
          <p className=" xs:text-[18px] text-[14px] text-[#ffffff] mt-[18px] h-[62px] leading-[22px] ">
            {props.poolData.content}
          </p>
          <div className="flex mt-[28px] items-center w-[150px] hover:border-2 border-solid border-[#f6b432] rounded-[8px] ">
            <p className="text-[18px] text-[#f6b432] leading-[22px]"> Learn More</p>
            <img
              alt=""
              src="/assets/images/ArrowRight.png"
              className="w-[28.84px] h-[13.44px] ml-[9px]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
