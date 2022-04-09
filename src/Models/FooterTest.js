import React, {useContext} from 'react';
import {messageSectors} from "../i18n/MessageSectors";
import {LOCALES} from "../i18n/Locale";
import {FormattedMessage, IntlProvider} from "react-intl";
import {messageFooter} from "../i18n/MessageFooter";
import {Context} from "../index";

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
                            <a href="/about-us"><FormattedMessage id={"who_we_are"}/></a>
                            <a href="/sectors"><FormattedMessage id={"sectors"}/></a>
                            <a href="/services"><FormattedMessage id={"service"}/></a>
                            <a href="/education"><FormattedMessage id={"education"}/></a>
                            <a href="/news"><FormattedMessage id={"news"}/></a>
                            <a href="/careers"><FormattedMessage id={"careers"}/></a>
                            <a href="/contacts"><FormattedMessage id={"contact"}/></a>
                        </div>

                        <div className="footer__contacts">
                            <div className="header__phone">
                                +998 (71) 123-45-67
                            </div>
                            <div className="header__mobile">
                                +998 (90) 123-45-67
                            </div>
                            <div className="header__emaiL">
                                info@pro-consult.uz
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className={"copyright__text"}>

                        C. Copyright {new Date().getFullYear()}. All the right reserved by PCC.
                    </div>
            </div>
            </IntlProvider>

            </div>
        </footer>
    );
};

export default FooterTest;