import React from 'react';
import FooterTest from "../Models/FooterTest";
import Main from "../Models/Main";
import Footer from "../Models/Footer";
import MainSlider from "../Models/MainSlider";

const MainPage = ({currentLocale, handleChangeLocale}) => {
    return (
        <div>
            <MainSlider></MainSlider>
            <Main currentLocale={currentLocale} handleChangeLocale={handleChangeLocale}></Main>
        </div>
    );
};

export default MainPage;