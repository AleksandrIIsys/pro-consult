import Header from "../Models/Header";
import MainSlider from "../Models/MainSlider";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import FooterTest from "../Models/FooterTest";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../components/mobile_header";

function Home({ currentLocale, handleChangeLocale }) {
    const breadcrumbs = useBreadcrumbs();
    console.log(breadcrumbs);
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    return (
        <div>
            {isMobile ? (
                <MobileHeader
                    currentLocale={currentLocale}
                    handleChangeLocale={handleChangeLocale}
                ></MobileHeader>
            ) : (
                <Header
                    currentLocale={currentLocale}
                    handleChangeLocale={handleChangeLocale}
                ></Header>
            )}
            <div className={"main"}>
                <Outlet></Outlet>
            </div>
            <FooterTest />
        </div>
    );
}

export default Home;
