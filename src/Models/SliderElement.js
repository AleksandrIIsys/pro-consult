import React from 'react';
import {FormattedMessage} from "react-intl";
import { NavLink } from "react-router-dom";

const SliderElement = (props) => {
    return (
        <div className="slider__item">
            <img className="img-fluid" src={props.slide.image} alt="..." width="100vw"
                 height="20vh"
                 loading="lazy"/>
            <div className="slider__content">
                <div className="container">
                    <div className="slider__title">
                        <FormattedMessage id={"title"}/>
                    </div>
                    <div className="slider__text">
                        <FormattedMessage id={"text"}/>
                    </div>
                    <div className="slider__btn"><NavLink to={props.slide.url}><FormattedMessage id={"moreinfo"}/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderElement;