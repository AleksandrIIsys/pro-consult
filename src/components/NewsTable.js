import React, {forwardRef, useContext, useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import { Context } from "../index";
import { useMediaQuery } from "react-responsive";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {messageTable} from "../i18n/MessageTable";
import {LOCALES} from "../i18n/Locale";
import {FormattedMessage, IntlProvider} from "react-intl";

const NewsTable = ({ row, data }) => {
    const { courses, locale } = useContext(Context);
    const [filter, setFilter] = useState(courses);
    const handleFilterName = (e) => {
        console.log(courses);
        const { value } = e.target;
        setFilter(courses.filter((i) => i.name.toLowerCase().includes(value)));
        console.log(data.filter((i) => i.name.toLowerCase().includes(value)));
    };
    const [date, setDate] = useState(null);
    const handleFilterDate = (e) => {
        setDate(e)
        if(e){
            setFilter(courses.filter((i) => i.date.getTime() === e.getTime()));
        }else {
            setFilter(courses)
        }

    };
    const isMobile = useMediaQuery({ query: "(max-width:480px)" });
    return (
        <div>
            <IntlProvider
                messages={messageTable[locale.getLocale()]}
                locale={locale.getLocale()}
                defaultLocale={LOCALES.ENGLISH}
            >
            {isMobile ? (
                <div>
                    <div className={"slide_news"}>
                        <div>Date</div>
                        <div>Name of news</div>
                    </div>
                    <Swiper
                        style={{ height: `${row * 55}px`, marginTop: "10px" }}
                        spaceBetween={10}
                        grid={{ rows: row }}
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination]}
                    >
                        {filter.map((value, key) => (
                            <SwiperSlide
                                style={{ height: "40px", width: "320px" }}
                            >
                                <a
                                    href={`/news/${key}`}
                                    className={"slide_activity"}
                                >
                                    <div className={"slide_news"}>
                                        <div id={"date"}>
                                            {value.date.toLocaleDateString(
                                                locale
                                            )}
                                        </div>
                                        <div>{value.name}</div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div>
                    <div className={"slide_news"}>
                        <div id={"number"}>№</div>
                        <input
                            type={"text"}
                            onChange={(e) => handleFilterName(e)}
                            placeholder={messageTable[locale.getLocale()].enon}
                        />
                        <DatePicker
                            selected={date}
                            onChange={(date) => handleFilterDate(date)}
                            withPortal
                            dateFormat={"dd.MM.yyyy"}
                            closeOnScroll={true}
                            isClearable
                            placeholderText={messageTable[locale.getLocale()].edon}
                        />
                    </div>
                    <Swiper
                        style={{
                            height: `${row * 63 + 70}px`,
                            marginTop: "10px",
                        }}
                        spaceBetween={10}
                        grid={{ rows: row }}
                        pagination={{ clickable: true }}
                        modules={[Grid, Pagination]}
                    >
                        {filter.map((value, key) => (
                            <SwiperSlide className={"slide_news"}>
                                <div id={"number"}>{key + 1}</div>
                                <div>{value.name}</div>
                                <div id={"date"}>
                                    {value.date.toLocaleDateString(locale)}
                                </div>
                                <div style={{ padding: "10px 5px 10px 5px" }}>
                                    <a
                                        className={"slide_button"}
                                        href={`/news/${key}`}
                                    >
                                        <div><FormattedMessage id={"btn_news"}/></div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            </IntlProvider>
            </div>


    );
};

export default NewsTable;
