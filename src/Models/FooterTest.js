import React from 'react';

const FooterTest = () => {
    return (
        <footer>
            <div className="footer__copyright">
                <div className={"container"}>
                    <div>
                    <div className={"rofl"}>

                        <div className="footer__sitemap">
                            <a href="/about-us">Who we are</a>
                            <a href="/sectors">Sectors</a>
                            <a href="/services">Service</a>
                            <a href="/education">Education</a>
                            <a href="/news">News</a>
                            <a href="/careers">Careers</a>
                            <a href="/contacts">Contact</a>
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

            </div>
        </footer>
    );
};

export default FooterTest;