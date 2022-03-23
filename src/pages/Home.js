import Header from "../Models/Header";
import MainSlider from "../Models/MainSlider";
import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import FooterTest from "../Models/FooterTest";

function Home({currentLocale,handleChangeLocale}) {
    const breadcrumbs = useBreadcrumbs();
    console.log(breadcrumbs);
    return (
        <div>
            <Header currentLocale={currentLocale} handleChangeLocale={handleChangeLocale}></Header>
            <MainSlider currentLocale={currentLocale}></MainSlider>
            <Outlet></Outlet>
            <FooterTest/>
        </div>
    );
}

export default Home;
