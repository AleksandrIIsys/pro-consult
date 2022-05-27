import React, {useCallback, useEffect, useRef, useState} from "react";
import { LOCALES } from "../../i18n/Locale";
import { useDropzone } from "react-dropzone";
import { Form } from "react-bootstrap";
import DropImage from "../DropImage";

const CreatePanel = (props) => {
    const [newPartner, setNewPartner] = useState(props.data);
    useEffect(() => {
        setNewPartner(props.data);
    }, [props.data]);
    const [language, setLang] = useState("en-US");
    const [haveIMG, setHAVE] = useState(props.data.image !== "");
    const [url, setURL] = useState(
        props.data.image !== "" ? props.data.image : ""
    );
    const setImage = props.setImage;
    const [nameEdit, setNameEdit] = useState("");
    const [descriptionEdit, setDescriptionEdit] = useState("");
    const [countryEdit, setCountryEdit] = useState("");
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
        setDescriptionEdit(newPartner.description[language]);
        setNameEdit(newPartner.name[language]);
        setCountryEdit(newPartner.country[language]);
    }, [language,isChange]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept:"image/jpeg,image/png,image/jpg"
    });
    const handleChangeText = (e) => {
        const { name: fieldName, value } = e.target;
        let obj = newPartner;
        switch (fieldName)
        {
            case "name":
                setNameEdit(value)
                break;
            case "country":
                setCountryEdit(value)
                break;
            case "description":
                setDescriptionEdit(value);
                break;
        }
        obj[fieldName][language] = value;
        setNewPartner(obj);
    };
    const handleChangeLanguage = (e) => {
        setLang(e.target.value);
    };
    return (
        <div>
            <div className={"admin_create_news"}>
                <div>
                    <DropImage image={props.data.image} setImage={setImage}/>
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
                            placeholder={"Name of member"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={countryEdit}
                            name={"country"}
                            placeholder={"country"}
                            onChange={(e) => {
                                handleChangeText(e);
                            }}
                        />
                        <textarea
                            className={"text_area_news"}
                            placeholder={"Status member"}
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
