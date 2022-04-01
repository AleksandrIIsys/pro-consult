import React from "react";
import { LOCALES } from "../i18n/Locale";
import { FormattedMessage, IntlProvider } from "react-intl";
import { MessageHeader } from "../i18n/MessageHeader";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import LangSelector from "../components/LangSelector";

const Header = ({ currentLocale, handleChangeLocale }) => {

    return (
        <div className="header__content">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__content-logo">
                            <NavLink to={"/"}>
                                <img src="/image/logo.png" alt="" />
                            </NavLink>
                        </div>
                        <nav>
                            <div className="header__btn-menu">
                                <span className="icon-bars"></span>
                            </div>
                            <ul className="topmenu">
                                <li>
                                    <div className="active">
                                        <FormattedMessage id={"who_we_are"} />
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <Link to={"/about-us#about-us"}>
                                                <FormattedMessage
                                                    id={"about_us"}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/about-us#foundation"}>
                                                <FormattedMessage
                                                    id={"foundation"}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/about-us#partners"}>
                                                <FormattedMessage
                                                    id={"partners"}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/about-us#membership"}>
                                                <FormattedMessage
                                                    id={"membership"}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/about-us#polices"}>
                                                <FormattedMessage
                                                    id={"police"}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/about-us#references"}>
                                                <FormattedMessage
                                                    id={"references"}
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div>
                                        <FormattedMessage id={"what_we_do"} />
                                    </div>
                                    <ul className="submenu">
                                        <li>
                                            <a href="/sectors">
                                                <FormattedMessage
                                                    id={"sectors"}
                                                />
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <Link
                                                        to={
                                                            "/sectors/waterandenvironment"
                                                        }
                                                    >
                                                        <FormattedMessage
                                                            id={
                                                                "water_and_environment"
                                                            }
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={
                                                            "/sectors/energyandresouces"
                                                        }
                                                    >
                                                        <FormattedMessage
                                                            id={
                                                                "energy_and_resources"
                                                            }
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={
                                                            "/sectors/transport"
                                                        }
                                                    >
                                                        <FormattedMessage
                                                            id={"transport"}
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={
                                                            "/sectors/telecommunication"
                                                        }
                                                    >
                                                        <FormattedMessage
                                                            id={
                                                                "telecommunication"
                                                            }
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/services">
                                                <FormattedMessage
                                                    id={"services"}
                                                />
                                            </a>
                                            <ul className="submenu">
                                                <li>
                                                    <Link
                                                        to={
                                                            "services/initiation-and-conception"
                                                        }
                                                    >
                                                        Initiation & Conception
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"services/plan"}>
                                                        <FormattedMessage
                                                            id={"plan"}
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={"services/design"}
                                                    >
                                                        <FormattedMessage
                                                            id={"design"}
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={
                                                            "services/procurement"
                                                        }
                                                    >
                                                        Procurement
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={"services/deliver"}
                                                    >
                                                        <FormattedMessage
                                                            id={"deliver"}
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={
                                                            "services/decommission"
                                                        }
                                                    >
                                                        <FormattedMessage
                                                            id={"decommission"}
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/education">
                                                <FormattedMessage
                                                    id={"education"}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/news">
                                        <FormattedMessage id={"news"} />
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers">
                                        <FormattedMessage id={"careers"} />
                                        <span className="fa fa-angle-down"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/contacts">
                                        <FormattedMessage id={"contact"} />{" "}
                                        <span className="fa fa-angle-down"></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <LangSelector
                            handleChangeLocale={handleChangeLocale}
                            currentLocale={currentLocale}
                        ></LangSelector>
                    </div>
                </div>
        </div>
    );
};

export default Header;