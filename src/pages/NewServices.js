import React from 'react';
import FooterTest from "../Models/FooterTest";
import "../localstyle.css"
import {Table} from "react-bootstrap";
import {NavLink,Outlet} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import MainSlider from "../Models/MainSlider";
import {useMediaQuery} from "react-responsive";

const NewServices = () => {
    const breadcrumbs = useBreadcrumbs();
    const ServiceData = [
        {title:"Initiation & Conception",link:"initiation-and-conception"},
        {title:"Plan",link:"plan"},
        {title:"Design",link:"design"},
        {title:"Procurement",link:"procurement"},
        {title:"Deliver",link:"deliver"},
        {title:"Decommission",link:"decommission"},
    ]
    const image = [
        {text:"Water and Environment",image:"/image/services/water.jpg",link:"/sectors/waterandenvironment"},
        {text:"Energy and Resources",image:"/image/services/energy.jpg",link: "/sectors/energyandresouces"},
        {text:"Transport",image:"/image/services/transport.jpg",link: "/sectors/transport"},
        {text:"Telecommunication",image:"/image/services/telecom.jpg",link: "/sectors/telecommunication"},
    ]
    const isMobile = useMediaQuery({query:"(max-width:480px)"})
    return (
        <div>
            <MainSlider/>
        <div className={"center_container"}>
            <div className={"container"}>
                <Breadcrumbs/>
                <div className={"services_menu"}>
                <div className={"menu__choose"}>
                    {ServiceData.map((value, key) =>
                        <NavLink to={value.link} className={({isActive}) => (isActive ? 'active_menu_choose' : '')}>
                            <div key={key} className={"choosing_element"}> {value.title}  </div>
                        </NavLink>)}
                </div>
            </div>
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
                    <div className={"mobile__button"}><a href={"/sectors"}>All Sectors</a></div>
                    <div className={"mobile__button"}><a href={"/education"}>Upcoming Related Courses</a></div>
                </div>
                :
                <div>
                <div className={"by_sectors_menu"}>
                    <div className={"container"}>
                        <div className={"title_service_container"}>by Sector</div>
                        <div className={"image_service_container"}>
                            {image.map(((value,key) =>
                                <div>
                                    <a href={value.link}>
                                        <div className={"inner_image"}>
                                            <img src={value.image}/>
                                        </div>
                                        <div className={"inner_text"}>
                                            <span>{value.text}</span>
                                        </div>
                                    </a>
                                </div>)
                            )}
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"20px"}}>
                    <div className={"title_sectors_container"}>Upcoming Related Cources</div>
                    <div className={"course__table"}>
                        <EducationTable row={3} data={['', '', '', '', '', '', '', '', '', '', '', '']}></EducationTable>
                        <div className="courses__item__btn"><a href="/education">all course</a></div>
                    </div>
                </div>
            </div>}

        </div>
        </div>
    );
};

export default NewServices;