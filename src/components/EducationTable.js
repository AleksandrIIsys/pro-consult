import React, { useContext, useState } from "react";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../index";
import { useMediaQuery } from "react-responsive";

const EducationTable = ({ row, data }) => {
    const { locale } = useContext(Context);
    const { courses } = useContext(Context);
    const [filter, setFilter] = useState(courses);
    const isMobile = useMediaQuery({ query: "(max-width:480px)" });
    const handleFilterName = (e) => {
        console.log(courses);
        const { value } = e.target;
        setFilter(courses.filter((i) => i.name.toLowerCase().includes(value)));
    };
    const handleFilterDate = (e) => {
        // console.log(e.target.value);
        // const date = Date.parse(e.target.value.toString());
        // console.log(date);
        // setFilter(
        //     data.filter(
        //         (i) =>
        //             i["date"].getDay() === date.getDay() ||
        //             i["date"].getMonth() === date.getMonth() ||
        //             i["date"].getFullYear() === date.getFullYear()
        //     )
        // );
        // console.log(filter);
    };
    return (
        <div className={isMobile ? "" : "container"}>
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
                                    href={`/education/${key}`}
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
                            placeholder={"Enter name of course"}
                        />
                        <div>
                            <input
                                type={"text"}
                                onChange={(e) => handleFilterDate(e)}
                                style={{ width: "100%" }}
                                placeholder={"Enter date of course"}
                            />
                        </div>
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
                                        href={`/education/${key}`}
                                        className={"slide_button"}
                                    >
                                        <div>apply</div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default EducationTable;
