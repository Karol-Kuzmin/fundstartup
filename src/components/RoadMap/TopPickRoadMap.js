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

const TopPickRoadMap = (props) => {
    const classes = useStyles();    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const topPick_data = [
        {
          img_url: "/assets/images/gems_b.png",
          title: "GEMS",
          content:
            "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse.",
        },
        {
          img_url: "/assets/images/gems_b.png",
          title: "GEMS",
          content:
            "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse.",
        },
        {
          img_url: "/assets/images/gems_b.png",
          title: "GEMS",
          content:
            "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse.",
        },
        {
          img_url: "/assets/images/gems_b.png",
          title: "GEMS",
          content:
            "ARtonar is the first opp-less  3D & Augmnented reality NFT generation platform for the metaverse.",
        },
      ];

    return (
        <Box className={clsx(classes.root,'mt-[50px]')} id='RoadMap'>
            <Swiper 
                // slidesPerView={!isMobile ? 4 : 3}
                breakpoints={{
                    1280: {
                    //   width: 200,
                      slidesPerView: 4,
                    },
                    1024:{
                        // width: 500,
                        slidesPerView:3,
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
                    nextEl:".js-prev4",
                    prevEl:".js-next4",
                }}
            >
                {
                    topPick_data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={classes.swiperSlide}>
                                <TopPickCard topPick={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    )
}

export default TopPickRoadMap;