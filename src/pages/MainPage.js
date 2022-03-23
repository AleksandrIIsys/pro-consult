import React from 'react';
import FooterTest from "../Models/FooterTest";
import Main from "../Models/Main";
import Footer from "../Models/Footer";

const MainPage = ({currentLocale, handleChangeLocale}) => {
    return (
        <div>
            <Main currentLocale={currentLocale} handleChangeLocale={handleChangeLocale}></Main>
        </div>
    );
};

export default MainPage;