import React, { useContext } from "react";
import { Context } from "../index";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import MainSlider from "../Models/MainSlider";
import { FormattedMessage, IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/Locale";
import { messageEducation } from "../i18n/MessageEducation";

const Education = () => {
    const { locale } = useContext(Context);

    return (
        <div>
            <IntlProvider
                messages={messageEducation[locale.getLocale()]}
                locale={locale.getLocale()}
                defaultLocale={LOCALES.ENGLISH}
            >                <div className={"center_container"}>
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
                        <div style={{ marginTop: "20px"}}>
                            <EducationTable
                                row={5}
                            />
                        </div>
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
};

export default Education;
