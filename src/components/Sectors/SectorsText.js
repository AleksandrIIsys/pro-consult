import React from 'react';
import {FormattedMessage} from "react-intl";

const SectorsText = () => {
    return (
        <div className={"block__text"}>
                <div className={"services_main_title"}><FormattedMessage id={"sectors_title"}/></div>
                <p><FormattedMessage id={"sectors_part1"}/>
                </p>
                <p><FormattedMessage id={"sectors_part2"}/>
                </p>
                <p><FormattedMessage id={"sectors_part3"}/>
                </p>
                <p><FormattedMessage id={"sectors_part4"}/></p>
        </div>
    );
};

export default SectorsText;