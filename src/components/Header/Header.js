import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [languageBar, setLanguageBar] = useState(true);

  //   const resetThenSet = (id, key) => {
  //     let temp = JSON.parse(JSON.stringify(languages[key]));
  //     temp.forEach((item) => (item.selected = false));
  //     temp[id].selected = true;
  //     setLanguages((prevState) => ({ ...prevState, key: `${temp}` }));
  //   };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="!pt-[52px]"
      >
        <Navbar.Brand>
          <Image
            src="/assets/images/fundstartup_logo.png"
            className="ml-[20px] 2xl:ml-[40px] 3xl:ml-[60px]"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="items-center">
            <Link
              to="#"
              className="text-white no-underline ml-[15px] font-['Montserrat'] non-italic font-normal text-[16px] leading-[1.3125rem]"
            >
              IMO Launchpad
            </Link>
            <Link
              to="#"
              className="text-white no-underline ml-[25px] 2xl:ml-[50px] 3xl:ml-[100px] font-['Montserrat'] non-italic font-normal text-[16px] leading-[1.3125rem]"
            >
              NFT Launchpad
            </Link>
            <Link
              to="#"
              className="text-white no-underline ml-[25px] 2xl:ml-[50px] 3xl:ml-[100px] font-['Montserrat'] non-italic font-normal text-[16px] leading-[1.3125rem]"
            >
              Staking/Farming
            </Link>
            <Link
              to="#"
              className="text-white no-underline ml-[25px] 2xl:ml-[50px] 3xl:ml-[100px] font-['Montserrat'] non-italic font-normal text-[16px] leading-[1.3125rem]"
            >
              Claims
            </Link>
            <Link
              to="#"
              className="text-white no-underline ml-[25px] 2xl:ml-[50px] 3xl:ml-[100px] font-['Montserrat'] non-italic font-normal text-[16px] leading-[1.3125rem]"
            >
              FNTS
            </Link>
            <button className="bg-[#F6B432] ml-[25px] 2xl:ml-[50px] 3xl:ml-[100px] pt-[15px] pb-[15px] pr-[7px] pl-[7px] rounded-[5px]">
              <Image src="/assets/images/login_register.png" />
            </button>
            <button className="bg-[#F6B432] ml-[12px] 2xl:ml-[24px] 3xl:ml-[36px] pt-[15px] pb-[15px] pr-[7px] pl-[7px] rounded-[5px]">
              <Image src="/assets/images/wallet.png" />
            </button>
            {/* <Dropdown
              title="EN"
              list={languages.action}
              resetThenSet={resetThenSet}
            /> */}
            <div
              className="text-white dropdown"
              onClick={() => setLanguageBar(false)}
            >
              <span className="relative flex items-center ml-[9px] 2xl:ml-[18px] 3xl:ml-[27px]">
                EN
                <FaAngleDown className="text-[#F6B432]" />
              </span>
              <div class="dropdown-content">
                <Link to="#">Link 1</Link>
                <Link to="#">Link 2</Link>
                <Link to="#">Link 3</Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
