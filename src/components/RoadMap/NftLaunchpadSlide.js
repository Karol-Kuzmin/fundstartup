import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
import UpcomeingCard from "../UpcomingCard/UpcomeingCard";
import "tw-elements";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  swiperBox: {
    width: "100%",
    height: "100%",
    paddingLeft: 0,
    paddingRight: 0,
  },
  swiperSlide: {
    borderLeft: "0px solid",
  },
  border: {
    position: "absolute",
    top: 200,
  }
}));

const NftLaunchpadSlide = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const nftLaunchpad_data = [
    {
      img_url: "/assets/images/upcoming_card.png",
      title: "Reval1",
      content:
        "You will be able to find the general information regarding the NFT projects here",
    },
    {
      img_url: "/assets/images/upcoming_card.png",
      title: "Reval1",
      content:
        "You will be able to find the general information regarding the NFT projects here",
    },
    {
      img_url: "/assets/images/upcoming_card.png",
      title: "Reval1",
      content:
        "You will be able to find the general information regarding the NFT projects here",
    },
    {
      img_url: "/assets/images/upcoming_card.png",
      title: "Reval1",
      content:
        "You will be able to find the general information regarding the NFT projects here",
    },
  ];

  return (
    <Box className={clsx(classes.root, "mt-[50px]")} id="RoadMap">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        // navigation={true}
        modules={[Navigation,Pagination]}
        className={classes.swiperBox}
        effect="fade"
        speed= {1500}
        navigation={{
          nextEl: ".js-prev",
          prevEl: ".js-next",
        }}
        pagination= {{
            el: '.swiper-pagination',
        // dynamicBullets: true,
         clickable: true,
        }}
      >
        {nftLaunchpad_data.map((item, index) => {
          return (
            <SwiperSlide key={index} className={classes.swiperSlide}>
              <div className="lg:flex">
                <img
                  alt=""
                  src={item.img_url}
                  className="lg:w-[34%] h-auto lg:ml-[7%] sm:mx-auto"
                ></img>
                <div className="lg:ml-[4.4%]  sm:mx-auto lg:w-[45%] sm:w-[70%] lg:text-start sm:text-center">
                  <p className="font-bold text-[24px] leading-[28px] text-white mt-[10px]">
                    0/0 &nbsp;<sapn className="text-yellow-dark">raised</sapn>
                  </p>
                  <p className="h-[50px] font-bold text-[43px] leading-[50px] text-white mt-[27px]">
                    {item.title}
                  </p>
                  <p className="w-[100%] h-[56px] font-normal text-[24px] leading-[28px] text-white mt-[27px]">
                    {item.content}
                  </p>
                  <div className="flex mt-[81px] lg:justify-start sm:justify-center">
                    <button className="w-[120px] h-[39px] bg-yellow-dark rounded-[5px] flex justify-center items-center">
                      <p className="w-[80px] h-[19px] font-bold text-[16px] leading-[19px]">
                        View More
                      </p>
                    </button>
                    <div className="flex ml-[25px] items-center">
                      <img
                        alt="bag"
                        src="./assets/images/strongbox.png"
                        className="w-[17px] h-[17px]"
                      ></img>
                      <p className="w-[122px] h-[19px] font-bold text-[16px] leading-[19px] text-white ml-[5px]">
                        Awaiting Reveal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
      <div className="swiper-pagination"></div>
    </Box>
  );
};

export default NftLaunchpadSlide;
