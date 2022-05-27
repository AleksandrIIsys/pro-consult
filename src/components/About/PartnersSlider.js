import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import SlideAbout from "./SlideAbout";
import { useMediaQuery } from "react-responsive";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const PartnersSlider = observer(() => {
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    const {partners, locale} = useContext(Context)

    return (
        <div className="block__text">
            <div className="about__main__title">
                <FormattedMessage id={"partners_title"} />
            </div>
            {isMobile ? (
                <Swiper
                    style={{
                        height: "150px",
                        marginTop: "5px",
                    }}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                >
                    {partners
                        .getPartners()
                        .map((value, key) => (
                            <SwiperSlide
                                className={"slide_partner"}
                            >
                                <SlideAbout
                                    value={value}
                                    locale={locale}
                                    key={key}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            ) : (
                <div>
                    <div className={"slide_partner"}>
                        <div>
                            <FormattedMessage
                                id={"logo_table"}
                            />
                        </div>
                        <div>
                            <FormattedMessage
                                id={"partners_table"}
                            />
                        </div>
                        <div>
                            <FormattedMessage
                                id={"country_table"}
                            />
                        </div>
                        <div>
                            <FormattedMessage
                                id={"specialization_table"}
                            />
                        </div>
                    </div>
                    <Swiper
                        style={{
                            height: "450px",
                            marginTop: "5px",
                        }}
                        spaceBetween={5}
                        grid={{ rows: 5 }}
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination]}
                    >
                        {partners
                            .getPartners()
                            .map((value, key) => (
                                <SwiperSlide
                                    className={
                                        "slide_partner"
                                    }
                                >
                                    <SlideAbout
                                        value={value}
                                        locale={locale}
                                        key={key}
                                    />
                                </SwiperSlide>
                            ))}
                        {new Array(
                            5 -
                            (partners.getPartners().length %
                                5)
                        )
                            .fill("")
                            .map((value, key) => (
                                <SwiperSlide
                                    className={
                                        "slide_partner"
                                    }
                                    key={key}
                                ></SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
});

export default PartnersSlider;