import React from "react";
import { FormattedMessage } from "react-intl";

const ProcurementText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"procurement_title"} />
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage
                        id={"preparation_of_bidding_documents_title"}
                    />
                </div>
                <p>
                    <FormattedMessage id={"preparation_of_bidding_documents"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"tendering_support_title"} />
                </div>
                <p>
                    <FormattedMessage id={"tendering_support"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"advising_on_logistics_title"} />
                </div>
                <p>
                    <FormattedMessage id={"advising_on_logistics"} />
                </p>
            </div>
        </div>
    );
};

export default ProcurementText;
