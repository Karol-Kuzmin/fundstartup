import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {

  const [mobileIconFlag, setMobileIconFlag] = useState(false)

  const handleMoibleIcon = () => {
    setMobileIconFlag(true);
  }
  return (
    <div>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex md:justify-between items-center mx-auto ">
          <Link to="https://flowbite.com" className="flex items-center">
            <img
              src="/assets/images/fundstartup_logo.png"
              className="ml-[20px] 2xl:ml-[40px] 3xl:ml-[60px]"
            />
          </Link>

          <div
            className={`hidden items-center w-full lg:flex lg:w-auto s-expandable ${!mobileIconFlag&&"z-[999]"}` }
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-2 lg:mt-0">
              <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:p-0 dark:text-white"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link to="#" className="">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="#" className="">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="">
                  Team
                </Link>
              </li>
              <li>
                <Link to="#" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button className="bg-[#F6B432]  pt-[15px] pb-[15px] pr-[7px] pl-[7px] rounded-[5px]">
              <img src="/assets/images/login_register.png" />
            </button>
            <button className="bg-[#F6B432]  pt-[15px] pb-[15px] pr-[7px] pl-[7px] rounded-[5px]">
              <img src="/assets/images/wallet.png" />
            </button>

            <button
              data-collapse-toggle="mobile-menu-2"
            //   data-controller="mobile-menu-2"
            //   data-s-expandable-control-toggle-class="is-selected"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={()=>handleMoibleIcon}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
