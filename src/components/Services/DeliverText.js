import React from "react";
import { FormattedMessage } from "react-intl";

const DeliverText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"deliver_title"} />
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage
                        id={"project_and_contract_management_title"}
                    />
                </div>
                <p>
                    <FormattedMessage id={"project_and_contract_management"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"construction_supervision_title"} />
                </div>
                <p>
                    <FormattedMessage id={"construction_supervision"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"testing_and_commissioning_title"} />
                </div>
                <p>
                    <FormattedMessage id={"testing_and_commissioning"} />
                </p>
            </div>
        </div>
    );
};

export default DeliverText;