import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Form } from "react-bootstrap";
import { LOCALES } from "../../i18n/Locale";
import ModalWindow from "../AdminSlider/ModalWindow";
import SliderTable from "../EditableTable/SliderTable";

const AdminSlider = observer(() => {
    const [lang, setLang] = useState("en-US");
    const columns = [
        { field: "id", fieldName: "#" },
        { field: "image", fieldName: "Image" },
        { field: "title", fieldName: "Title" },
        { field: "subtitle", fieldName: "SubTitle" },
        { field: "url", fieldName: "URL" },
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
                    <Button
                        variant="primary"
                        onClick={handleShow}
                        disabled={isLoad}
                    >
                        Create Slide
                    </Button>
                </div>
                <ModalWindow
                    show={show}
                    type={"create"}
                    isLoad={isLoad}
                    setIsLoad={setIsLoad}
                    handleClose={handleClose}
                />
            </div>
            <div className={"news_panel"}>
                <div>
                    <SliderTable
                        columns={columns}
                        language={lang}
                        setIsLoad={setIsLoad}
                    />
                </div>
            </div>
        </div>
    );
});

export default AdminSlider;