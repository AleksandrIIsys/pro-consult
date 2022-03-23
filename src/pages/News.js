import React, {useContext, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Grid, Mousewheel, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css"
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import FooterTest from "../Models/FooterTest";
import {Link} from "react-router-dom";


const News = observer((props) => {
    const {news, locale} = useContext(Context)
    return (
        <div>
            <div style={{display: 'flex', alignItems: "center", justifyContent: 'center', paddingTop: "30px"}}>
                <div className={"container"}>
                    <h4 style={{fontWeight: "600"}}>COMPANY NEWS</h4>
                    <div className={"slide_news"}>
                        <div>№</div>
                        <div>Name of news</div>
                        <div>Date of news</div>
                    </div>
                    <Swiper
                        style={{height: "550px",marginTop:"15px"}}
                        spaceBetween={5}
                        grid={{rows: 8,}}
                        pagination={{clickable: true}}
                        modules={[Grid, Pagination]}
                    >
                        {['', '', '', '', '', '','', '', '', '', '', ''].map(((value, key) =>
                            <SwiperSlide className={"slide_news"}>
                                <div>{key+1}</div>
                                <div>Advanced training course "The practice of investment projects in the Republic of Uzbekistan.</div>
                                <div>15 aprel  2022</div>
                                <div style={{padding:"10px 5px 10px 5px"}}><div style={{width:'100%',height:'100%',borderRadius:"10px",background:"#15337e"}}><a style={{color:"white"}} href={`/news/${key}`}>read news</a></div>
                                </div>
                            </SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
            <FooterTest/>
        </div>
    );
});

export default News;