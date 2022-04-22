import React from "react";
import { SwiperSlide } from "swiper/react";

const SlideAbout = ({ value, locale, key }) => {
    return (
        <>
            <div>
                <img src={value.image} />
            </div>
            <div>{value.name[locale.getLocale()]}</div>
            <div>{value.country[locale.getLocale()]}</div>
            <div className={"slide_partner_text"}>
                {value.description[locale.getLocale()]}
            </div>
        </>
            );
};

export default SlideAbout;