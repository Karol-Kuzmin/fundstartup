import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [mobileIconFlag, setMobileIconFlag] = useState(false);
  const [languageBar, setLanguageBar] = useState(true);

  const handleMoibleIcon = () => {
    !mobileIconFlag ? setMobileIconFlag(true) : setMobileIconFlag(false);
  };
  return (
    <div>
      <header>
        <nav className="border-gray-200 px-4 lg:px-[39px] py-[3.25rem] ">
          <div
            className={`flex justify-between items-center mx-auto ${
              !mobileIconFlag ? "" : "flex-wrap"
            }`}>
            <div className=" justify-center flex">
              <Link to="/" className="flex items-center">
                <img
                  src="/assets/images/fundstartup_logo.png"
                  alt="FundStart Up"
                />
              </Link>
            </div>
            <div className="flex md:justify-center justify-center md:mt-[0px] mt-[20px]">
              <div className="flex items-center lg:order-2">
                <button className="bg-[#F6B432] pt-[15px] pb-[15px] pr-[7px] pl-[7px] rounded-[5px]">
                  <img src="/assets/images/login_register.png" />
                </button>
                <button className="bg-[#F6B432] ml-[12px]  pt-[15px] pb-[15px] pr-[7px] pl-[7px] rounded-[5px]">
                  <img src="/assets/images/wallet.png" alt="wallet" />
                </button>
                <div
                  className="text-white dropdown"
                  onClick={() => setLanguageBar(false)}>
                  <span className="relative flex items-center ml-[9px] 2xl:ml-[18px] 3xl:ml-[27px]">
                    EN
                    <FaAngleDown className="text-[#F6B432]" />
                  </span>
                  <div class="dropdown-content">
                    {/* <Link to="#">Link 1</Link>
                <Link to="#">Link 2</Link>
                <Link to="#">Link 3</Link> */}
                  </div>
                </div>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                  onClick={() => handleMoibleIcon()}>
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div
                className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
                  !mobileIconFlag ? "hidden" : ""
                }`}
                id="mobile-menu-2">
                <ul
                  className={`flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0  ${
                    !mobileIconFlag ? "items-center" : ""
                  }`}>
                  <li>
                    <Link
                      to="/fund"
                      className="block py-2 pr-4 pl-3  border-b border-gray-100 lg:hover:bg-transparent md:hover:bg-gray-50/[0.1] lg:border-0 text-white  no-underline  ml-[20px] md:ml-0 font-['Montserrat'] non-italic font-normal hover:font-bold text-[16px] leading-[1.3125rem]"
                      aria-current="page">
                      IMO Launchpad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/nft_lp"
                      className="block   border-b border-gray-100 lg:hover:bg-transparent md:hover:bg-gray-50/[0.1] lg:border-0 text-white  no-underline  ml-[20px] md:ml-0 font-['Montserrat'] non-italic font-normal hover:font-bold text-[16px] leading-[1.3125rem]">
                      NFT Launchpad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/staking"
                      className="block  border-b border-gray-100 lg:hover:bg-transparent md:hover:bg-gray-50/[0.1] lg:border-0 text-white  no-underline  ml-[20px] md:ml-0 font-['Montserrat'] non-italic font-normal hover:font-bold text-[16px] leading-[1.3125rem]">
                      Staking/Farming
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/claim"
                      className="block   border-b border-gray-100 lg:hover:bg-transparent md:hover:bg-gray-50/[0.1] lg:border-0 text-white  no-underline  ml-[20px] md:ml-0 font-['Montserrat'] non-italic font-normal hover:font-bold text-[16px] leading-[1.3125rem]">
                      Claims
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/fnfts"
                      className="block pr-4   border-b border-gray-100 lg:hover:bg-transparent md:hover:bg-gray-50/[0.1] lg:border-0 text-white  no-underline  ml-[20px] md:ml-0 font-['Montserrat'] non-italic font-normal hover:font-bold text-[16px] leading-[1.3125rem]">
                      FNFTS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
