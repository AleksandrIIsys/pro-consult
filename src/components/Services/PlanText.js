import React from "react";
import { FormattedMessage } from "react-intl";

const PlanText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"plan_title"} />
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"master_planning_title"} />
                </div>
                <p>
                    <FormattedMessage id={"master_planning"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"market_research_title"} />
                </div>
                <p>
                    <FormattedMessage id={"market_research"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"economic_and_financial_title"} />
                </div>
                <p>
                    <FormattedMessage id={"economic_and_financial"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"risk_analyses_title"} />
                </div>
                <p>
                    <FormattedMessage id={"risk_analyses"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage
                        id={"feasibility_studies_and_business_plans_title"}
                    />
                </div>
                <p>
                    <FormattedMessage
                        id={"feasibility_studies_and_business_plans"}
                    />
                </p>
            </div>
        </div>
    );
};

export default PlanText;
