import React from "react";
import {FormattedMessage} from "react-intl";

const TelecommunicationText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}><FormattedMessage id={"telecommunication_title"}/></div>
            <div className={"part_block_text"}>
                <p><FormattedMessage id={"telecommunication"}/>
                </p>
            </div>
        </div>
    );
};

export default TelecommunicationText;