import React from "react";
import { FaFacebook, FaTelegram, FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="grid  md:grid-cols-12 sm:grid-cols-3 grid-cols-12 xl:text-left lg:text-left md:text-left gap-4 pt-[39px] sm:text-center text-center pb-[54px] ">
        {/* --------------- row -1 ------------------ */}
        <div className="md:col-span-5 col-span-12 xl:pl-[128px] xl:pr-0 lg:pl-[128px] lg:pr-0 md:pl-[128px] md:pr-0 sm:pl-[100px] sm:pr-[100px]">
          <div className="flex xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center">
            <img
              src="/assets/images/fundstartup_logo.png"
              alt="fundstartup"
              className="flex w-[220px] mb-[30px]"
            />
          </div>
          <span className="text-white font-['Montserrat'] non-italic font-normal text-[18px] leading-[22px]">
            Fundstartup.net is a Blockchain NFT & Metaverse focused Incubator
            and Launchpad. By staking FSP, you become eligible to buy NFT &
            Metaverse takens before everyone else, giving you the edge in the
            play-to-earn era!
          </span>
        </div>
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-4 col-span-12 md:pt-[50px] pt-[20px] xl:pl-[125px] lg:pl-[70px]">
          <span className="text-white font-['Montserrat'] non-italic font-normal text-[18px] leading-[22px] ">
            Terms of Services
            <br /> Privacy Policy
            <br /> Whitepaper
            <br /> Affiliate Program
            <br /> Invite Friends
          </span>
        </div>
        <div className="md:col-span-4 col-span-12 md:mt-[-10px] mt-[20px] xl:pl-[60px] lg:pl-[40px]">
          <span className="font-['Montserrat'] text-[#F6B432] non-italic font-bold text-[24px] leading-[29px] ">
            Newsletter
          </span>
          <div className="relative mt-[10px] xl:w-[271px] lg:w-[271px] md:w-[230px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-[16px]">
            <input
              type="email"
              className="border-[1px] border-[#F6B432] outline-0 rounded-[10px] w-[100%] h-[39px] pl-[5px] bg-black text-white "
              placeholder="Enter Your Email"
            />
            <button
              className="absolute top-[4px] right-[5px] bg-[#F6B432] border-0 px-[15px] py-[7px] rounded-[9px] font-['Montserrat'] non-italic font-[700] text-[14px] leading-[17px] "
              type="submit"
            >
              submit
            </button>
          </div>
          <div className="mt-[31px] mb-[7px] font-['Montserrat'] non-italic font-normal text-[18px] text-white leading-[22px]">
            Join Us On Social
          </div>
          <div className="flex mt-[7px] xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center">
            <span>
              <FaFacebook className="text-[#F6B432] text-[35px] mr-[16px]" />
            </span>
            <span>
              <FaTelegram className="text-[#F6B432] text-[35px] mr-[16px]" />
            </span>
            <span className="p-[7px] bg-[#F6B432] rounded-[50%] mr-[16px]">
              <FaTwitter className="text-black text-[22px]" />
            </span>
            <span className="p-[7px] bg-[#F6B432] rounded-[50%]">
              <FaDiscord className="text-black text-[22px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
