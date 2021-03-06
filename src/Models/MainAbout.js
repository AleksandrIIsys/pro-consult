import React from 'react';
import {FormattedMessage} from "react-intl";
import { NavLink } from "react-router-dom";

const MainAbout = () => {
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
                        <NavLink className="about__link" to="/about-us"><FormattedMessage id={"more_info"}/></NavLink>
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
                                <div className="about__item__btn"><NavLink to="/services"><FormattedMessage id={"more_info"}/></NavLink></div>
                            </div>
                            <div className="about__item">
                                <div className="about-img"><img src="../image/about/about-2.png" alt=""/></div>
                                <div className="about__item-title">
                                    <FormattedMessage id={'about_item_title_sectors'}/>
                                </div>
                                <div className="about__item-text">
                                    <FormattedMessage id={'about_item_text_sectors'}/>
                                </div>
                                <div className="about__item__btn"><NavLink to="/sectors"><FormattedMessage id={"more_info"}/></NavLink></div>
                            </div>
                            <div className="about__item">
                                <div className="about-img"><img src="../image/about/about-3.svg" alt=""/></div>
                                <div className="about__item-title">
                                    <FormattedMessage id={'about_item_title_education'}/>
                                </div>
                                <div className="about__item-text">
                                    <FormattedMessage id={'about_item_text_education'}/>
                                </div>
                                <div className="about__item__btn"><NavLink to="/education"><FormattedMessage id={"more_info"}/></NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MainAbout;