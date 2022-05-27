import React from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import LangSelector from "./LangSelector";
import { observer } from "mobx-react-lite";

const MobileHeader = observer(({ currentLocale, handleChangeLocale }) => {
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
                    <li>
                        <NavLink to="/about-us">
                            <FormattedMessage id={"about_us"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sectors">
                            <FormattedMessage id={"sectors"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" id={"services"}>
                            <FormattedMessage id={"services"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/education">
                            <FormattedMessage id={"education"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">
                            <FormattedMessage id={"news"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/careers">
                            <FormattedMessage id={"careers"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">
                            <FormattedMessage id={"contact"} />
                        </NavLink>
                    </li>
                    <li>
                        <LangSelector
                            handleChangeLocale={handleChangeLocale}
                            currentLocale={currentLocale}
                        ></LangSelector>
                    </li>
                </ul>
            </div>
        </div>
    );
});

export default MobileHeader;
