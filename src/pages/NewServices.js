import React from 'react';
import FooterTest from "../Models/FooterTest";
import "../localstyle.css"
import {Table} from "react-bootstrap";
import {NavLink,Outlet} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";

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
        {text:"Water and Environment",image:"/image/services/water.jpg",link:"/what-we-do/sectors/waterandenvironment"},
        {text:"Energy and Resources",image:"/image/services/energy.jpg",link: "/what-we-do/sectors/energyandresouces"},
        {text:"Transport",image:"/image/services/transport.jpg",link: "/what-we-do/sectors/transport"},
        {text:"Telecommunication",image:"/image/services/telecom.jpg",link: "/what-we-do/sectors/telecommunication"},
    ]
    return (
        <div style={{
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
            flexDirection: "column"
        }}>
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
                    <div className="courses__item__btn"><a href="/education">all course</a></div>
                    </div>
            </div>
            <FooterTest></FooterTest>
        </div>
    );
};

export default NewServices;