import React, { useContext } from "react";
import "../localstyle.css";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import NavMenu from "../components/NavMenu";
import MainSlider from "../Models/MainSlider";
import { useMediaQuery } from "react-responsive";
import { LOCALES } from "../i18n/Locale";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { FormattedMessage, IntlProvider } from "react-intl";
import { messageSectors } from "../i18n/MessageSectors";

const NewSectors = observer(() => {
    const SectorsData = [
        {
            title: <FormattedMessage id={"water_and_environment_title"} />,
            link: "waterandenvironment",
        },
        {
            title: <FormattedMessage id={"energy_and_resources_title"} />,
            link: "energyandresouces",
        },
        {
            title: <FormattedMessage id={"transport_title"} />,
            link: "transport",
        },
        {
            title: <FormattedMessage id={"telecommunication_title"} />,
            link: "telecommunication",
        },
    ];
    const image = [
        {
            text: <FormattedMessage id={"initiation"} />,
            image: "/image/services/in.jpg",
            link: "/services/initiation-and-conception",
        },
        {
            text: <FormattedMessage id={"plan"} />,
            image: "/image/services/Plan.jpg",
            link: "/services/plan",
        },
        {
            text: <FormattedMessage id={"design"} />,
            image: "/image/services/design.png",
            link: "/services/design",
        },
        {
            text: <FormattedMessage id={"procurement"} />,
            image: "/image/services/procurement.png",
            link: "/services/procurement",
        },
        {
            text: <FormattedMessage id={"deliver"} />,
            image: "/image/services/deliver.png",
            link: "/services/deliver",
        },
        {
            text: <FormattedMessage id={"decommission"} />,
            image: "/image/services/decommission.png",
            link: "/services/decommission",
        },
    ];
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    const { locale } = useContext(Context);
    return (
        <div>
            <IntlProvider
                messages={messageSectors[locale.getLocale()]}
                locale={locale.getLocale()}
                defaultLocale={LOCALES.ENGLISH}
            >
                <MainSlider/>
                <div className={"center_container"}>
                    <div className={"container"}>
                        <Breadcrumbs />
                        <NavMenu data={SectorsData}/>
                    </div>
                    <div className={"services_main"}>
                        <div className={"container"}>
                            <Outlet/>
                        </div>
                    </div>
                    {isMobile ? (
                        <div className={"container"}>
                            <div className="about__main__title"><FormattedMessage id={"see_also"}/></div>
                            <div className={"mobile__button"}>
                                <a href={"/services"}>
                                    <FormattedMessage id={"services"} />
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
                                        <FormattedMessage id={"services"} />
                                    </div>
                                    <div className={"image_sectors_container"}>
                                        {image.map((value, key) => (
                                            <div key={key}>
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
                                    <EducationTable row={4} />
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

export default NewSectors;
