import React from 'react';
import {FormattedMessage} from "react-intl";
import {useMediaQuery} from "react-responsive";

const MainAbout = () => {
    const isMobile = useMediaQuery({ query: "(max-width:480px)" });
    return (
            <div>
                <div className="about__content">
                    <div className="container">
                        <div className="about__title">
                            <FormattedMessage id={"about_title"}/>
                        </div>
                        <div className="about__text">
                            <FormattedMessage id={"about_text"}/>
                        </div>
                        <a className="about__link" href="/about-us"><FormattedMessage id={"more_info"}/></a>
                        <div className="about__title-sphera">
                            <FormattedMessage id={'about_title_sphera'}/>
                        </div>
                        <div className="about__items">
                            <div className="about__item">
                                <div className="about-img"><img src="../image/about/about-1.svg" alt=""/></div>
                                <div className="about__item-title">
                                    <FormattedMessage id={'about_item_title_services'}/>
                                </div>
                                <div className="about__item-text">
                                    <FormattedMessage id={'about_item_text_services'}/>
                                </div>
                                <div className="about__item__btn"><a href="/services">more info</a></div>
                            </div>
                            <div className="about__item">
                                <div className="about-img"><img src="../image/about/about-2.png" alt=""/></div>
                                <div className="about__item-title">
                                    <FormattedMessage id={'about_item_title_sectors'}/>
                                </div>
                                <div className="about__item-text">
                                    <FormattedMessage id={'about_item_text_sectors'}/>
                                </div>
                                <div className="about__item__btn"><a href="/sectors">more info</a></div>
                            </div>
                            <div className="about__item">
                                <div className="about-img"><img src="../image/about/about-3.png" alt=""/></div>
                                <div className="about__item-title">
                                    <FormattedMessage id={'about_item_title_education'}/>
                                </div>
                                <div className="about__item-text">
                                    <FormattedMessage id={'about_item_text_education'}/>
                                </div>
                                <div className="about__item__btn"><a href="/education">more info</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MainAbout;