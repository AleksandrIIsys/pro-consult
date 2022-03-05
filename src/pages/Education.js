import React, {useContext} from 'react';
import {Context} from "../index";
import {Mousewheel, Pagination} from "swiper";
import FooterTest from "../Models/FooterTest";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css"

const Education = () => {
    const {news} = useContext(Context)
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicMainBullets: true,
                    clickable: true
                }}
                direction={"vertical"}
                modules={[Pagination, Mousewheel]}
                className="swiper"
                mousewheel={true}
                style={{height: "650px", paddingRight: "-50px", width: "85%",marginTop:"100px",borderTop:"1px solid black",borderBottom:"1px solid black"}}
            >
                {
                    news.getNews().map(news_element =>
                        <SwiperSlide >
                            <div className="container">
                                <div className="imgNews"
                                     style={{display: "flex",boxShadow:"12px 12px 10px 1px gray", flexDirection: "row", fontSize: "22px", backgroundColor: "#15337eed", padding: "50px",height:"600px"}}>
                                    <div style={{display:"flex", flexDirection: "column", width: "70%", marginRight: "25px"}}>
                                        <div className="titleNews"
                                             style={{textAlign: "left", padding: "10px", fontWeight: "bold", backgroundColor: "#fff", borderRadius: "10px"}}>
                                            {news_element.title}
                                        </div>
                                        <div className="textNews"
                                             style={{textAlign: "justify", padding: "10px", backgroundColor: "#fff", marginTop: "30px", borderRadius: "10px"}}>
                                            {news_element.text.substring(0,1000)}
                                        </div>
                                    </div>
                                    <img src={news_element.image} style={{width: "28%", border: "2px solid #fff",alignSelf:'flex-start', borderRadius: "10px", backgroundColor: "#fff"}}/>
                                </div></div>
                        </SwiperSlide>
                    )}
            </Swiper>
            <FooterTest/>
        </div>
    );
};

export default Education;