import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import SlideAbout from "./SlideAbout";
import { useMediaQuery } from "react-responsive";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const ClientsSlider = observer(() => {
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    const { clients, locale } = useContext(Context);

    return (
        <div className="block__text">
            <div className="about__main__title">
                <FormattedMessage id={"members_title"} />
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
                    {clients.getClients().map((value, key) => (
                        <SwiperSlide className={"slide_partner"}>
                            <SlideAbout
                                value={value}
                                key={key}
                                locale={locale}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div>
                    <div className={"slide_partner"}>
                        <div>
                            <FormattedMessage id={"logo_table"} />
                        </div>
                        <div>
                            <FormattedMessage id={"member_table"} />
                        </div>
                        <div>
                            <FormattedMessage id={"country_table"} />
                        </div>
                        <div>
                            <FormattedMessage id={"member_status"} />
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
                        {clients.getClients().map((value, key) => {
                            return (
                                <SwiperSlide className={"slide_partner"}>
                                    <SlideAbout
                                        value={value}
                                        locale={locale}
                                        key={key}
                                    />
                                </SwiperSlide>
                            );
                        })}
                        {new Array(5 - (clients.getClients().length % 5))
                            .fill("")
                            .map((value, key) => (
                                <SwiperSlide
                                    className={"slide_partner"}
                                    key={key}
                                ></SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
});

export default ClientsSlider;