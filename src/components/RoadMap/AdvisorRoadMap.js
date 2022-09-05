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
import HomeAdvisorCard from "../AdvisorCard/HomeAdvisorCard";

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

const AdvisorRoadMap = (props) => {
    const classes = useStyles();    
    const theme = useTheme();

      const advisors_data = [
        {
          img_url: "/assets/images/ali2.png",
          name: "Ali karabey",
          content: "Strategic Advisor And Co-Funder at 212",
        },
        {
          img_url: "/assets/images/alex2.png",
          name: "Alex Becker",
          content: "Strategic Advisor And Co-Funder at 212",
        },
        {
          img_url: "/assets/images/james2.png",
          name: "James Matis",
          content: "Strategic Advisor And Co-Funder at 212",
        },
        {
          img_url: "/assets/images/john2.png",
          name: "John Hoover",
          content: "Strategic Advisor And Co-Funder at 212",
        },
      ];

    return (
        <Box className={clsx(classes.root, 'px-[50px]', 'mt-[50px]')} id='RoadMap'>
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
                    nextEl:".js-prev2",
                    prevEl:".js-next2",
                }}
            >
                {
                    advisors_data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={classes.swiperSlide}>
                                <HomeAdvisorCard advisor={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    )
}

export default AdvisorRoadMap;