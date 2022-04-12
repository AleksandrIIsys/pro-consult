import React, { useContext } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import Breadcrumbs from "../components/Breadcrumbs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { LOCALES } from "../i18n/Locale";
import { messageContacts } from "../i18n/MessageContacts";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Context } from "../index";

const Contacts = () => {
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    const { locale } = useContext(Context);
    return (
        <div>
            <IntlProvider
                messages={messageContacts[locale.getLocale()]}
                locale={locale.getLocale()}
                defaultLocale={LOCALES.ENGLISH}
            >
                <img src={"/image/banner.png"} style={{ width: "100%" }}></img>
                <div className={"center_container"}>
                    <div className="container">
                        <Breadcrumbs />
                        <span className={"about__title"}>
                            <FormattedMessage id={"contacts"} />
                        </span>
                        <div className="location">
                            <div className="textLocation">
                                <p>
                                    <FaMapMarkerAlt
                                        style={{ paddingRight: "6px" }}
                                    ></FaMapMarkerAlt>
                                    <FormattedMessage id={"address"} />
                                </p>
                                <p>
                                    <div className="header__phone">
                                        +998 (71) 123-45-67
                                    </div>
                                </p>
                                <p>
                                    <div className="header__mobile">
                                        +998 (90) 123-45-67
                                    </div>
                                </p>
                                <p>
                                    <div className="header__emaiL">
                                        info@pro-consult.uz
                                    </div>
                                </p>
                            </div>
                            <div className="mapLocation">
                                <YMaps>
                                    <Map
                                        defaultState={{
                                            center: [41.327289, 69.333528],
                                            zoom: 16,
                                        }}
                                        height={isMobile ? 150 : 260}
                                        width={isMobile ? 310 : 660}
                                    >
                                        <Placemark
                                            geometry={[41.327289, 69.333528]}
                                        />
                                    </Map>
                                </YMaps>
                            </div>
                        </div>
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
};

export default Contacts;