import React from 'react';
import {FormattedMessage} from "react-intl";
import {HashLink as Link} from "react-router-hash-link";
import {NavLink} from "react-router-dom";
import LangSelector from "./LangSelector";

const MobileHeader = ({ currentLocale, handleChangeLocale }) => {
    return (
        <div className={"header__content"}>
            <div className="header__content-logo">
                <NavLink to={"/"}>
                    <img src="/image/logo.png" alt="" />
                </NavLink>
            </div>
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li><a href="/about-us">About</a></li>
                            <li><a href="/sectors">Sectors</a></li>
                            <li><a href="/service">Service</a></li>
                            <li><a href="/education">Education</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/contacts">Contacts</a></li>
                            <li><LangSelector handleChangeLocale={handleChangeLocale} currentLocale={currentLocale}></LangSelector></li>
                        </ul>
                    </div>
        </div>
    );
};

export default MobileHeader;