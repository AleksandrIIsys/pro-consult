import React, {useContext, useRef, useState} from 'react';
import Header from "./Header";
import MainSlider from "./MainSlider";
import FooterTest from "./FooterTest";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Mousewheel} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css"
import NewsElement from "./NewsElement";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const NewsPage =observer( (props) => {
    const {news} = useContext(Context)
    return (
        <div>
            <Header/>
            <MainSlider/>
            <Swiper
                pagination={{
                    dynamicMainBullets: true,
                    clickable: true
                }}
                direction={"vertical"}
                /*slidesPerView={2}*/
                modules={[Pagination, Mousewheel]}
                className="swiper"
                mousewheel={true}
                style={{height: "800px", paddingRight: "-50px", width: "85%"}}
            >
                {
                    news.getNews().map(news_element =>
                        <SwiperSlide>
                            <div className="container">
                            <div className="imgNews"
                                 style={{display: "flex", flexDirection: "row", fontSize: "22px", backgroundColor: "#15337eed", padding: "50px"}}>
                                <div style={{display:"flex", flexDirection: "column", width: "1200px", marginRight: "25px"}}>
                                    <div className="titleNews"
                                         style={{textAlign: "left", padding: "10px", fontWeight: "bold", backgroundColor: "#fff", borderRadius: "10px"}}>
                                        {news_element.title}
                                    </div>
                                    <div className="textNews"
                                         style={{textAlign: "justify", padding: "10px", backgroundColor: "#fff", marginTop: "30px", borderRadius: "10px"}}>
                                        {news_element.text.substring(0,1000)}
                                    </div>
                                </div>
                                <img src={news_element.image} style={{width: "28%", border: "2px solid #fff", borderRadius: "10px", backgroundColor: "#fff"}}/>
                            </div></div>
                        </SwiperSlide>
                    )}
            </Swiper>
            <FooterTest/>
        </div>
    );
});

export default NewsPage;