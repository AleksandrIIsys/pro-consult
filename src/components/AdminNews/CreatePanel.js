import React, { useCallback, useEffect, useState } from "react";
import { LOCALES } from "../../i18n/Locale";
import { useDropzone } from "react-dropzone";
import { Form } from "react-bootstrap";
import Editor from "../Editor";

const CreatePanel = (props) => {
    const [newNews, setNewNews] = useState(props.data);
    useEffect(() => {
        setNewNews(props.data);
    }, [props.data]);
    const [language, setLang] = useState("ru-RU");
    const [haveIMG, setHAVE] = useState(props.data.image !== "");
    const [url, setURL] = useState(
        props.data.image !== "" ? props.data.image : ""
    );
    const setImage = props.setImage;
    const [titleEdit, setTitleEdit] = useState("");
    const [textEdit, setTextEdit] = useState(props.data.text[language]);
    const [isChange, setChange] = useState(true);
    const onDrop = useCallback(async (acceptedFiles) => {
        setHAVE(true);
        setImage(acceptedFiles[0]);
        const filereader = new FileReader();
        filereader.onload = (file) => {
            setURL(file.target.result);
        };
        filereader.readAsDataURL(acceptedFiles[0]);
    }, []);
    useEffect(() => {
        setTitleEdit(newNews.title[language]);
        setTextEdit(newNews.text[language]);
    }, [language, isChange]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/jpeg,image/png,image/jpg",
    });
    useEffect(() => {
        let object = newNews;
        newNews.text[language] = textEdit;
        setNewNews(object);
    }, [textEdit]);
    const handleChangeTitle = (e) => {
        const { name: fieldName, value } = e.target;
        let obj = newNews;
        obj[fieldName][language] = value;
        setNewNews(obj);
        setChange(!isChange);
    };
    const handleChangeLanguage = (e) => {
        setLang(e.target.value);
    };
    return (
        <div>
            <div className={"admin_create_news"}>
                <div>
                    <div style={{ cursor: "pointer" }} {...getRootProps()}>
                        <input {...getInputProps()} />

                        {haveIMG ? (
                            <img
                                src={url}
                                className={"admin_create_news-image"}
                            />
                        ) : isDragActive ? (
                            <p className={"admin_create_news-image"}>
                                Drop the files here ...
                            </p>
                        ) : (
                            <p className={"admin_create_news-image"}>
                                Drag 'n' drop some files here, or click to
                                select files...
                            </p>
                        )}
                    </div>
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
                            value={titleEdit}
                            name={"title"}
                            placeholder={"Title news"}
                            onChange={(e) => {
                                handleChangeTitle(e);
                            }}
                        />
                    </div>
                </div>
                <Editor textDefault={textEdit} setTextEdit={setTextEdit} />
            </div>
        </div>
    );
};

export default CreatePanel;
