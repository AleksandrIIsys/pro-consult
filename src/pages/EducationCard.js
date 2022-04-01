import React from 'react';
import FooterTest from "../Models/FooterTest";
import {HashLink} from "react-router-hash-link";
import {Link, NavLink, Outlet} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";
import NavMenu from "../components/NavMenu";
import EducationTable from "../components/EducationTable";

const EducationCard = () => {
    const EducationPages = [
        {title: "About the event", link: "about"},
        {title: "Teachers", link: "teachers"},
        {title: "Feedbacks", link: "feedback"},
    ]
    const breadcrumbs = useBreadcrumbs();
    return (
        <div>
            <img src={"/image/banner.png"} style={{width:"100%"}}></img>
            <div className={"center_container"}>
                <div className="container">
                    <Breadcrumbs/>
                    <h4>Trainings, seminars, courses of the <b> Center for Education of Engineers Consultants</b></h4>
                    <h4>Course name: <b>"The practice of investment projects in the Republic of Uzbekistan."</b></h4>
                <NavMenu data={EducationPages}/>
                </div>

                <Outlet></Outlet>
                <div className={"container"}>
                    <div style={{paddingTop:"20px"}}>
                        <div className={"about__main__title"}>OTHER COURSES</div>
                        <EducationTable
                            row={5}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;