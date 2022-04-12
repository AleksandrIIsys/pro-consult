import React from 'react';
import {FormattedMessage} from "react-intl";

const ServicesText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}><FormattedMessage id={"services_title"}/></div>
            <p><FormattedMessage id={"services_part1"}/></p>
            <p><FormattedMessage id={"services_part2"}/></p>
            <p><FormattedMessage id={"services_part3"}/></p>
            <p><FormattedMessage id={"services_part4"}/></p>
        </div>
    );
};

export default ServicesText;