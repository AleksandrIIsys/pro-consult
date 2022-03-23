import React, {useContext} from 'react';
import {Context} from "../index";
import {Grid, Mousewheel, Pagination} from "swiper";
import FooterTest from "../Models/FooterTest";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css"
import {observer} from "mobx-react-lite";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Careers = observer(() => {
    const {news} = useContext(Context)
    const breadcrumbs = useBreadcrumbs();
    return (
        <div>
            <div style={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
                <div className={"container"}>
                    <Breadcrumbs/>

                    <span style={{fontSize: "30px", fontWeight: "600"}}>OPEN POSITION</span>
                    <Swiper
                        grid={{rows: 3}}
                        spaceBetween={20}
                        style={{height:"1300px",marginTop:"20px"}}
                        pagination={{clickable: true}}
                        modules={[Grid, Pagination]}
                    >
                        {['', '', '', ''].map(((value, index) =>
                            <SwiperSlide style={{
                                height: "400px",
                                background: "rgba(21,51,126,0.2)",
                                borderRadius:"10px",
                                display: "flex",
                                flexDirection: "row"
                            }} key={index}>
                                    <div style={{margin: "20px"}}>
                                        <div style={{
                                            width: "90px",
                                            height: "90px",
                                            background: "rgb(21,51,126)",
                                            color: "white",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: 'center'
                                        }}>1
                                        </div>
                                        <span>18.03.2022</span>
                                    </div>
                                    <div style={{
                                        // display: 'flex',
                                        // flexDirection: "column",
                                        // justifyContent: "space-between",
                                        display: "grid",
                                        gridTemplateRows: '1fr 1fr 5fr 1fr 1fr',
                                        marginTop: "20px",
                                        marginRight:"20px"
                                    }}>
                                        <div className="headtext">Project Manager vacancy</div>
                                        <p>Requirements:</p>
                                        <p style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum
                                            has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown
                                            printer took a galley of type and scrambled it to make a type specimen book. It
                                            has
                                            survived not only five centuries, but also the leap into electronic typesetting,
                                            remaining essentially unchanged. It was popularised in the 1960s with the
                                            release of
                                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p>work schedule: 5 days a week 8 hours</p>
                                        <div style={{display: "flex", justifyContent: "space-between",margin:"0 0 10px 0"}}>
                                            <span style={{display: "flex", alignItems: "center", justifyContent: "center"}}>salary : 15000000 usd</span>
                                            <div className={"about__item__btn"}><a>contact us</a></div>
                                        </div>
                                    </div>
                            </SwiperSlide>))}

                    </Swiper>
                </div>
                </div>
                <FooterTest/>
            </div>
            );
            });

            export default Careers;