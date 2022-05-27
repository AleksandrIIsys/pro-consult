import React, { useEffect, useState } from "react";
import Editor from "../Editor";
import DatePicker from "react-datepicker";
import DropImage from "../DropImage";
import { LOCALES } from "../../i18n/Locale";
import { Form } from "react-bootstrap";

const CreatePanel = ({ data, setLicenseImage, setManagerImage,setTeacherFirst,setTeacherThird,setTeacherSecond }) => {
    const [newCourse, setNewCourse] = useState(data);
    useEffect(() => {
        setNewCourse(data);
    }, [data]);
    const [language, setLang] = useState("ru-RU");
    const [isChange, setChange] = useState(true);

    const [textTitle,setTextTitle] = useState(data.title[language])
    const [textMain, setTextMain] = useState(data.text[language]);
    const [textDocument, setTextDocument] = useState(data.document[language]);
    const [textPlace, setTextPlace] = useState(data.place[language]);
    const [textPrice,setTextPrice] = useState(data.price)
    const [nameMN, setNameMN] = useState(data.nameMN[language]);

    const [teacherNameFirst,setTeacherNameFirst] = useState(data.teacherFirst.name[language])
    const [teacherNameSecond,setTeacherNameSecond] = useState(data.teacherSecond.name[language])
    const [teacherNameThird,setTeacherNameThird] = useState(data.teacherThird.name[language])

    const [teacherDescriptionFirst,setTeacherDescriptionFirst] = useState(data.teacherFirst.description[language])
    const [teacherDescriptionSecond,setTeacherDescriptionSecond] = useState(data.teacherSecond.description[language])
    const [teacherDescriptionThird,setTeacherDescriptionThird] = useState(data.teacherThird.description[language])
    useEffect(() => {
        setTextTitle(newCourse.title[language])
        setTextPrice(newCourse.price)
        setNameMN(newCourse.nameMN[language]);
        setTextPlace(newCourse.place[language]);
        setTextMain(newCourse.text[language]);
        setTextDocument(newCourse.document[language]);
        setTeacherNameFirst(newCourse.teacherFirst.name[language])
        setTeacherNameSecond(newCourse.teacherSecond.name[language])
        setTeacherNameThird(newCourse.teacherThird.name[language])
        setTeacherDescriptionFirst(newCourse.teacherFirst.description[language])
        setTeacherDescriptionSecond(newCourse.teacherSecond.description[language])
        setTeacherDescriptionThird(newCourse.teacherThird.description[language])
    }, [language, isChange]);
    useEffect(() => {
        let object = newCourse;
        newCourse.text[language] = textMain;
        newCourse.document[language] = textDocument;
        setNewCourse(object);
    }, [textMain, textDocument]);
    const handleChangeText = (e) => {
        const { name: fieldName, value } = e.target;
        let obj = newCourse;
        obj[fieldName][language] = value;
        switch (fieldName){
            case "title":
                setTextTitle(value)
                break;
            case "nameMN":
                setNameMN(value);
                break;
            case "place":
                setTextPlace(value);
                break;
            case "text":
                setTextMain(value);
                break;
            case "document":
                setTextDocument(value);
                break;

        }
        setNewCourse(obj);
        setChange(!isChange);
    };
    const handleChange = (e) => {
        const { name: fieldName, value } = e.target;
        let obj = newCourse;
        setTextPrice(value)
        obj[fieldName] = value;
        setNewCourse(obj);
    };
    const handleChangeTeacher = (e) => {
        const { name: fieldName,id, value } = e.target;
        let obj = newCourse;
        switch (id){
            case "teacherFirst":
                switch (fieldName){
                    case "name":
                        setTeacherNameFirst(value)
                        break;
                    case "description":
                        setTeacherDescriptionFirst(value)
                        break;
                }
                break;
            case "teacherSecond":
                switch (fieldName){
                    case "name":
                        setTeacherNameSecond(value)
                        break;
                    case "description":
                        setTeacherDescriptionSecond(value)
                        break;
                }
                break;
            case "teacherThird":
                switch (fieldName){
                    case "name":
                        setTeacherNameThird(value)
                        break;
                    case "description":
                        setTeacherDescriptionThird(value)
                        break;
                }
                break;
        }
        obj[id][fieldName][language] = value;
        setNewCourse(obj);
        setChange(!isChange);
    };
    const handleChangeLanguage = (e) => {
        setLang(e.target.value);
    };
    const [dateStart, setDateStart] = useState(data.dateStart === "" ? null : new Date(data.dateStart));
    const [dateEnd, setDateEnd] = useState(data.dateEnd === "" ? null :new Date(data.dateEnd));
    useEffect(()=>{
        data.dateStart = dateStart
        data.dateEnd = dateEnd
    },[dateStart,dateEnd])
    return (
        <div>
            {Object.keys(LOCALES).map((_language, key) => {
                return (
                    <Form.Check inline key={key}>
                        <Form.Check.Input
                            type={"radio"}
                            name={"group1"}
                            value={LOCALES[_language]}
                            checked={LOCALES[_language] === language}
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
            <div>
                <h3
                    style={{
                        borderTop: "3px solid black",
                        paddingTop: "15px",
                        borderBottom: "3px solid black",
                        paddingBottom: "15px",
                    }}
                >
                    MainPage
                </h3>
                <div>
                    <h5>MainText</h5>
                    <input
                        type={"text"}
                        className={"text_title_send"}
                        value={textTitle}
                        name={"title"}
                        placeholder={"Title"}
                        onChange={(e) => {
                            handleChangeText(e);
                        }}
                    />
                    <Editor setTextEdit={setTextMain} textDefault={textMain} />
                    <div>
                    <div style={{display:"flex"}}>
                    <input
                        type={"text"}
                        className={"text_title_send"}
                        value={textPlace}
                        name={"place"}
                        placeholder={"Place"}
                        onChange={(e) => {
                            handleChangeText(e);
                        }}
                    />
                    <input
                        type={"text"}
                        className={"text_title_send"}
                        value={textPrice}
                        name={"price"}
                        placeholder={"Price"}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    </div>
                    <div style={{display:"flex"}}>
                    <DatePicker
                        selected={dateStart}
                        onChange={(date) => setDateStart(date)}
                        withPortal
                        className={"text_title_send"}
                        dateFormat={"dd.MM.yyyy"}
                        closeOnScroll={true}
                        isClearable
                        placeholderText={"start course"}
                    />
                    <DatePicker
                        selected={dateEnd}
                        onChange={(date) => setDateEnd(date)}
                        className={"text_title_send"}
                        withPortal
                        dateFormat={"dd.MM.yyyy"}
                        closeOnScroll={true}
                        isClearable
                        placeholderText={"end course"}
                    />
                    </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{width:"680px"}}>
                            <h5>Required document</h5>
                            <Editor
                                setTextEdit={setTextDocument}
                                textDefault={textDocument}
                            />
                        </div>
                        <div>
                            <h5>Manager</h5>
                            <DropImage
                                image={data.managerImage}
                                setImage={setManagerImage}
                            />
                            <input
                                type={"text"}
                                className={"text_title_send"}
                                value={nameMN}
                                name={"nameMN"}
                                placeholder={"name manager"}
                                onChange={(e) => {
                                    handleChangeText(e);
                                }}
                            />
                        </div>
                        <div>
                            <h5>License</h5>
                            <DropImage
                                image={data.licenseImage}
                                setImage={setLicenseImage}
                            />
                        </div>
                    </div>
                </div>
                <h3
                    style={{
                        borderTop: "3px solid black",
                        borderBottom: "3px solid black",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                    }}
                >
                    Teachers
                </h3>
                <div style={{display:'flex',gap:"10px"}}>
                    <div>
                        <h5>First Teacher</h5>
                        <DropImage
                            image={data.teacherFirst.image}
                            setImage={setTeacherFirst}
                        />
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={teacherNameFirst}
                            id={"teacherFirst"}
                            name={"name"}
                            placeholder={"name"}
                            onChange={(e) => {
                                handleChangeTeacher(e);
                            }}
                        />
                        <textarea
                            className={"text_area_news"}
                            placeholder={"Text"}
                            id={"teacherFirst"}
                            name={"description"}
                            value={teacherDescriptionFirst}
                            onChange={(e) => {
                                handleChangeTeacher(e);
                            }}
                        />
                    </div>
                    <div>
                        <h5>Second Teacher</h5>
                        <DropImage
                            image={data.teacherSecond.image}
                            setImage={setTeacherSecond}
                        />
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={teacherNameSecond}
                            id={"teacherSecond"}
                            name={"name"}
                            placeholder={"name"}
                            onChange={(e) => {
                                handleChangeTeacher(e);
                            }}
                        />
                        <textarea
                            className={"text_area_news"}
                            placeholder={"Text"}
                            id={"teacherSecond"}
                            name={"description"}
                            value={teacherDescriptionSecond}
                            onChange={(e) => {
                                handleChangeTeacher(e);
                            }}
                        />
                    </div>
                    <div>
                        <h5>Third Teacher</h5>
                        <DropImage
                            image={data.teacherThird.image}
                            setImage={setTeacherThird}
                        />
                        <input
                            type={"text"}
                            id={"teacherThird"}
                            className={"text_title_send"}
                            value={teacherNameThird}
                            name={"name"}
                            placeholder={"name"}
                            onChange={(e) => {
                                handleChangeTeacher(e);
                            }}
                        />
                        <textarea
                            className={"text_area_news"}
                            placeholder={"Text"}
                            id={"teacherThird"}
                            name={"description"}
                            value={teacherDescriptionThird}
                            onChange={(e) => {
                                handleChangeTeacher(e);
                            }}
                        />
                    </div>
                </div>
                <h3
                    style={{
                        borderTop: "3px solid black",
                        borderBottom: "3px solid black",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                    }}
                >
                    Feedback
                </h3>
            </div>
        </div>
    );
};

export default CreatePanel;
