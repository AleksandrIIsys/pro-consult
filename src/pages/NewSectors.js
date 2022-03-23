import React from 'react';
import "../localstyle.css"
import {Table} from "react-bootstrap";
import SectorsText from "../components/Sectors/SectorsText";
import InitiationText from "../components/Services/InitiationText";
import {NavLink, Outlet} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";

const NewSectors = () => {
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
        {text: "Initiation & Conception", image: "/image/services/in.jpg",link: "/what-we-do/services/initiation-and-conception"},
        {text: "Plan", image: "/image/services/Plan.jpg", link: "/what-we-do/services/plan"},
        {text: "Design", image: "/image/services/design.png", link: "/what-we-do/services/design"},
        {text: "Procurement", image: "/image/services/procurement.png", link: "/what-we-do/services/procurement"},
        {text: "Delivery", image: "/image/services/deliver.png", link: "/what-we-do/services/deliver"},
        {text: "Decommission", image: "/image/services/decommission.png", link: "/what-we-do/services/decommission"},
    ]
    return (
        <div>
            <div className={"services_menu"}>
                <div className={"menu__choose"}>
                    {SectorsData.map((value, key) =>
                        <NavLink to={value.link} className={({isActive}) => (isActive ? 'active_menu_choose' : '')}>
                            <div key={key} className={"choosing_element"}> {value.title}  </div>
                        </NavLink>)}
                </div>
            </div>
            <div className={"services_main"}>
                <div className={"container"}>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className={"by_sectors_menu"}>
                <div className={"container"}>
                    <div className={"title_sectors_container"}>Related Services</div>
                    <div className={"image_sectors_container"}>
                        {image.map(((value, key) =>
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
            <div className={"course__table"}>
                <div className={"container"}>
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
                <div className="courses__item__btn"><a href="/what-we-do/education">all course</a></div>
            </div>
        </div>
</div>
)
    ;
};

export default NewSectors;