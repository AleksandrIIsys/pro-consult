import React from "react";
import { FormattedMessage } from "react-intl";

const DesignText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"design_title"} />
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"detailed_and_front_title"} />
                </div>
                <p>
                    <FormattedMessage id={"detailed_and_front"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage
                        id={"interior_and_exterior_design_title"}
                    />
                </div>
                <p>
                    <FormattedMessage id={"interior_and_exterior_design"} />
                </p>
            </div>
        </div>
    );
};

export default DesignText;