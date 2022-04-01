import React from "react";
import { FormattedMessage } from "react-intl";

const EnergyText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"energy_and_resources_title"} />
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"mining_and_processing_title"} />
                </div>
                <p>
                    <FormattedMessage id={"mining_and_processing"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"hydro_and_thermal_power_title"} />
                </div>
                <p>
                    <FormattedMessage id={"hydro_and_thermal_power"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"renewable_energy_title"} />
                </div>
                <p>
                    <FormattedMessage id={"renewable_energy"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"hybrid_energy_systems_title"} />
                </div>
                <p>
                    <FormattedMessage id={"hybrid_energy_systems"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage
                        id={"transmission_and_distribution_title"}
                    />
                </div>
                <p>
                    <FormattedMessage id={"transmission_and_distribution"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className="headtext">
                    <FormattedMessage id={"energy_storage_title"} />
                </div>
                <p>
                    <FormattedMessage id={"energy_storage"} />
                </p>
            </div>
        </div>
    );
};

export default EnergyText;
