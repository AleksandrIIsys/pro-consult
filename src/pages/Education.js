import React, { useContext } from "react";
import { Context } from "../index";
import { Grid, Mousewheel, Pagination } from "swiper";
import FooterTest from "../Models/FooterTest";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import MainSlider from "../Models/MainSlider";

const Education = () => {
    const { news } = useContext(Context);
    const breadcrumbs = useBreadcrumbs();
    return (
        <div>
            <MainSlider></MainSlider>
            <div className={"center_container"}>
                <div className={"container"}>
                    <Breadcrumbs />
                    <div className={"about__title"}>Education</div>
                    <div className={"education__title"}>
                        <div className={"education__logo"}>
                            <div>
                                CE EC
                            </div>
                            <div>
                                Centre for Education of Engineers and
                                Consultants
                            </div>
                        </div>
                        <div className={"education__text"}>
                            <span style={{ color: "#15337e" }}>
                                "An investment in knowledge pays the best
                                interest" (B.Franklin)
                            </span>
                            <div style={{ lineHeight: "normal" }}>
                                PCC believes that each specialist must have an
                                opportunity to get advanced studies and to
                                develop further skills and experience.
                                <br /> Therefore, PCC has created the "Centre
                                for Education of Engineers and Consultants"
                                (CEEC) where young specilists and specialists
                                with background can expand their knowledge,
                                skills and experience.
                                <br /> CEEC develops and provides its own
                                Certified courses and trainings, organizes
                                seminars, Forums and Conferences in
                                collaboration with international organizations,
                                NGOs' and companies.
                            </div>
                            <span style={{ color: "#15337e" }}>
                                “CEEC opens the door, but you must enter by
                                yourself”!
                            </span>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <EducationTable
                            row={5}
                            data={[
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                            ]}
                        />
                        {/*<Swiper*/}
                        {/*    style={{height: "450px",marginTop:"10px"}}*/}
                        {/*    spaceBetween={10}*/}
                        {/*    grid={{rows: 6,}}*/}
                        {/*    pagination={{clickable: true}}*/}
                        {/*    modules={[Grid, Pagination]}*/}
                        {/*>*/}
                        {/*    {.map(((value, key) =>*/}
                        {/*        <SwiperSlide className={"slide_news"}>*/}
                        {/*            <div>{key+1}</div>*/}
                        {/*            <div>Advanced training course "The practice of investment projects in the Republic of Uzbekistan.</div>*/}
                        {/*            <div>4 apr- 15apr 2022</div>*/}
                        {/*            <div style={{padding:"10px 5px 10px 5px"}}><div style={{width:'100%',height:'100%',borderRadius:"10px",background:"#15337e"}}><a style={{color:"white"}} href={`/education/${key}`}>apply</a></div>*/}
                        {/*            </div>*/}
                        {/*        </SwiperSlide>))}*/}
                        {/*</Swiper>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
