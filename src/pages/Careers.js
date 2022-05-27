import React, { useContext } from "react";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css";
import { observer } from "mobx-react-lite";
import Breadcrumbs from "../components/Breadcrumbs";
import { useMediaQuery } from "react-responsive";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Careers = observer(() => {
    const {careers,locale} = useContext(Context);
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    return (
        <div>
            <div className={"center_container"}>
                <div className={"container"}>
                    <Breadcrumbs />
                    <div className={"about__title"}><FormattedMessage id={"open_position"}/></div>
                    <Swiper
                        grid={{ rows: 3 }}
                        spaceBetween={20}
                        style={{
                            height: `${isMobile ? 830 : 1300}px`,
                            marginTop: "20px",
                        }}
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination]}
                    >
                        {careers.getCareers().map((value, index) => (
                            <SwiperSlide
                                className={"careers-slide"}
                                key={index}
                            >
                                <div style={{ margin: "20px" }}>
                                    <div className={"careers-box"}>
                                        <span>{new Date(value.date).toLocaleDateString(locale)}</span>
                                    </div>
                                </div>
                                <div className={"careers-text"}>
                                    <div className="headtext">
                                        {value.title[locale.getLocale()]}
                                    </div>
                                    <p>Requirements:</p>
                                    <p>
                                        {value.description[locale.getLocale()]}
                                    </p>
                                    <p>work schedule: {value.workSchedule[locale.getLocale()]}</p>
                                    <div>
                                        <span>salary : {value.salary[locale.getLocale()]}</span>
                                        <div className={"about__item__btn"}>
                                            <NavLink to={"/contacts"}><FormattedMessage id={"contact_us"}/></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {new Array(3 - (careers.getCareers().length % 4))
                            .fill("")
                            .map((value, key) => (
                                <SwiperSlide
                                    className={"careers-slide"}
                                    key={key}
                                ></SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
});

export default Careers;
