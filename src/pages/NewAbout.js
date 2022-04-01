import React from "react";
import { HashLink } from "react-router-hash-link";
import { Table } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";
import "swiper/css/grid";
import "swiper/css/pagination";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import MainSlider from "../Models/MainSlider";
import { useMediaQuery } from "react-responsive";

const NewAbout = () => {
    const AboutData = [
        { title: "Foundation", link: "foundation" },
        { title: "Partners", link: "partners" },
        { title: "Membership", link: "membership" },
        { title: "Polices & Strategies", link: "polices" },
        { title: "Projects", link: "projects" },
    ];
    const image = [
        {
            text: "Initiation & Conception",
            image: "/image/services/in.jpg",
            link: "/services/initiation-and-conception",
        },
        {
            text: "Plan",
            image: "/image/services/Plan.jpg",
            link: "/services/plan",
        },
        {
            text: "Design",
            image: "/image/services/design.png",
            link: "/services/design",
        },
        {
            text: "Procurement",
            image: "/image/services/procurement.png",
            link: "/services/procurement",
        },
        {
            text: "Delivery",
            image: "/image/services/deliver.png",
            link: "/services/deliver",
        },
        {
            text: "Decommission",
            image: "/image/services/decommission.png",
            link: "/services/decommission",
        },
    ];
    const isMobile = useMediaQuery({ query: "(max-width:480px)" });
    return (
        <div>
            <MainSlider></MainSlider>
            <div className={"center_container"}>
                <div className={"container"}>
                    <Breadcrumbs />
                    <div className={"services_menu"}>
                        <div className={"menu__choose"}>
                            {AboutData.map((value, key) => (
                                <HashLink to={"#" + value.link}>
                                    <div
                                        key={key}
                                        className={"choosing_element"}
                                    >
                                        {" "}
                                        {value.title}{" "}
                                    </div>
                                </HashLink>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"services_main"}>
                    <div className={"container"}>
                        <div className="block__text">
                            <div className="about__main__title">About us</div>
                            <p>
                                Pro Consult Company is a multi-industrial
                                engineering, management and development
                                consultancy, who delivers verified and tailored
                                solutions for the clients and partners. Using
                                extensive experience and practice of its experts
                                PCC provides consultancy and engineering
                                services across the project lifecycle:
                                initiation, feasibility studies and researches,
                                design, procurement, construction, comissioning,
                                operation and maintenance. PCC prioritizes
                                quality, efficiency and innovativeness,
                                integrates national knowledge with international
                                experience and is committed to deliver fit for
                                purpose and sustainable solutions. PCC does not
                                set competition to show its superiority, instead
                                PCC cooperates with the leaders of the piece of
                                area when it is wise to provide the best result
                                for customers and clients and recieve true
                                recognition.
                            </p>
                        </div>
                    </div>
                    <div id={"foundation"} className={"container"}>
                        <div className="block__text">
                            <div className="about__main__title">Foundation</div>
                            <p>
                                PCC was established by a group of ex.public
                                servants worked within the engineering and
                                consulting industry for long years. Expertise
                                and profound knowledge of the industry showed
                                necessity to develop certain qualifications and
                                skills of specialists which will result in
                                further qualitative development of the industry.
                                It was then decided to establish a platform -
                                company which will focus on professional
                                advanced education, providing state of the art
                                studies to the specialists, because we believe
                                that Only skilled person makes main sense to the
                                development.
                            </p>
                        </div>
                    </div>
                    <div id={"partners"} className={"container"}>
                        <div className="block__text">
                            <div className="about__main__title">Partners</div>
                            {isMobile ? (
                                <Swiper
                                    style={{
                                        height: "150px",
                                        marginTop: "5px",
                                    }}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    modules={[Pagination]}
                                >
                                    {["", "", "", "", "", ""].map(
                                        (value, key) => (
                                            <SwiperSlide
                                                className={"slide_partner"}
                                            >
                                                <div>
                                                    <img
                                                        src={
                                                            "/image/parners/partners-1.jpg"
                                                        }
                                                    />
                                                </div>
                                                <div>SKB COMPANY LLC</div>
                                                <div>Uzbekistan</div>
                                                <div>
                                                    The company focuses on
                                                    providing engineering and
                                                    consulting services to
                                                    improve the energy
                                                    efficiency of industrial
                                                    enterprises and buildings,
                                                    the development of
                                                    innovative products
                                                </div>
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
                            ) : (
                                <div>
                                    <div className={"slide_partner"}>
                                        <div>Logo</div>
                                        <div>Member organisation</div>
                                        <div>Country</div>
                                        <div>Specialization</div>
                                    </div>
                                    <Swiper
                                        style={{
                                            height: "450px",
                                            marginTop: "5px",
                                        }}
                                        spaceBetween={5}
                                        grid={{ rows: 5 }}
                                        pagination={{ clickable: true }}
                                        modules={[Grid, Pagination]}
                                    >
                                        {["", "", "", "", "", ""].map(
                                            (value, key) => (
                                                <SwiperSlide
                                                    className={"slide_partner"}
                                                >
                                                    <div>
                                                        <img
                                                            src={
                                                                "/image/parners/partners-1.jpg"
                                                            }
                                                            style={{
                                                                width: "95px",
                                                            }}
                                                        />
                                                    </div>
                                                    <div>SKB COMPANY LLC</div>
                                                    <div>Uzbekistan</div>
                                                    <div
                                                        style={{
                                                            fontSize: "14px",
                                                            textAlign:
                                                                "justify",
                                                            paddingRight: "8px",
                                                        }}
                                                    >
                                                        The company focuses on
                                                        providing engineering
                                                        and consulting services
                                                        to improve the energy
                                                        efficiency of industrial
                                                        enterprises and
                                                        buildings, the
                                                        development of
                                                        innovative products
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        )}
                                    </Swiper>
                                </div>
                            )}
                        </div>
                    </div>
                    <div id={"membership"} className={"container"}>
                        <div className="block__text">
                            <div className="about__main__title">Members</div>
                            {isMobile ? (
                                <Swiper
                                    style={{
                                        height: "150px",
                                        marginTop: "5px",
                                    }}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    modules={[Pagination]}
                                >
                                    {["", "", "", "", "", ""].map(
                                        (value, key) => (
                                            <SwiperSlide
                                                className={"slide_partner"}
                                            >
                                                <div>
                                                    <img
                                                        src={
                                                            "/image/parners/partners-1.jpg"
                                                        }
                                                    />
                                                </div>
                                                <div>SKB COMPANY LLC</div>
                                                <div>Uzbekistan</div>
                                                <div>
                                                    The company focuses on
                                                    providing engineering and
                                                    consulting services to
                                                    improve the energy
                                                    efficiency of industrial
                                                    enterprises and buildings,
                                                    the development of
                                                    innovative products
                                                </div>
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
                            ) : (
                                <div>
                                    <div className={"slide_partner"}>
                                        <div>Logo</div>
                                        <div>Member organisation</div>
                                        <div>Country</div>
                                        <div>Member status</div>
                                    </div>
                                    <Swiper
                                        style={{
                                            height: "450px",
                                            marginTop: "5px",
                                        }}
                                        spaceBetween={5}
                                        grid={{ rows: 5 }}
                                        pagination={{ clickable: true }}
                                        modules={[Grid, Pagination]}
                                    >
                                        {["", "", "", "", "", ""].map(
                                            (value, key) => (
                                                <SwiperSlide
                                                    className={"slide_partner"}
                                                >
                                                    <div>
                                                        <img
                                                            src={
                                                                "/image/parners/partners-1.jpg"
                                                            }
                                                            style={{
                                                                width: "95px",
                                                            }}
                                                        />
                                                    </div>
                                                    <div>SKB COMPANY LLC</div>
                                                    <div>Uzbekistan</div>
                                                    <div
                                                        style={{
                                                            fontSize: "14px",
                                                            textAlign:
                                                                "justify",
                                                            paddingRight: "8px",
                                                        }}
                                                    >
                                                        The company focuses on
                                                        providing engineering
                                                        and consulting services
                                                        to improve the energy
                                                        efficiency of industrial
                                                        enterprises and
                                                        buildings, the
                                                        development of
                                                        innovative products
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        )}
                                    </Swiper>
                                </div>
                            )}
                        </div>
                    </div>
                    <div id={"projects"} className={"container"}>
                        <div className="block__text">
                            <div className="about__main__title">Projects</div>
                            {isMobile ? (
                                <Swiper
                                    style={{height:'250px'}}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    modules={[Pagination]}
                                >
                                    {["", "", "", ""].map((value, key) => (
                                        <SwiperSlide
                                            key={key}
                                            className={"project_slide"}
                                        >
                                            <img
                                                src={
                                                    "/image/about/project_template.png"
                                                }
                                            />
                                            <span>
                                                Modernization of the water
                                                management project of the
                                                Republic of Uzbekistan
                                            </span>
                                            <div className="projects__item__btn">
                                                <a href="">learn more</a>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    pagination={{ clickable: true }}
                                    modules={[Grid, Pagination]}
                                >
                                    {["", "", "", ""].map((value, key) => (
                                        <SwiperSlide
                                            key={key}
                                            style={{
                                                height: "350px",
                                                width: "280px",
                                                background: "#15337e",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: "10px",
                                            }}
                                        >
                                            <img
                                                src={
                                                    "/image/about/project_template.png"
                                                }
                                                style={{
                                                    width: "250px",
                                                    height: "200px",
                                                    marginTop: "10px",
                                                    marginBottom: "10px",
                                                }}
                                            />
                                            <span
                                                style={{
                                                    textAlign: "center",
                                                    color: "white",
                                                }}
                                            >
                                                Modernization of the water
                                                management project of the
                                                Republic of Uzbekistan
                                            </span>
                                            <div className="projects__item__btn">
                                                <a href="">learn more</a>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>
                    </div>
                    <div id={"polices"} className={"container"}>
                        <div className="block__text">
                            <div className="about__main__title">
                                Polices & Strategies
                            </div>
                            <p>
                                The policy and strategy of Pro consult Company
                                is based on good faith fulfillment of its
                                obligations, based on socially-oriented and
                                benevolent attitude towards partners, clients
                                and employees of the company.
                            </p>
                            <div>
                                <p className={"download_about"}>Downloads:</p>
                                <div>
                                    <p>Partnership Strategy</p>
                                    <p>Code of Conduct</p>
                                    <p>Code of integrity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isMobile ?
                    <div className={"container"}>
                        <div className="about__main__title">
                            See also
                        </div>
                        <div className={"mobile__button"}><a href={"/services"}>All Services</a></div>
                        <div className={"mobile__button"}><a href={"/education"}>Upcoming Related Courses</a></div>
                    </div> : <div>
                        <div className={"by_sectors_menu"}>
                            <div className={"container"}>
                                <div className={"title_sectors_container"}>
                                    Services
                                </div>
                                <div className={"image_sectors_container"}>
                                    {image.map((value, key) => (
                                        <div>
                                            <a href={value.link}>
                                                <div className={"inner_image"}>
                                                    <img src={value.image} />
                                                </div>
                                                <div className={"inner_text"}>
                                                    <span>{value.text}</span>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <div className={"title_sectors_container"}>
                                Upcoming Related Cources
                            </div>
                            <div className={"course__table"}>
                                <EducationTable row={3} />
                                <div className="courses__item__btn">
                                    <a href="/education">all course</a>
                                </div>
                            </div>
                        </div>
                    </div> }

            </div>
        </div>
    );
};

export default NewAbout;
