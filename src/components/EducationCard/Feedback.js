import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";
import {useMediaQuery} from "react-responsive";

const Feedback = () => {
    const isMobile = useMediaQuery({query:"(max-width:480px)"})
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
                    <SwiperSlide className={"feedback__slide"} key={index}>
                        <div className={"feedback__box"}>
                            <div>{index+1}
                            </div>
                            <span>18.03.2022</span>
                        </div>
                        <div className={"feedback__text"}>
                            <q>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
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
                            <div >Akhmedova Guzal</div>
                            <div >Director abra cadabra ltd</div>

                        </div>
                    </SwiperSlide>))}

            </Swiper>
        </div>
    );
};

export default Feedback;