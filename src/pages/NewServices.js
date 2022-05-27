import React, { useContext } from "react";
import "../localstyle.css";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import MainSlider from "../Models/MainSlider";
import { useMediaQuery } from "react-responsive";
import { LOCALES } from "../i18n/Locale";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Context } from "../index";
import { messageService } from "../i18n/MessageService";

const NewServices = () => {
    const ServiceData = [
        {
            title: <FormattedMessage id={"initiation_conception_title"} />,
            link: "initiation-and-conception",
        },
        { title: <FormattedMessage id={"plan_title"} />, link: "plan" },
        { title: <FormattedMessage id={"design_title"} />, link: "design" },
        {
            title: <FormattedMessage id={"procurement_title"} />,
            link: "procurement",
        },
        { title: <FormattedMessage id={"deliver_title"} />, link: "deliver" },
        {
            title: <FormattedMessage id={"decommission_title"} />,
            link: "decommission",
        },
    ];
    const image = [
        {
            text: <FormattedMessage id={"water_and_environment_title"} />,
            image: "/image/services/water.jpg",
            link: "/sectors/waterandenvironment",
        },
        {
            text: <FormattedMessage id={"energy_and_resources_title"} />,
            image: "/image/services/energy.jpg",
            link: "/sectors/energyandresouces",
        },
        {
            text: <FormattedMessage id={"transport_title"} />,
            image: "/image/services/transport.jpg",
            link: "/sectors/transport",
        },
        {
            text: <FormattedMessage id={"telecommunication_title"} />,
            image: "/image/services/telecom.jpg",
            link: "/sectors/telecommunication",
        },
    ];
    const { locale } = useContext(Context);
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    return (
        <div>
            <IntlProvider
                messages={messageService[locale.getLocale()]}
                locale={locale.getLocale()}
                defaultLocale={LOCALES.ENGLISH}
            >
                <div className={"center_container"}>
                    <div className={"container"}>
                        <Breadcrumbs />
                        <div className={"services_menu"}>
                            <div className={"menu__choose"}>
                                {ServiceData.map((value, key) => (
                                    <NavLink
                                        to={value.link}
                                        className={({ isActive }) =>
                                            isActive ? "active_menu_choose" : ""
                                        }
                                    >
                                        <div
                                            key={key}
                                            className={"choosing_element"}
                                        >
                                            {" "}
                                            {value.title}{" "}
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={"services_main"}>
                        <div className={"container"}>
                            <Outlet></Outlet>
                        </div>
                    </div>
                    {isMobile ? (
                        <div className={"container"}>
                            <div className="about__main__title">
                                <FormattedMessage id={"see_also"} />
                            </div>
                            <div className={"mobile__button"}>
                                <NavLink to={"/sectors"}>
                                    {" "}
                                    <FormattedMessage id={"sectors"} />
                                </NavLink>
                            </div>
                            <div className={"mobile__button"}>
                                <NavLink to={"/education"}>
                                    <FormattedMessage
                                        id={"upcoming_related_courses"}
                                    />
                                </NavLink>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={"by_sectors_menu"}>
                                <div className={"container"}>
                                    <div className={"title_service_container"}>
                                        <FormattedMessage id={"sectors"} />
                                    </div>
                                    <div className={"image_service_container"}>
                                        {image.map((value, key) => (
                                            <div key={key}>
                                                <NavLink to={value.link}>
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
                                                </NavLink>
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
                                    <EducationTable
                                        row={3}
                                        data={[
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                            "",
                                        ]}
                                    ></EducationTable>
                                    <div className="courses__item__btn">
                                        <NavLink to="/education">
                                            <FormattedMessage
                                                id={"all_course"}
                                            />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </IntlProvider>
        </div>
    );
};

export default NewServices;
