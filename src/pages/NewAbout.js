import React from 'react';
import {HashLink} from 'react-router-hash-link';
import {Table} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Grid} from "swiper";
import "swiper/css/grid";
import "swiper/css/pagination";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const NewAbout = () => {
    const breadcrumbs = useReactRouterBreadcrumbs();
    const courses = [
        {
            name: "Advanced training course The practice of investment projects in the Republic of Uzbekistan",
            date: "4 apr- 15apr 2022",
            link: ""
        },
        {
            name: "Advanced training course The practice of investment projects in the Republic of Uzbekistan",
            date: "4 apr- 15apr 2022",
            link: ""
        },
        {
            name: "Advanced training course The practice of investment projects in the Republic of Uzbekistan",
            date: "4 apr- 15apr 2022",
            link: ""
        },
        {
            name: "Advanced training course The practice of investment projects in the Republic of Uzbekistan",
            date: "4 apr- 15apr 2022",
            link: ""
        },
    ]
    const AboutData = [
        {title: "Foundation", link: "foundation"},
        {title: "Partners", link: "partners"},
        {title: "Membership", link: "membership"},
        {title: "Polices & Strategies", link: "polices"},
        {title: "Projects", link: "projects"},
    ]
    const image = [
        {
            text: "Initiation & Conception",
            image: "/image/services/in.jpg",
            link: "/what-we-do/services/initiation-and-conception"
        },
        {text: "Plan", image: "/image/services/Plan.jpg", link: "/what-we-do/services/plan"},
        {text: "Design", image: "/image/services/design.png", link: "/what-we-do/services/design"},
        {text: "Procurement", image: "/image/services/procurement.png", link: "/what-we-do/services/procurement"},
        {text: "Delivery", image: "/image/services/deliver.png", link: "/what-we-do/services/deliver"},
        {text: "Decommission", image: "/image/services/decommission.png", link: "/what-we-do/services/decommission"},
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
                    {AboutData.map((value, key) =>
                        <HashLink to={"#" + value.link}>
                            <div key={key} className={"choosing_element"}> {value.title}  </div>
                        </HashLink>
                    )}
                </div>
            </div>
            </div>
            <div className={"services_main"}>
                <div className={"container"}>
                    <div className="block__text">
                        <div className="headtext">About us</div>
                        <p>Pro Consult Company is a multi-industrial engineering, management and development
                            consultancy,
                            who delivers verified and tailored solutions for the clients and partners. Using extensive
                            experience and practice of its experts PCC provides consultancy and engineering services
                            across
                            the project lifecycle: initiation, feasibility studies and researches, design, procurement,
                            construction, comissioning, operation and maintenance. PCC prioritizes quality, efficiency
                            and
                            innovativeness, integrates national knowledge with international experience and is committed
                            to
                            deliver fit for purpose and sustainable solutions. PCC does not set competition to show its
                            superiority, instead PCC cooperates with the leaders of the piece of area when it is wise to
                            provide the best result for customers and clients and recieve true recognition.</p>
                    </div>
                </div>
                <div id={"foundation"} className={"container"}>
                    <div className="block__text">
                        <div className="headtext">Foundation</div>
                        <p>PCC was established by a group of ex.public servants worked within the engineering and
                            consulting
                            industry for long years. Expertise and profound knowledge of the industry showed necessity
                            to
                            develop certain qualifications and skills of specialists which will result in further
                            qualitative development of the industry. It was then decided to establish a platform -
                            company
                            which will focus on professional advanced education, providing state of the art studies to
                            the
                            specialists, because we believe that Only skilled person makes main sense to the
                            development.</p>
                    </div>
                </div>
                <div id={"partners"} className={"container"}>
                    <div className="block__text">
                        <div className="headtext">Partners</div>
                    </div>
                    <div className={"slide_partner"}>
                        <div>Logo</div>
                        <div>Member organisation</div>
                        <div>Country</div>
                        <div>Specialization</div>
                    </div>
                    <Swiper
                        style={{height: "450px",marginTop:"5px"}}
                        spaceBetween={5}
                        grid={{rows: 5,}}
                        pagination={{clickable: true}}
                        modules={[Grid, Pagination]}
                    >

                        {['', '', '', '', '', ''].map(((value, key) =>
                            <SwiperSlide className={"slide_partner"}>
                                <div><img src={"/image/parners/partners-1.jpg"} style={{width:"95px"}}/></div>
                                <div>SKB COMPANY LLC</div>
                                <div>Uzbekistan</div>
                                <div style={{fontSize: "14px", textAlign: 'justify', paddingRight: "8px"}}>The company
                                    focuses on providing
                                    engineering and consulting services to improve the energy efficiency of industrial
                                    enterprises and buildings, the development of innovative products
                                </div>
                            </SwiperSlide>))}
                    </Swiper>
                </div>
                <div id={"membership"} className={"container"}>
                    <div className="block__text">
                        <div className="headtext">Members</div>
                        <div className={"slide_partner"}>
                            <div>Logo</div>
                            <div>Member organisation</div>
                            <div>Country</div>
                            <div>Specialization</div>
                        </div>
                        <Swiper
                            style={{height: "450px",marginTop:"5px"}}
                            spaceBetween={5}
                            grid={{rows: 5,}}
                            pagination={{clickable: true}}
                            modules={[Grid, Pagination]}
                        >
                            {['', '', '', '', '', ''].map(((value, key) =>
                                <SwiperSlide className={"slide_partner"}>
                                    <div><img src={"/image/parners/partners-1.jpg"} style={{width:"95px"}}/></div>
                                    <div>SKB COMPANY LLC</div>
                                    <div>Uzbekistan</div>
                                    <div style={{fontSize: "14px", textAlign: 'justify', paddingRight: "8px"}}>The
                                        company focuses on
                                        providing engineering and consulting services to improve the energy efficiency
                                        of industrial enterprises and buildings, the development of innovative products
                                    </div>
                                </SwiperSlide>))}
                        </Swiper>
                    </div>
                </div>
                <div id={"projects"} className={"container"}>
                    <div className="block__text">
                        <div className="headtext">Projects</div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={20}
                            pagination={{clickable: true}}
                            modules={[Grid, Pagination]}>
                            {['', '', '', ''].map((value, key) =>
                                <SwiperSlide key={key} style={{
                                    height: "350px",
                                    width: "300px",
                                    background: "#15337e",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent:'center',
                                    alignItems:'center',
                                    borderRadius: "10px"
                                }}>
                                    <img src={"/image/about/project_template.png"} style={{
                                        width: "250px",
                                        height: "200px",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                    }}/>
                                    <span style={{textAlign: "center", color: 'white'}}>Modernization of the water management project of the Republic of Uzbekistan</span>
                                    <div className="projects__item__btn">
                                        <a href="">learn more</a>
                                    </div>
                                </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
                <div id={"polices"} className={"container"}>
                    <div className="block__text">
                        <div className="headtext">Polices & Strategies</div>
                        <p>The policy and strategy of Pro consult Company is based on good faith fulfillment of its
                            obligations, based on socially-oriented and benevolent attitude towards partners, clients
                            and employees of the company.</p>
                        <div style={{marginLeft: "20px", fontSize: "24px"}}><p
                            style={{fontFamily: "SansSerifBold"}}>Downloads:</p>
                            <div style={{marginLeft: "20px"}}>
                                <p>Partnership Strategy</p>
                                <p>Code of Conduct</p>
                                <p>Code of integrity</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"by_sectors_menu"}>
                <div className={"container"}>
                    <div className={"title_sectors_container"}>Services</div>
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
                    <div className="courses__item__btn"><a href="/education">all course</a></div>
                </div>
            </div>
        </div>
    );
};

export default NewAbout;