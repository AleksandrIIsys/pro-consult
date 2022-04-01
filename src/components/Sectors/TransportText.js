import React from "react";
import { FormattedMessage } from "react-intl";

const TransportText = () => {
    return (
        <div className={"block__text"}>
            <div className={"services_main_title"}>
                <FormattedMessage id={"transport"} />
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"airports_title"} />
                </div>
                <p>
                    <FormattedMessage id={"airports"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage
                        id={"intelligent_transport_systems_title"}
                    />
                </div>
                <p>
                    <FormattedMessage id={"intelligent_transport_systems"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"pavement_management_title"} />
                </div>
                <p>
                    <FormattedMessage id={"pavement_management"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage
                        id={"public_transport_management_title"}
                    />
                </div>

                <p>
                    <FormattedMessage id={"public_transport_management"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"railways_and_metro_title"} />
                </div>
                <p>
                    <FormattedMessage id={"railways_and_metro"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"roads_and_highways_title"} />
                </div>
                <p>
                    <FormattedMessage id={"roads_and_highways"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage id={"bridges_and_tunnels_title"} />
                </div>
                <p>
                    <FormattedMessage id={"bridges_and_tunnels"} />
                </p>
            </div>
            <div className={"part_block_text"}>
                <div className={"headtext"}>
                    <FormattedMessage
                        id={"traffic_and_transport_planning_title"}
                    />
                </div>
                <p>
                    <FormattedMessage id={"traffic_and_transport_planning"} />
                </p>
            </div>
        </div>
    );
};

export default TransportText;
