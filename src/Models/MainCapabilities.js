import React from 'react';
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

const MainCapabilities = () => {
    return (
        <div className="capabilities">
            <div className="container">
                <div className="capabilities__title">
                    <FormattedMessage id={"capabilities_title"}/>
                </div>
                <div className="capabilities__items">

                    <div className="capabilities__item">
                        <a href={"/services/plan"}>
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_plan"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-1.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_plan"}/>
                            </div>
                        </a>

                    </div>
                    <div className="capabilities__item">
                        <a href={""}>
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_consulting"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-2.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_consulting"}/>
                            </div>
                        </a>
                    </div>
                    <div className="capabilities__item">
                        <a href={""}>
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_procurement"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-3.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_procurement"}/>
                            </div>
                        </a>
                    </div>
                    <div className="capabilities__item">
                        <a href={""}>
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_project_supervision"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-4.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_project_supervision"}/>                            </div>
                        </a>
                    </div>
                    <div className="capabilities__item">
                        <a href={""}>
                        <div className="capabilities__item__title">
                            <FormattedMessage id={"capabilities_item_title_education"}/>
                        </div>
                        <img src="../image/capabilities/capabilities-5.jpg" alt="" className="capabilities__img"/>

                            <div className="capabilities__item__text">
                                <FormattedMessage id={"capabilities_item_text_education"}/>                            </div>
                        </a>
                    </div>
                </div>
                <div className=" capabilities__item__btn"><a href="/services"><FormattedMessage id={'read_more_capabilities'}/></a>
                </div>
            </div>
        </div>
    );
};

export default MainCapabilities;