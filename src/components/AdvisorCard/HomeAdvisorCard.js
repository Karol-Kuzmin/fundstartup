import React from "react";

export default function HomeAdvisorCard(props) {
  return (
      <div className="grid justify-items-center bg-gradient-to-t from-[#f6b43233] to-[#16161a00]  w-[100%] h-[281px] border-2 border-[#f6b432] rounded-[10px] border-solid p-[34px]">
        <img src={props.advisor.img_url} alt="Ali Karabey" />
        <h3 className="font-Mont text-[18px] leading-[22px] text-white font-bold mt-[20px]">
          {props.advisor.name}
        </h3>
        <p className="font-Mont text-[18px] leading-[22px] text-white mt-[13px] text-center">
          {props.advisor.content}
        </p>
      </div>
  );
}
