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
import {observer} from "mobx-react-lite";
import {HashLink} from "react-router-hash-link";

const NewsTable = observer(({ row, data }) => {
    const { news, locale } = useContext(Context);
    const currentLocale = locale.getLocale()
    const [filter, setFilter] = useState(news.getNews());
    const handleFilterName = (e) => {
        const { value } = e.target;
        setFilter(news.getNews().filter((i) => i.title[locale.getLocale()].toLowerCase().includes(value)));

    };
    const [date, setDate] = useState(null);
    const handleFilterDate = (e) => {
        setDate(e)
        if(e){
            setFilter(news.getNews().filter((i) => new Date(i.date).getTime() === e.getTime()));
        }else {
            setFilter(news.getNews())
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
                                <HashLink
                                    to={`/news/${key}#tut`}
                                    className={"slide_activity"}
                                >
                                    <div className={"slide_news"}>
                                        <div id={"date"}>
                                            {new Date(value.date).toLocaleDateString(
                                                locale
                                            )}
                                        </div>
                                        <div> <span>{value.title[currentLocale]}</span></div>
                                    </div>
                                </HashLink>
                            </SwiperSlide>
                        ))}
                        {new Array(row - (news.getNews().length % row))
                            .fill("")
                            .map((value, key) => (
                                <SwiperSlide
                                    className={"slide_news"}
                                    key={key}
                                ></SwiperSlide>
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
                            placeholder={messageTable[currentLocale].enon}
                        />
                        <DatePicker
                            selected={date}
                            onChange={(date) => handleFilterDate(date)}
                            withPortal
                            dateFormat={"dd.MM.yyyy"}
                            closeOnScroll={true}
                            isClearable
                            placeholderText={messageTable[currentLocale].edon}
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
                                <div><span>{value.title[currentLocale]}</span></div>
                                <div id={"date"}>
                                    {new Date(value.date).toLocaleDateString(currentLocale)}
                                </div>
                                <div style={{ padding: "10px 5px 10px 5px" }}>
                                    <HashLink
                                        className={"slide_button"}
                                        to={`/news/${key}#tut`}
                                    >
                                        <div><FormattedMessage id={"btn_news"}/></div>
                                    </HashLink>
                                </div>
                            </SwiperSlide>
                        ))}
                        {new Array(row - (news.getNews().length % row))
                            .fill("")
                            .map((value, key) => (
                                <SwiperSlide
                                    className={"slide_news"}
                                    key={key}
                                ></SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            )}
            </IntlProvider>
            </div>


    );
});

export default NewsTable;
