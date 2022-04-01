import React from "react";
import { FormattedMessage } from "react-intl";

const WaterText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"water_and_environment_title"} />
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"dams_and_reservoirs_title"} />
                </div>
                <p>
                    <FormattedMessage id={"dams_and_reservoirs"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage
                        id={"environment_planning_and_assessment_title"}
                    />
                </div>
                <p>
                    <FormattedMessage
                        id={"environment_planning_and_assessment"}
                    />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"irrigation_and_melioration_title"} />
                </div>
                <p>
                    <FormattedMessage id={"irrigation_and_melioration"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"desalination_title"} />
                </div>
                <p>
                    <FormattedMessage id={"desalination"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"rivers_title"} />
                </div>
                <p>
                    <FormattedMessage id={"rivers"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"sustainability_title"} />
                </div>
                <p>
                    <FormattedMessage id={"sustainability"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"water_resources_title"} />
                </div>
                <p>
                    <FormattedMessage id={"water_resources"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"water_treatment_title"} />
                </div>
                <p>
                    <FormattedMessage id={"water_treatment"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"water_transmission_title"} />
                </div>
                <p>
                    <FormattedMessage id={"water_transmission"} />
                </p></div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"wastewater_title"} />
                </div>
                <p>
                    <FormattedMessage id={"wastewater"} />
                </p>
            </div>
        </div>
    );
};

export default WaterText;