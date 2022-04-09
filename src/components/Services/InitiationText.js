import React from "react";
import { FormattedMessage } from "react-intl";

const InitiationText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"initiation_conception_title"} />
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"initial_planning_title"} />
                </div>
                <p>
                    <FormattedMessage id={"initial_planning"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"conceptualising_title"} />
                </div>
                <p>
                    <FormattedMessage id={"conceptualising"} />
                </p>
            </div>
        </div>
    );
};

export default InitiationText;