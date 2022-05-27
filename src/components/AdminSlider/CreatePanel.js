import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { LOCALES } from "../../i18n/Locale";
import { Form } from "react-bootstrap";
import DropImage from "../DropImage";

const CreatePanel =(props) => {
    const [newSlide, setNewSlide] = useState(props.data);
    useEffect(() => {
        setNewSlide(props.data);
    }, [props.data]);
    const [language, setLang] = useState("en-US");
    const setImage = props.setImage;
    const [titleEdit, setTitleEdit] = useState("");
    const [subTitleEdit, setSubTitleEdit] = useState("");
    const [urlEdit, setUrlEdit] = useState("");
    const [isChange, setChange] = useState(true);
    useEffect(() => {
        setTitleEdit(newSlide.title[language]);
        setSubTitleEdit(newSlide.subtitle[language]);
        setUrlEdit(newSlide.url);
    }, [language,isChange]);
    const handleChangeText = (e) => {
        const { name: fieldName, value } = e.target;
        let obj = newSlide;
        switch (fieldName)
        {
            case "title":
                setTitleEdit(value)
                break;
            case "subtitle":
                setSubTitleEdit(value)
                break;
        }
        obj[fieldName][language] = value;
        setNewSlide(obj);
    };
    const handleChangeUrl = (e) =>{
        const {value} = e.target;
        let obj = newSlide
        setUrlEdit(value);
        obj.url = value;
        setNewSlide(obj)
    }
    const handleChangeLanguage = (e) => {
        setLang(e.target.value);
    };
    return (
        <div>
            <div className={"admin_create_news"}>
                <div>
                   <DropImage setImage={setImage} image={props.data.image}/>
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

                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={titleEdit[language]}
                            name={"title"}
                            placeholder={"title"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={subTitleEdit[language]}
                            name={"subtitle"}
                            placeholder={"subtitle"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <input
                            className={"text_title_send"}
                            type={"text"}
                            placeholder={"url"}
                            name={"url"}
                            value={urlEdit}
                            onChange={(e) => {
                                handleChangeUrl(e);
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreatePanel;