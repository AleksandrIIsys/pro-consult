import Header from "../Models/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import FooterTest from "../Models/FooterTest";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../components/mobile_header";
import { MessageHeader } from "../i18n/MessageHeader";
import { LOCALES } from "../i18n/Locale";
import { IntlProvider } from "react-intl";
import { observer } from "mobx-react-lite";
import MainSlider from "../Models/MainSlider";

const Home = observer(({ currentLocale, handleChangeLocale }) => {
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
                <MainSlider></MainSlider>
                <Outlet></Outlet>
            </div>
            <FooterTest />
        </div>
    );
});

export default Home;
