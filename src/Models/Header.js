import React from 'react';
import {LOCALES} from "../i18n/Locale";
import {FormattedMessage, IntlProvider} from "react-intl";
import {MessageHeader} from "../i18n/MessageHeader";
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Header = ({currentLocale,handleChangeLocale}) => {
    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN },
        { name: 'Узбек', code: LOCALES.UZBEK },
    ]
    return (
        <div className="header__content">
            <IntlProvider messages={MessageHeader[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
                <div className="container">
                    <div className="header__inner">
                        <div className="header__content-logo">
                            <NavLink to={'/'}>
                                <img src="../image/logo.png" alt=""/>
                            </NavLink>
                        </div>
                        <nav>
                            <div className="header__btn-menu">
                                <span className="icon-bars"></span>
                            </div>
                            <ul className="topmenu">
                                <li><div className="active">
                                    <FormattedMessage id={"who_we_are"}/><span
                                    className="fa fa-angle-down"></span></div>
                                    <ul className="submenu">
                                        <li><Link to={"/about-us#about-us"}><FormattedMessage id={"about_us"}/></Link></li>
                                        <li><Link to={"/about-us#foundation"}><FormattedMessage id={"foundation"}/></Link></li>
                                        <li><Link to={"/about-us#partners"}><FormattedMessage id={"partners"}/></Link></li>
                                        <li><Link to={"/about-us#membership"}><FormattedMessage id={"membership"}/></Link></li>
                                        <li><Link to={"/about-us#polices"}><FormattedMessage id={"police"}/></Link></li>
                                        <li><Link to={"/about-us#references"}><FormattedMessage id={"references"}/> </Link></li>
                                    </ul>
                                </li>
                                <li><div><FormattedMessage id={"what_we_do"}/><i className="bi bi-caret-right-fill"></i></div>
                                    <ul className="submenu">
                                        <li><a href="/what-we-do/sectors"><FormattedMessage id={"sectors"}/></a>
                                            <ul className="submenu">
                                                <li><Link to={"/what-we-do/sectors#water-environment"}><FormattedMessage id={"water_and_environment"}/></Link></li>
                                                <li><Link to={"/what-we-do/sectors#energy"}><FormattedMessage id={"energy_and_resources"}/></Link></li>
                                                <li><Link to={"/what-we-do/sectors#transport"}><FormattedMessage id={"transport"}/></Link></li>
                                                <li><Link to={"/what-we-do/sectors#telecommunication"}><FormattedMessage id={"telecommunication"}/></Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="/what-we-do/services"><FormattedMessage id={"services"}/></a>
                                            <ul className="submenu">
                                                <li><Link to={"/what-we-do/services#plan"}><FormattedMessage id={"plan"}/></Link></li>
                                                <li><Link to={"/what-we-do/services#design"}><FormattedMessage id={"design"}/></Link></li>
                                                <li><Link to={"/what-we-do/services#delivery"}><FormattedMessage id={"deliver"}/></Link></li>
                                                <li><Link to={"/what-we-do/services#manage"}><FormattedMessage id={"manage"}/></Link></li>
                                                <li><Link to={"/what-we-do/services#decommission"}><FormattedMessage id={"decommission"}/></Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="/what-we-do/education"><FormattedMessage id={"education"}/></a>
                                        </li>
                                    </ul>
                                </li>

                                <li><a href={"/where-we-work"}><FormattedMessage id={"where_we_work"}/><span className="fa fa-angle-down"></span></a>
                                </li>
                                <li><a href="/news"><FormattedMessage id={"news"}/><span className="fa fa-angle-down"></span></a></li>
                                <li><a href=""><FormattedMessage id={"careers"}/><span className="fa fa-angle-down"></span></a></li>
                                <li><a href=""><FormattedMessage id={"contact"}/> <span className="fa fa-angle-down"></span></a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </IntlProvider>
            <div className="lang-menu">
                <select className={'selected-lang'} onChange={handleChangeLocale} defaultValue={currentLocale} defaultChecked={currentLocale}>
                    {languages.map(({ name, code }) => (
                        <option key={code} value={code} >
                            {name}
                        </option>
                    ))}
                </select>
            </div>


        </div>
    );
};

export default Header;