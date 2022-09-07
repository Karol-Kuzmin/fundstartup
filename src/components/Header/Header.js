import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [languageBar, setLanguageBar] = useState(true);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  },[location]);
  return (
    <div className="flex justify-center pt-[33px]">
      <div className="nav flex  w-[97%]">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header ">
          <div className="nav-title">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/images/fundstartup_logo.png"
                alt="FundStart Up"
              />
            </Link>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links flex items-center h-[53px] flex-row 2xl:gap-7 gap-4 2xl:ml-[100px] xl:ml-[2%] ">
          <Link
            to="/fund"
            className={" font-normal font-Mont text-[19px] leading-[22px]" + (url ==="/fund"?" active":"")}
            aria-current="page">
            IMO Launchpad
          </Link>
          <Link
            to="/nft_launchpad"
            className={" font-normal font-Mont text-[19px] leading-[22px]" + (url ==="/nft_launchpad"?" active":"")}>
            NFT Launchpad
          </Link>
          <Link
            to="/staking"
            className={"font-normal font-Mont text-[19px] leading-[22px]" + (url ==="/staking"?" active":"")}>
            Staking/Farming
          </Link>
          <Link
            to="/claim"
            className={"font-normal font-Mont text-[19px] leading-[22px]" + (url ==="/claim"?" active":"")}>
            Claims
          </Link>
          <Link
            to="/fnfts"
            className={"font-normal font-Mont text-[19px] leading-[22px]" + (url ==="/fnfts"?" active":"")}>
            FNFTS
          </Link>

          <button className="bg-[#F6B432] w-[179px] h-[53px] rounded-[5px] 2xl:ml-[200px] flex justify-center items-center">
            <img alt="" src="/assets/images/login_register.png" />
          </button>

          <button className="bg-[#F6B432] w-[122px] h-[53px] flex justify-center items-center rounded-[5px]">
            <img src="/assets/images/wallet.png" alt="wallet" />
          </button>

          <div className="c">
            <div className="dd">
              <div className="dd-a">
                <span className="flex justify-center items-center">
                  EN
                  <FaAngleDown className="text-[#F6B432]" />
                </span>
              </div>
              <input type="checkbox" />
              <div className="dd-c">
                <ul>
                  <li>
                    <Link to="#">
                      <span>
                        ENGLISH
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        TURKISH
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>RUSSIAN</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>PORTUGUESE</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>SPANISH</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>FRANCH</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
