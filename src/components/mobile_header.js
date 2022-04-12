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
                        <a href="/about-us">
                            <FormattedMessage id={"about_us"} />
                        </a>
                    </li>
                    <li>
                        <a href="/sectors">
                            <FormattedMessage id={"sectors"} />
                        </a>
                    </li>
                    <li>
                        <a href="/service" id={"services"}>
                            <FormattedMessage id={"services"} />
                        </a>
                    </li>
                    <li>
                        <a href="/education">
                            <FormattedMessage id={"education"} />
                        </a>
                    </li>
                    <li>
                        <a href="/news">
                            <FormattedMessage id={"news"} />
                        </a>
                    </li>
                    <li>
                        <a href="/careers">
                            <FormattedMessage id={"careers"} />
                        </a>
                    </li>
                    <li>
                        <a href="/contacts">
                            <FormattedMessage id={"contact"} />
                        </a>
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
