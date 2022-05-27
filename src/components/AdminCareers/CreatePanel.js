import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { LOCALES } from "../../i18n/Locale";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CreatePanel = ({data}) => {
    const [newCareers, setNewCareers] = useState(data);
    useEffect(() => {
        setNewCareers(data);
    }, [data]);
    const [language, setLang] = useState("en-US");
    const [titleEdit, setTitleEdit] = useState("");
    const [descriptionEdit, setDescriptionEdit] = useState("");
    const [workScheduleEdit, setWorkScheduleEdit] = useState("");
    const [salaryEdit, setSalaryEdit] = useState("");
    const [isChange, setChange] = useState(true);
    useEffect(() => {
        setTitleEdit(newCareers.title[language]);
        setDescriptionEdit(newCareers.description[language]);
        setWorkScheduleEdit(newCareers.workSchedule[language]);
        setSalaryEdit(newCareers.salary[language]);
    }, [language,isChange]);
    const handleChangeText = (e) => {
        const { name: fieldName, value } = e.target;
        let obj = newCareers;
        switch (fieldName)
        {
            case "title":
                setTitleEdit(value)
                break;
            case "description":
                setDescriptionEdit(value)
                break;
            case "workSchedule":
                setWorkScheduleEdit(value);
                break;
            case "salary":
                setSalaryEdit(value);
                break;
        }
        obj[fieldName][language] = value;
        setNewCareers(obj);
    };
    const handleChangeLanguage = (e) => {
        setLang(e.target.value);
    };
    const [date,setDate] = useState(null);
    const handleChangeDate = (date)=>{
        setDate(date)
        let obj = newCareers;
        obj.date = date;
        setNewCareers(obj);
    }
    return (
        <div>
            <div className={"admin_create_news"}>
                <div>
                    <div className={"topmenu_createmenu"}>
                        <div
                            className="lang"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            {Object.keys(LOCALES).map((_language, key) => {
                                return (
                                    <Form.Check inline key={key}>
                                        <Form.Check.Input
                                            type={"radio"}
                                            name={"group1"}
                                            value={LOCALES[_language]}
                                            checked={
                                                LOCALES[_language] === language
                                            }
                                            onClick={(e) => {
                                                handleChangeLanguage(e);
                                                setChange(!isChange);
                                            }}
                                        />
                                        <Form.Check.Label
                                            style={{
                                                alignSelf: "center",
                                                marginLeft: "5px",
                                            }}
                                        >
                                            {_language}
                                        </Form.Check.Label>
                                    </Form.Check>
                                );
                            })}
                        </div>
                        <DatePicker
                            selected={date}
                            onChange={handleChangeDate}
                            className={"text_title_send"}
                            withPortal
                            dateFormat={"dd.MM.yyyy"}
                            closeOnScroll={true}
                            isClearable
                            placeholderText={"Date"}/>
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={titleEdit}
                            name={"title"}
                            placeholder={"Title"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={workScheduleEdit}
                            name={"workSchedule"}
                            placeholder={"Work Schedule"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={salaryEdit}
                            name={"salary"}
                            placeholder={"Salary"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <textarea
                            className={"text_area_news"}
                            placeholder={"Description"}
                            name={"description"}
                            value={descriptionEdit}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};
export default CreatePanel;