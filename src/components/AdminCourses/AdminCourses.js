import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ModalWindow from "../AdminCourses/ModalWindow";
import { LOCALES } from "../../i18n/Locale";
import NewsTable from "../EditableTable/CoursesTable";
import { Context } from "../../index";
import { fetchCourse } from "../../http/Api";

const AdminCourses = () => {
    const {courses} = useContext(Context)
    const [lang, setLang] = useState("en-US");
    const columns = [
        { field: "id", fieldName: "#" },
        { field: "title", fieldName: "Title" },
        { field: "dateStart", fieldName: "Date Start" },
        { field: "dateEnd", fieldName: "Date End" },
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
    useEffect(() => {
        if (!isLoad) {
            fetchCourse().then((data) => {
                courses.setCourse(data);
            });
        }
    }, [isLoad]);
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
                     onClick={handleShow}>
                Create Course
            </Button>
                </div>
            <ModalWindow
                show={show}
                type={"create"}
                handleClose={handleClose}
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
};

export default AdminCourses;