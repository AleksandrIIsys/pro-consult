import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";
import {useMediaQuery} from "react-responsive";
import { useOutletContext } from "react-router";

const Feedback = () => {
    const isMobile = useMediaQuery({query:"(max-width:480px)"})
    const [value,locale] = useOutletContext()
    if(value === null)
        return <></>
    return (
        <div className={"container"}>
            <Swiper
                grid={{rows: 3}}
                spaceBetween={20}
                style={{height:"670px",marginTop:"20px"}}
                pagination={{clickable: true}}
                modules={[Grid, Pagination]}

            >
                {value.feedback.map(((value, index) =>
                    <SwiperSlide className={"feedback__slide"} key={index}>
                        <div className={"feedback__box"}>
                            <div>{index+1}
                            </div>
                            <span>{new Date(value.date).toLocaleDateString(locale.getLocale())}</span>
                        </div>
                        <div className={"feedback__text"}>
                            <q>{value.text[locale.getLocale()]}</q>
                            <div >{value.name[locale.getLocale()]}</div>
                            <div >{value.position[locale.getLocale()]}</div>

                        </div>
                    </SwiperSlide>))}

            </Swiper>
        </div>
    );
};

export default Feedback;