import React, { useContext } from "react";
import { Context } from "../index";
import { Grid, Mousewheel, Pagination } from "swiper";
import FooterTest from "../Models/FooterTest";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import MainSlider from "../Models/MainSlider";
import { FormattedMessage, IntlProvider } from "react-intl";
import { messageAbout } from "../i18n/MessageAbout";
import { LOCALES } from "../i18n/Locale";
import { messageEducation } from "../i18n/MessageEducation";

const Education = () => {
    const { news, locale } = useContext(Context);

    return (
        <div>
            <IntlProvider
                messages={messageEducation[locale.getLocale()]}
                locale={locale.getLocale()}
                defaultLocale={LOCALES.ENGLISH}
            >
                {" "}
                <MainSlider></MainSlider>
                <div className={"center_container"}>
                    <div className={"container"}>
                        <Breadcrumbs />
                        <div className={"about__title"}>
                            <FormattedMessage id={"education"} />
                        </div>
                        <div className={"education__title"}>
                            <div className={"education__logo"}>
                                <div>CE EC</div>
                                <div>
                                    Centre for Education of Engineers and
                                    Consultants
                                </div>
                            </div>
                            <div className={"education__text"}>
                                <span style={{ color: "#15337e" }}>
                                    <FormattedMessage id={"education_q"} />
                                </span>
                                <div style={{ lineHeight: "normal" }}>
                                    <FormattedMessage id={"education_1"} />
                                    <br />
                                    <FormattedMessage id={"education_2"} />
                                    <br />
                                    <FormattedMessage id={"education_3"} />
                                </div>
                                <span style={{ color: "#15337e" }}>
                                    <FormattedMessage id={"education_4"} />
                                </span>
                            </div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <EducationTable
                                row={5}
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
                            />
                        </div>
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
};

export default Education;
