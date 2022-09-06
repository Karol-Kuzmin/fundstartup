import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
import TopPickCard from "../TopPickCard/TopPickCard";
import "tw-elements";
import CompletePoolCard from "../CompletePoolCard/CompletePoolCard";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    swiperBox: {
        width: '100%',
        height: '100%',
        paddingLeft: 0,
        paddingRight: 0,
    },
    swiperSlide: {
        borderLeft: '0px solid',
    },
    border: {
        position: 'absolute',
        top: 200,
    }
}));

const CompletePoolRoadMap = (props) => {
    const classes = useStyles();    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const completePool_data = [
        {
          img_url: "/assets/images/amazy_b.png",
          title: "Amazy",
          content:
            " AMAZY is a challenging fitness app with game-fi features. You wear trendy virtual sneakers and take a walk or jog to earn AMT tokens.",
          totalRaise: 237497.44,
          maximum: 1939.85,
        },
        {
          img_url: "/assets/images/amazy_b.png",
          title: "Amazy",
          content:
            " AMAZY is a challenging fitness app with game-fi features. You wear trendy virtual sneakers and take a walk or jog to earn AMT tokens.",
          totalRaise: 237497.44,
          maximum: 1939.85,
        },
        {
          img_url: "/assets/images/amazy_b.png",
          title: "Amazy",
          content:
            " AMAZY is a challenging fitness app with game-fi features. You wear trendy virtual sneakers and take a walk or jog to earn AMT tokens.",
          totalRaise: 237497.44,
          maximum: 1939.85,
        },
      ];

    return (
        <Box className={clsx(classes.root,'mt-[50px]')} id='RoadMap'>
            <Swiper 
                // slidesPerView={!isMobile ? 4 : 3}
                breakpoints={{
                    1280: {
                    //   width: 200,
                      slidesPerView: 3,
                    },
                    1024:{
                        // width: 500,
                        slidesPerView:2,
                    },
                    768:{
                        slidesPerView:2
                    }
                }}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                // navigation={true}
                modules={[Navigation]}
                className={classes.swiperBox}
                effect="fade"
                navigation = {{
                    nextEl:".js-prev5",
                    prevEl:".js-next5",
                }}
            >
                {
                    completePool_data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={classes.swiperSlide}>
                                <CompletePoolCard completePoolData={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    )
}

export default CompletePoolRoadMap;