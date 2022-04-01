import React from 'react';
import "../localstyle.css"
import {Table} from "react-bootstrap";
import SectorsText from "../components/Sectors/SectorsText";
import InitiationText from "../components/Services/InitiationText";
import {NavLink, Outlet} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import NavMenu from "../components/NavMenu";
import MainSlider from "../Models/MainSlider";
import {useMediaQuery} from "react-responsive";

const NewSectors = () => {
    const breadcrumbs = useBreadcrumbs();
    const courses = [
        { name: "Advanced training course The practice of investment projects in the Republic of Uzbekistan",date: "4 apr- 15apr 2022", link: ""},
        { name: "Advanced training course The practice of investment projects in the Republic of Uzbekistan",date: "4 apr- 15apr 2022", link: ""},
        { name: "Advanced training course The practice of investment projects in the Republic of Uzbekistan",date: "4 apr- 15apr 2022", link: ""},
        { name: "Advanced training course The practice of investment projects in the Republic of Uzbekistan",date: "4 apr- 15apr 2022", link: ""},

    ]
    const SectorsData = [
        { title: "Water and Environment",link: "waterandenvironment" },
        {title: "Energy and Resources",link: "energyandresouces"},
        {title: "Transport",link: "transport"},
        { title: "Telecommunication", link: "telecommunication"},

    ]
    const image = [
        {text: "Initiation & Conception", image: "/image/services/in.jpg",link: "/services/initiation-and-conception"},
        {text: "Plan", image: "/image/services/Plan.jpg", link: "/services/plan"},
        {text: "Design", image: "/image/services/design.png", link: "/services/design"},
        {text: "Procurement", image: "/image/services/procurement.png", link: "/services/procurement"},
        {text: "Delivery", image: "/image/services/deliver.png", link: "/services/deliver"},
        {text: "Decommission", image: "/image/services/decommission.png", link: "/services/decommission"},
    ]
    const isMobile = useMediaQuery({query:'(max-width:480px)'})
    return (
        <div>
            <MainSlider></MainSlider>
            <div className={"center_container"}>
                <div className={"container"}>
                    <Breadcrumbs />
                    <NavMenu data={SectorsData}></NavMenu>
                </div>
                <div className={"services_main"}>
                    <div className={"container"}>
                        <Outlet></Outlet>
                    </div>
                </div>
                {isMobile ?
                    <div className={"container"}>
                    <div className="about__main__title">
                        See also
                    </div>
                    <div className={"mobile__button"}><a href={"/services"}>All Services</a></div>
                    <div className={"mobile__button"}><a href={"/education"}>Upcoming Related Courses</a></div>
                </div> :
                    <div>
                    <div className={"by_sectors_menu"}>
                        <div className={"container"}>
                            <div className={"title_sectors_container"}>
                                Related Services
                            </div>
                            <div className={"image_sectors_container"}>
                                {image.map((value, key) => (
                                    <div>
                                        <a href={value.link}>
                                            <div className={"inner_image"}>
                                                <img src={value.image} />
                                            </div>
                                            <div className={"inner_text"}>
                                                <span>{value.text}</span>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                    <div className={"title_sectors_container"}>
                    Upcoming Related Cources
                    </div>
                    <div className={"course__table"}>
                    <EducationTable
                    row={4}
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
                    <div className="courses__item__btn">
                    <a href="/education">all course</a>
                    </div>
                    </div>
                    </div>
                    </div>}

            </div>

        </div>
    );
};

export default NewSectors;