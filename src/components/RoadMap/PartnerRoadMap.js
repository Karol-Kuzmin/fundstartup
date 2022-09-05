import { Box, useTheme } from "@mui/material";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
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

const PartnerRoadMap = (props) => {
    const classes = useStyles();    
    const theme = useTheme();

      const partners_data = [
        {
          img_url: "/assets/images/alturanft.png",
        },
        {
          img_url: "/assets/images/apeswap.png",
        },
        {
          img_url: "/assets/images/asteroid.png",
        },
        {
          img_url: "/assets/images/basic_capital2.png",
        },
      ];

    return (
        <Box className={clsx(classes.root, 'mt-[50px]')} id='RoadMap'>
            <Swiper 
                breakpoints={{
                    1280: {
                      slidesPerView: 4,
                    },
                    1024:{
                        slidesPerView:3,
                    },
                    768:{
                        slidesPerView:2
                    }
                }}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                modules={[Navigation]}
                className={classes.swiperBox}
                effect="fade"
                navigation = {{
                    nextEl:".js-prev3",
                    prevEl:".js-next3",
                }}
            >
                {
                    partners_data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={classes.swiperSlide}>
                                <img src={item.img_url} alt="partner image"/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    )
}

export default PartnerRoadMap;