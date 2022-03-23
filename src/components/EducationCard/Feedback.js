import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";

const Feedback = () => {
    return (
        <div className={"container"}>
            <Swiper
                grid={{rows: 3}}
                spaceBetween={20}
                style={{height:"670px",marginTop:"20px"}}
                pagination={{clickable: true}}
                modules={[Grid, Pagination]}

            >
                {['', '', '', ''].map(((value, index) =>
                    <SwiperSlide style={{
                        height:"30%",
                        background: "rgba(21,51,126,0.2)",
                        borderRadius:"10px",
                        display: "flex",
                        flexDirection: "row",
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
                            }}>{index+1}
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
                            <q style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an
                                unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It
                                has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the
                                release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</q>
                            <div style={{color: "#15337e", fontWeight: "900"}}>Akhmedova Guzal</div>
                            <div style={{color: "#15337e", fontWeight: "900"}}>Director abra cadabra ltd</div>

                        </div>
                    </SwiperSlide>))}

            </Swiper>
        </div>
    );
};

export default Feedback;