import React from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

const MainCapabilities = () => {
    return (
        <div className="capabilities">
            <div className="container">
                <div className="capabilities__title">
                    <FormattedMessage id={"capabilities_title"} />
                </div>
                <div className="capabilities__items">
                    <div className="capabilities__item">
                        <NavLink to={"/services/plan"}>
                            <div className="capabilities__item__title">
                                <FormattedMessage
                                    id={"capabilities_item_title_plan"}
                                />
                            </div>
                            <img
                                src="../image/capabilities/capabilities-1.jpg"
                                alt=""
                                className="capabilities__img"
                            />

                            <div className="capabilities__item__text">
                                <FormattedMessage
                                    id={"capabilities_item_text_plan"}
                                />
                            </div>
                        </NavLink>
                    </div>
                    <div className="capabilities__item">
                        <NavLink to={"/about-us"}>
                            <div className="capabilities__item__title">
                                <FormattedMessage
                                    id={"capabilities_item_title_consulting"}
                                />
                            </div>
                            <img
                                src="../image/capabilities/capabilities-2.jpg"
                                alt=""
                                className="capabilities__img"
                            />

                            <div className="capabilities__item__text">
                                <FormattedMessage
                                    id={"capabilities_item_text_consulting"}
                                />
                            </div>
                        </NavLink>
                    </div>
                    <div className="capabilities__item">
                        <NavLink to={"/services/procurement"}>
                            <div className="capabilities__item__title">
                                <FormattedMessage
                                    id={"capabilities_item_title_procurement"}
                                />
                            </div>
                            <img
                                src="../image/capabilities/capabilities-3.jpg"
                                alt=""
                                className="capabilities__img"
                            />

                            <div className="capabilities__item__text">
                                <FormattedMessage
                                    id={"capabilities_item_text_procurement"}
                                />
                            </div>
                        </NavLink>
                    </div>
                    <div className="capabilities__item">
                        <NavLink to={"/about-us"}>
                            <div className="capabilities__item__title">
                                <FormattedMessage
                                    id={
                                        "capabilities_item_title_project_supervision"
                                    }
                                />
                            </div>
                            <img
                                src="../image/capabilities/capabilities-4.jpg"
                                alt=""
                                className="capabilities__img"
                            />

                            <div className="capabilities__item__text">
                                <FormattedMessage
                                    id={
                                        "capabilities_item_text_project_supervision"
                                    }
                                />{" "}
                            </div>
                        </NavLink>
                    </div>
                    <div className="capabilities__item">
                        <NavLink to={"/education"}>
                            <div className="capabilities__item__title">
                                <FormattedMessage
                                    id={"capabilities_item_title_education"}
                                />
                            </div>
                            <img
                                src="../image/capabilities/capabilities-5.jpg"
                                alt=""
                                className="capabilities__img"
                            />

                            <div className="capabilities__item__text">
                                <FormattedMessage
                                    id={"capabilities_item_text_education"}
                                />{" "}
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className=" capabilities__item__btn">
                    <NavLink to="/services">
                        <FormattedMessage id={"read_more_capabilities"} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainCapabilities;