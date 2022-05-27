import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { LOCALES } from "../../i18n/Locale";
import ModalWindow from "./ModalWindow";
import CareersTable from "../EditableTable/CareersTable";

const AdminCareers = () => {
    const [lang, setLang] = useState("en-US");
    const columns = [
        { field: "id", fieldName: "#" },
        { field: "title", fieldName: "Title" },
        { field: "description", fieldName: "Description" },
        { field: "workSchedule", fieldName: "Work Schedule" },
        { field: "salary", fieldName: "Salary" },
        { field: "date", fieldName: "Date" },
    ];
    const handleChangeLanguage = (e) => {
        setLang(e.target.value);
    };
    let isChange = false;
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const [isLoad, setIsLoad] = useState(false);
    return (
        <div className={"admin_news"}>
            <div className={"top_panel"}>
                <Form>
                    <div
                        className="lang"
                        style={{ display: "flex", gap: "20px" }}
                    >
                        {Object.keys(LOCALES).map((language, key) => {
                            return (
                                <Form.Check
                                    key={key}
                                    type={"radio"}
                                    name={"group1"}
                                    label={language}
                                    checked={LOCALES[language] === lang}
                                    value={LOCALES[language]}
                                    onClick={(e) => {
                                        handleChangeLanguage(e);
                                        isChange = !isChange;
                                    }}
                                />
                            );
                        })}
                    </div>
                </Form>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                        className="loader"
                        style={{ display: isLoad ? "" : "none" }}
                    />
                    <Button
                        variant="primary"
                        onClick={handleShow}
                        disabled={isLoad}
                    >
                        Create Career
                    </Button>
                </div>
                <ModalWindow
                    show={show}
                    type={"create"}
                    handleClose={handleClose}
                    isLoad={isLoad}
                    setIsLoad={setIsLoad}
                />
            </div>
            <div className={"news_panel"}>
                <div>
                    <CareersTable
                        columns={columns}
                        language={lang}
                        setIsLoad={setIsLoad}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminCareers;