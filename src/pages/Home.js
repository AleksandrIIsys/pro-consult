import Header from "../Models/Header";
import MainSlider from "../Models/MainSlider";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import FooterTest from "../Models/FooterTest";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../components/mobile_header";
import {MessageHeader} from "../i18n/MessageHeader";
import {LOCALES} from "../i18n/Locale";
import {IntlProvider} from "react-intl";
import {observer} from "mobx-react-lite";

const Home =observer(({ currentLocale, handleChangeLocale }) => {
    const breadcrumbs = useBreadcrumbs();
    console.log(breadcrumbs);
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    return (
        <div>
            <IntlProvider
                messages={MessageHeader[currentLocale]}
                locale={currentLocale}
                defaultLocale={LOCALES.ENGLISH}
            >
            {isMobile ? (
                <MobileHeader
                    currentLocale={currentLocale}
                    handleChangeLocale={handleChangeLocale}
                />
            ) : (
                <Header
                    currentLocale={currentLocale}
                    handleChangeLocale={handleChangeLocale}
                />
            )}
            </IntlProvider>
            <div className={"main"}>
                <Outlet></Outlet>
            </div>
            <FooterTest />
        </div>
    );
});

export default Home;
