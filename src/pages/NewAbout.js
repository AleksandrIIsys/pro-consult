import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css/grid";
import "swiper/css/pagination";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import MainSlider from "../Models/MainSlider";
import { useMediaQuery } from "react-responsive";
import { LOCALES } from "../i18n/Locale";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Context } from "../index";
import { messageAbout } from "../i18n/MessageAbout";
import { observer } from "mobx-react-lite";

const NewAbout = observer(() => {
    const AboutData = [
        {
            title: <FormattedMessage id={"foundation_title"} />,
            link: "foundation",
        },
        { title: <FormattedMessage id={"partners_title"} />, link: "partners" },
        {
            title: <FormattedMessage id={"members_title"} />,
            link: "membership",
        },
        {
            title: <FormattedMessage id={"polices_strategies_title"} />,
            link: "polices",
        },
        { title: <FormattedMessage id={"projects_title"} />, link: "projects" },
    ];
    const image = [
        {
            text: <FormattedMessage id={"initiation_conception_title"} />,
            image: "/image/services/in.jpg",
            link: "/services/initiation-and-conception",
        },
        {
            text: <FormattedMessage id={"plan_title"} />,
            image: "/image/services/Plan.jpg",
            link: "/services/plan",
        },
        {
            text: <FormattedMessage id={"design_title"} />,
            image: "/image/services/design.png",
            link: "/services/design",
        },
        {
            text: <FormattedMessage id={"procurement_title"} />,
            image: "/image/services/procurement.png",
            link: "/services/procurement",
        },
        {
            text: <FormattedMessage id={"deliver_title"} />,
            image: "/image/services/deliver.png",
            link: "/services/deliver",
        },
        {
            text: <FormattedMessage id={"decommission_title"} />,
            image: "/image/services/decommission.png",
            link: "/services/decommission",
        },
    ];
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    const isTablet = useMediaQuery({ query: "(max-width:1080px)" });
    const { locale, clients, partners } = useContext(Context);
    return (
        <div>
            <IntlProvider
                messages={messageAbout[locale.getLocale()]}
                locale={locale.getLocale()}
                defaultLocale={LOCALES.ENGLISH}
            >
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
                                <div className="about__main__title">
                                    <FormattedMessage id={"about_us_title"} />
                                </div>
                                <p>
                                    <FormattedMessage id={"about_us"} />
                                </p>
                            </div>
                        </div>
                        <div id={"foundation"} className={"container"}>
                            <div className="block__text">
                                <div className="about__main__title">
                                    <FormattedMessage id={"foundation_title"} />
                                </div>
                                <p>
                                    <FormattedMessage id={"foundation"} />
                                </p>
                            </div>
                        </div>
                        <div id={"partners"} className={"container"}>
                            <div className="block__text">
                                <div className="about__main__title">
                                    <FormattedMessage id={"partners_title"} />
                                </div>
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
                                        {partners
                                            .getPartners()
                                            .map((value, key) => (
                                                <SwiperSlide
                                                    className={"slide_partner"}
                                                >
                                                    <div key={key}>
                                                        <img
                                                            src={value.image}
                                                        />
                                                    </div>
                                                    <div>
                                                        {
                                                            value.name[
                                                                locale.getLocale()
                                                            ]
                                                        }
                                                    </div>
                                                    <div>
                                                        {
                                                            value.country[
                                                                locale.getLocale()
                                                            ]
                                                        }
                                                    </div>
                                                    <div>
                                                        {
                                                            value.description[
                                                                locale.getLocale()
                                                            ]
                                                        }
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>
                                ) : (
                                    <div>
                                        <div className={"slide_partner"}>
                                            <div>
                                                <FormattedMessage
                                                    id={"logo_table"}
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id={"partners_table"}
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id={"country_table"}
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id={"specialization_table"}
                                                />
                                            </div>
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
                                            {partners
                                                .getPartners()
                                                .map((value, key) => (
                                                    <SwiperSlide
                                                        className={
                                                            "slide_partner"
                                                        }
                                                        key={key}
                                                    >
                                                        <div>
                                                            <img
                                                                src={
                                                                    value.image
                                                                }
                                                            />
                                                        </div>
                                                        <div>
                                                            {
                                                                value.name[
                                                                    locale.getLocale()
                                                                ]
                                                            }
                                                        </div>
                                                        <div>
                                                            {
                                                                value.country[
                                                                    locale.getLocale()
                                                                ]
                                                            }
                                                        </div>
                                                        <div
                                                            className={
                                                                "slide_partner_text"
                                                            }
                                                        >
                                                            {
                                                                value
                                                                    .description[
                                                                    locale.getLocale()
                                                                ]
                                                            }
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                        </Swiper>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div id={"membership"} className={"container"}>
                            <div className="block__text">
                                <div className="about__main__title">
                                    <FormattedMessage id={"members_title"} />
                                </div>
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
                                        {clients
                                            .getClients()
                                            .map((value, key) => (
                                                <SwiperSlide
                                                    className={"slide_partner"}
                                                    key={key}
                                                >
                                                    <div>
                                                        <img
                                                            src={value.image}
                                                        />
                                                    </div>
                                                    <div>
                                                        {
                                                            value.name[
                                                                locale.getLocale()
                                                            ]
                                                        }
                                                    </div>
                                                    <div>
                                                        {
                                                            value.country[
                                                                locale.getLocale()
                                                            ]
                                                        }
                                                    </div>
                                                    <div>
                                                        {
                                                            value.description[
                                                                locale.getLocale()
                                                            ]
                                                        }
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>
                                ) : (
                                    <div>
                                        <div className={"slide_partner"}>
                                            <div>
                                                <FormattedMessage
                                                    id={"logo_table"}
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id={"member_table"}
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id={"country_table"}
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id={"member_status"}
                                                />
                                            </div>
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
                                            {clients
                                                .getClients()
                                                .map((value, key) => {
                                                    console.log(
                                                        value.description[
                                                            locale.getLocale()
                                                        ]
                                                    );
                                                    return (
                                                        <SwiperSlide
                                                            className={
                                                                "slide_partner"
                                                            }
                                                            key={key}
                                                        >
                                                            <div>
                                                                <img
                                                                    src={
                                                                        value.image
                                                                    }
                                                                />
                                                            </div>
                                                            <div>
                                                                {
                                                                    value.name[
                                                                        locale.getLocale()
                                                                    ]
                                                                }
                                                            </div>
                                                            <div>
                                                                {
                                                                    value
                                                                        .country[
                                                                        locale.getLocale()
                                                                    ]
                                                                }
                                                            </div>
                                                            <div
                                                                className={
                                                                    "slide_partner_text"
                                                                }
                                                            >
                                                                {
                                                                    value
                                                                        .description[
                                                                        locale.getLocale()
                                                                    ]
                                                                }
                                                            </div>
                                                        </SwiperSlide>
                                                    );
                                                })}
                                        </Swiper>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            id={"projects"}
                            className={"container"}
                            style={{ display: "none" }}
                        >
                            <div className="block__text">
                                <div className="about__main__title">
                                    <FormattedMessage id={"projects_title"} />
                                </div>
                                {isMobile ? (
                                    <Swiper
                                        style={{ height: "250px" }}
                                        slidesPerView={1}
                                        pagination={{ clickable: true }}
                                        modules={[Pagination]}
                                        spaceBetween={20}
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
                                                    <a href="">
                                                        <FormattedMessage
                                                            id={"more_info"}
                                                        />
                                                    </a>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                ) : (
                                    <Swiper
                                        slidesPerView={isTablet ? 2 : 4}
                                        spaceBetween={30}
                                        pagination={{ clickable: true }}
                                        modules={[Grid, Pagination]}
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
                                                    <a href="">
                                                        <FormattedMessage
                                                            id={"more_info"}
                                                        />
                                                    </a>
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
                                    <FormattedMessage
                                        id={"polices_strategies_title"}
                                    />
                                </div>
                                <p>
                                    <FormattedMessage
                                        id={"polices_strategies"}
                                    />
                                </p>
                                <div>
                                    <p className={"download_about"}>
                                        <FormattedMessage
                                            id={"download_title"}
                                        />
                                    </p>
                                    <div>
                                        <p>
                                            <FormattedMessage
                                                id={"download_url_1"}
                                            />
                                        </p>
                                        <p>
                                            <FormattedMessage
                                                id={"download_url_2"}
                                            />
                                        </p>
                                        <p>
                                            <FormattedMessage
                                                id={"download_url_3"}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isMobile ? (
                        <div className={"container"}>
                            <div className="about__main__title">
                                <FormattedMessage id={"see_also"} />
                            </div>
                            <div className={"mobile__button"}>
                                <a href={"/services"}>
                                    <FormattedMessage id={"all_services"} />
                                </a>
                            </div>
                            <div className={"mobile__button"}>
                                <a href={"/education"}>
                                    <FormattedMessage
                                        id={"upcoming_related_courses"}
                                    />
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={"by_sectors_menu"}>
                                <div className={"container"}>
                                    <div className={"title_sectors_container"}>
                                        <FormattedMessage
                                            id={"services_title"}
                                        />
                                    </div>
                                    <div className={"image_sectors_container"}>
                                        {image.map((value, key) => (
                                            <div>
                                                <a href={value.link}>
                                                    <div
                                                        className={
                                                            "inner_image"
                                                        }
                                                    >
                                                        <img
                                                            src={value.image}
                                                        />
                                                    </div>
                                                    <div
                                                        className={"inner_text"}
                                                    >
                                                        <span>
                                                            {value.text}
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <div className={"title_sectors_container"}>
                                    <FormattedMessage
                                        id={"upcoming_related_courses"}
                                    />
                                </div>
                                <div className={"course__table"}>
                                    <EducationTable row={3} />
                                    <div className="courses__item__btn">
                                        <a href="/education">
                                            <FormattedMessage
                                                id={"all_course"}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </IntlProvider>
        </div>
    );
});

export default NewAbout;
