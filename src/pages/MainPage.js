import React from "react";
import MainSlider from "../Models/MainSlider";
import MainAbout from "../Models/MainAbout";
import MainNews from "../Models/MainNews";
import MainCapabilities from "../Models/MainCapabilities";
import MainClients from "../Models/MainClients";
import MainPartners from "../Models/MainPartners";
import MainTestimonials from "../Models/MainTestimonials";

const MainPage = () => {
    return (
        <div>
            <MainAbout></MainAbout>
            <MainNews></MainNews>
            <MainCapabilities></MainCapabilities>
            <MainClients></MainClients>
            <MainPartners></MainPartners>
            <MainTestimonials></MainTestimonials>
        </div>
    );
};

export default MainPage;
