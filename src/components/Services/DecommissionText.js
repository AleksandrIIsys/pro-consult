import React from "react";
import { FormattedMessage } from "react-intl";

const DecommissionText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"decommission_title"} />
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage
                        id={"decommissioning_and_closure_title"}
                    />
                </div>
                <p>
                    <FormattedMessage id={"decommissioning_and_closure"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"rehabilitation_title"} />
                </div>
                <p>
                    <FormattedMessage id={"rehabilitation"} />
                </p>
            </div>
        </div>
    );
};

export default DecommissionText;
