import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { Button, Form, Modal } from "react-bootstrap";
import { LOCALES } from "../../i18n/Locale";
import NewsTable from "../EditableTable/NewsTable";
import ModalWindow from "./ModalWindow";

const AdminNews = observer(() => {
    const { news } = useContext(Context);
    const [lang, setLang] = useState("en-US");
    const columns = [
        { field: "id", fieldName: "#" },
        { field: "image", fieldName: "Image" },
        { field: "title", fieldName: "Title" },
        { field: "date", fieldName: "Date" },
    ];
    let isChange = false;
    const handleChangeLanguage = (e) => {
        setLang(e.target.value);
    };
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
                <Button  variant="primary"
                         onClick={handleShow}
                         disabled={isLoad}>
                    Create News
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
                    <NewsTable
                        columns={columns}
                        language={lang}
                        setIsLoad={setIsLoad}
                    />
                </div>
            </div>
        </div>
    );
});

export default AdminNews;
