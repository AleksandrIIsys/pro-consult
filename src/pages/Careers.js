import React, { useContext } from "react";
import { Context } from "../index";
import { Grid, Mousewheel, Pagination } from "swiper";
import FooterTest from "../Models/FooterTest";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css";
import { observer } from "mobx-react-lite";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import {useMediaQuery} from "react-responsive";

const Careers = observer(() => {
    const isMobile = useMediaQuery({query:"(max-width:480px)"})
    return (
        <div>
            <img src={"/image/banner.png"} style={{ width: "100%" }} />
            <div className={"center_container"}>
                <div className={"container"}>
                    <Breadcrumbs />
                    <div className={"about__title"}>OPEN POSITION</div>
                    <Swiper
                        grid={{ rows: 3 }}
                        spaceBetween={20}
                        style={{ height: `${isMobile ? 830 :1300}px`, marginTop: "20px" }}
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination]}
                    >
                        {["", "", "", ""].map((value, index) => (
                            <SwiperSlide
                                className={"careers-slide"}
                                key={index}
                            >
                                <div style={{ margin: "20px" }}>
                                    <div className={"careers-box"}>
                                        <span>18.03.2022</span>
                                    </div>
                                </div>
                                <div className={"careers-text"}>
                                    <div className="headtext">
                                        Project Manager vacancy
                                    </div>
                                    <p>Requirements:</p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                    </p>
                                    <p>work schedule: 5 days a week 8 hours</p>
                                    <div>
                                        <span>salary : 15000000 usd</span>
                                        <div className={"about__item__btn"}>
                                            <a href={""}>contact us</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
});

export default Careers;
