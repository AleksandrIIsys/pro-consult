import React, { useContext, useState } from "react";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../index";
import { useMediaQuery } from "react-responsive";
import {LOCALES} from "../i18n/Locale";
import {FormattedMessage, IntlProvider} from "react-intl";
import DatePicker from "react-datepicker";
import {messageTable} from "../i18n/MessageTable";
import {observer} from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";

const EducationTable = observer(({ row, data }) => {
    const { locale } = useContext(Context);
    const { courses } = useContext(Context);
    const [filter, setFilter] = useState(courses.getCourse());
    const isMobile = useMediaQuery({ query: "(max-width:480px)" });
    const handleFilterName = (e) => {
        const { value } = e.target;
        setFilter(courses.filter((i) => i.title[locale.getLocale()].toLowerCase().includes(value)));
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
    return (
        <div className={isMobile ? "" : "container"}>
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
                            style={{
                                height: `${row * 55}px`,
                                marginTop: "10px",
                            }}
                            spaceBetween={10}
                            grid={{ rows: row }}
                            pagination={{ clickable: true }}
                            modules={[Grid, Pagination]}
                        >
                            {filter.map((value, key) => (
                                <SwiperSlide
                                    style={{ height: "40px", width: "320px" }}
                                >
                                    <NavLink
                                        to={`/education/${key+1}`}
                                        className={"slide_activity"}
                                    >
                                        <div className={"slide_news"}>
                                            <div id={"date"}>
                                                {new Date(value.dateStart).toLocaleDateString(locale.getLocale())}
                                            </div>
                                            <div>{value.title[locale.getLocale()]}</div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            ))}
                            {new Array(row - (courses.getCourse().length % row))
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
                                placeholder={
                                    messageTable[locale.getLocale()].enoc
                                }
                            />
                            <DatePicker
                                selected={date}
                                onChange={(date) => handleFilterDate(date)}
                                withPortal
                                dateFormat={"dd.MM.yyyy"}
                                closeOnScroll={true}
                                isClearable
                                placeholderText={
                                    messageTable[locale.getLocale()].edoc
                                }
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
                                    <div>{value.title[locale.getLocale()]}</div>
                                    <div id={"date"}>
                                        {new Date(value.dateStart).toLocaleDateString(locale.getLocale())}
                                    </div>
                                    <div
                                        style={{ padding: "10px 5px 10px 5px" }}
                                    >
                                        <Link
                                            to={`/education/${value.id}`}
                                            className={"slide_button"}
                                        >
                                            <div>
                                                <FormattedMessage id={"btn"} />
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {new Array(row - (courses.getCourse().length % row))
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

export default EducationTable;
