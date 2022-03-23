import React from 'react';
import FooterTest from "../Models/FooterTest";
import {HashLink} from "react-router-hash-link";
import {Link, NavLink, Outlet} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";

const EducationCard = () => {
    const EducationPages = [
        {title: "About the event", link: ""},
        {title: "Teachers", link: "teachers"},
        {title: "Feedbacks", link: "feedback"},
    ]
    const breadcrumbs = useBreadcrumbs();
    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: 'center',
                marginTop: '20px',
                flexDirection: "column"
            }}>
                <div className="container">
                    <Breadcrumbs/>
                    <h4>Trainings, seminars, courses of the Center for Education of Engineers Consultants</h4>
                    <h4>Course name: <b>"The practice of investment projects in the Republic of Uzbekistan."</b></h4>
                <div style={{width: "100%", borderTop: "1px solid #15337e", borderBottom: "1px solid #15337e"}}>
                    <div className="menu__choose">
                        {EducationPages.map((value, key) =>
                            <Link to={value.link}>
                                <div key={key} className={"choosing_element"}> {value.title}  </div>
                            </Link>
                        )}
                    </div>
                </div>
                </div>

                <Outlet></Outlet>
                <div className={"container"}>
                    <div>
                        <h1 style={{fontWeight: "600"}}>OTHER COURSES</h1>
                        <div className={"slide_news"}>
                            <div>№</div>
                            <div>Name of news</div>
                            <div>Date of news</div>
                        </div>
                        <Swiper
                            style={{height: "250px", marginTop: "10px"}}
                            spaceBetween={10}
                            grid={{rows: 3,}}
                            pagination={{clickable: true}}
                            modules={[Grid, Pagination]}
                        >
                            {['', '', '', '', '', '', '', '', '', '', '', ''].map(((value, key) =>
                                <SwiperSlide className={"slide_news"}>
                                    <div>{key + 1}</div>
                                    <div>Advanced training course "The practice of investment projects in the Republic of
                                        Uzbekistan.
                                    </div>
                                    <div>15 aprel 2022</div>
                                    <div style={{padding: "10px 5px 10px 5px"}}>
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: "10px",
                                            background: "#15337e"
                                        }}><a style={{color: "white"}} href={`/what-we-do/education/${key}`}>read news</a></div>
                                    </div>
                                </SwiperSlide>))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <FooterTest/>
        </div>
    );
};

export default EducationCard;