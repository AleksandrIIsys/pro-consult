import React, {useDebugValue} from 'react';
import {useParams} from "react-router";
import FooterTest from "../Models/FooterTest";
import {Grid, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link, NavLink} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";

const NewsCard = () => {
    const {id} = useParams();
    const breadcrumbs = useBreadcrumbs();
    console.log(id);
    return (
        <div>
            <div style={{display: 'flex', alignItems: "center", justifyContent: 'center',flexDirection:"column"}}>
                <div className={"container"}>
                    <Breadcrumbs/>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            marginRight: "5px",
                            width: "260px",
                            fontSize: "28px"
                        }}>
                            COMPANY NEWS
                        </div>
                        <div style={{borderLeft: "4px solid  #15337e", paddingLeft: "10px", fontSize: "26px"}}>
                            Pro Consult company announces a set of events dedicated to the opening of the site
                        </div>
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <p>
                            <img src={"/image/clients/clients-1.jpg"}
                                 style={{width: "250px", height: "250px", float: "left", margin: "10px 10px 10px 0"}}/>
                            <p style={{whiteSpace: "pre-wrap"}}>
                                {`  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32asdasdasdasdadsdasdasdadasdasasasasdasdasa.`}
                            </p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece
                                of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                                obscure
                                Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                                word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                                and
                                Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                                popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                                amet..", comes from a line in section 1.10.32
                            </p>
                            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece
                                of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                                obscure
                                Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                                word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                                and
                                Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                                popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                                amet..", comes from a line in section 1.10.32.
                            </p>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece
                                of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                                obscure
                                Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                                word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                                and
                                Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                                popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                                amet..", comes from a line in section 1.10.32.
                            </p>
                        </p>
                    </div>
                    <div style={{paddingTop:'40px',borderTop:"2px solid black"}}>
                    <div style={{fontSize: "30px", fontWeight: "600",marginBottom:"10px"}}>OTHER NEWS</div>
                    <div className={"slide_news"}>
                        <div>№</div>
                        <div>Name of news</div>
                        <div>Date of news</div>
                    </div>
                    <Swiper
                        style={{height: "450px",marginTop:"10px"}}
                        spaceBetween={10}
                        grid={{rows: 6,}}
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
            </div>
            <FooterTest/>
        </div>
    );
};

export default NewsCard;