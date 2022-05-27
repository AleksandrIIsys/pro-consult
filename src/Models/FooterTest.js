import React, {useContext} from 'react';
import {LOCALES} from "../i18n/Locale";
import {FormattedMessage, IntlProvider} from "react-intl";
import {messageFooter} from "../i18n/MessageFooter";
import {Context} from "../index";
import { NavLink } from "react-router-dom";

const FooterTest = () => {
    const {locale} = useContext(Context)
    return (
        <footer>
            <div className="footer__copyright">
                <IntlProvider
                    messages={messageFooter[locale.getLocale()]}
                    locale={locale.getLocale()}
                    defaultLocale={LOCALES.ENGLISH}
                >
                    <div className={"container"}>
                        <div>
                            <div className={"rofl"}>
                                <div className="footer__sitemap">
                                    <NavLink to={"/about-us"}>
                                        <FormattedMessage id={"who_we_are"} />
                                    </NavLink>
                                    <NavLink to={"/sectors"}>
                                        <FormattedMessage id={"sectors"} />
                                    </NavLink>
                                    <NavLink to={"/services"}>
                                        <FormattedMessage id={"service"} />
                                    </NavLink>
                                    <NavLink to={"/education"}>
                                        <FormattedMessage id={"education"} />
                                    </NavLink>
                                    <NavLink to={"/news"}>
                                        <FormattedMessage id={"news"} />
                                    </NavLink>
                                    <NavLink to={"/careers"}>
                                        <FormattedMessage id={"careers"} />
                                    </NavLink>
                                    <NavLink to={"/contacts"}>
                                        <FormattedMessage id={"contact"} />
                                    </NavLink>
                                </div>

                                <div className="footer__contacts">
                                    <div className="header__phone">
                                        +998 (90) 788-66-47
                                    </div>
                                    <div className="header__mobile">
                                        +998 (90) 999-44-73
                                    </div>
                                    <div className="header__emaiL">
                                        info@pro-consult.uz
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"copyright__text"}>
                            C. Copyright {new Date().getFullYear()}. All the
                            right reserved by PCC.
                        </div>
                    </div>
                </IntlProvider>
            </div>
        </footer>
    );
};

export default FooterTest;