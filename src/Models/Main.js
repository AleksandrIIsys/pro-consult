import React from 'react';
import MainAbout from "./MainAbout";
import MainNews from "./MainNews";
import MainCapabilities from "./MainCapabilities";
import MainClients from "./MainClients";
import MainPartners from "./MainPartners";
import MainTestimonials from "./MainTestimonials";
import {observer} from "mobx-react-lite";

const Main = observer(() => {
    return (
        <main>
            <MainAbout></MainAbout>
            <MainNews></MainNews>
            <MainCapabilities></MainCapabilities>
            <MainClients ></MainClients>
            <MainPartners></MainPartners>
            <MainTestimonials></MainTestimonials>
        </main>
    );
});

export default Main;