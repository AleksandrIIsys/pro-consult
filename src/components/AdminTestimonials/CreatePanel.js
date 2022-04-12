import React, {useCallback, useEffect, useRef, useState} from "react";
import { LOCALES } from "../../i18n/Locale";
import { useDropzone } from "react-dropzone";
import { Form } from "react-bootstrap";

const CreatePanel = (props) => {
    const [newTestimonials, setNewTestimonials] = useState(props.data);
    useEffect(() => {
        setNewTestimonials(props.data);
    }, [props.data]);
    const [language, setLang] = useState("en-US");
    const [haveIMG, setHAVE] = useState(props.data.image !== "");
    const [url, setURL] = useState(
        props.data.image !== "" ? props.data.image : ""
    );
    const setImage = props.setImage;
    const [nameEdit, setNameEdit] = useState("");
    const [textEdit, setTextEdit] = useState("");
    const [positionEdit, setPositionEdit] = useState("");
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
        setPositionEdit(newTestimonials.position[language]);
        setNameEdit(newTestimonials.name[language]);
        setTextEdit(newTestimonials.text[language]);
    }, [language,isChange]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept:"image/jpeg,image/png,image/jpg"
    });
    const handleChangeText = (e) => {
        const { name: fieldName, value } = e.target;
        let obj = newTestimonials;
        switch (fieldName)
        {
            case "name":
                setNameEdit(value)
                break;
            case "position":
                setPositionEdit(value)
                break;
            case "text":
                setTextEdit(value);
                break;
        }
        obj[fieldName][language] = value;
        setNewTestimonials(obj);
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
                            value={nameEdit}
                            name={"name"}
                            placeholder={"Name"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={positionEdit}
                            name={"position"}
                            placeholder={"Position"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <textarea
                            className={"text_area_news"}
                            placeholder={"Text"}
                            name={"text"}
                            value={textEdit}
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
