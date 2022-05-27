import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CreatePanel from "../AdminCourses/CreatePanel";
import { LOCALES } from "../../i18n/Locale";
import { Context } from "../../index";
import { createCourse, editCourse, fetchCourse, fetchTestimonials } from "../../http/Api";

const ModalWindow = ({
    show,
    handleClose,
    type,
    defaultData,
    isLoad,
    setIsLoad,
}) => {
    const {  locale } = useContext(Context);

    const temp = {
        title: {
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
            [LOCALES.ENGLISH]: "",
        },
        text: {
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
            [LOCALES.ENGLISH]: "",
        },
        place: {
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
            [LOCALES.ENGLISH]: "",
        },
        dateStart: "",
        dateEnd: "",
        price: "",
        nameMN: {
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
            [LOCALES.ENGLISH]: "",
        },
        document: {
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
            [LOCALES.ENGLISH]: "",
        },
        managerImage: "",
        licenseImage: "",
        teacherFirst: {
            image: "",
            name: {
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
                [LOCALES.ENGLISH]: "",
            },
            description: {
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
                [LOCALES.ENGLISH]: "",
            },
        },
        teacherSecond: {
            image: "",
            name: {
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
                [LOCALES.ENGLISH]: "",
            },
            description: {
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
                [LOCALES.ENGLISH]: "",
            },
        },
        teacherThird: {
            image: "",
            name: {
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
                [LOCALES.ENGLISH]: "",
            },
            description: {
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
                [LOCALES.ENGLISH]: "",
            },
        },
        feedback: [
            {
                name: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                text: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                position: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                date: "",
            },
            {
                name: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                text: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                position: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                date: "",
            },
            {
                name: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                text: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                position: {
                    [LOCALES.ENGLISH]: "",
                    [LOCALES.RUSSIAN]: "",
                    [LOCALES.UZBEK]: "",
                },
                date: "",
            },
        ],
    };
    const [data, setData] = useState(temp);
    const clearData = () => {
        setData(temp);
    };
    const [managerImage, setManagerImage] = useState();
    const [licenseImage, setLicenseImage] = useState();
    const [teacherImageFirst, setTeacherFirst] = useState();
    const [teacherImageSecond, setTeacherSecond] = useState();
    const [teacherImageThird, setTeacherThird] = useState();
    const handleClick = (event) => {
        const fd = new FormData();
        const obj = data;
        obj.date = new Date().toLocaleString(locale);
        fd.append("managerImage", managerImage);
        fd.append("licenseImage", licenseImage);
        fd.append("teacherFirst", teacherImageFirst);
        fd.append("teacherSecond", teacherImageSecond);
        fd.append("teacherThird", teacherImageThird);
        event.target.disabled = true;
        setIsLoad(true);
        switch (type) {
            case "update":
                fd.append("data", JSON.stringify(defaultData));
                editCourse(fd).then((res) => {
                    setIsLoad(false);
                });
                break;
            case "create":
                fd.append("data", JSON.stringify(obj));
                createCourse(fd).then((res) => {
                    setIsLoad(false);
                    event.target.disabled = false;
                });
                break;
        }
        clearData();
        handleClose();
    };
    return (
        <Modal show={show} onHide={handleClose} size={"xl"} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Create/Edit Panel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreatePanel
                    data={defaultData || data}
                    setManagerImage={setManagerImage}
                    setLicenseImage={setLicenseImage}
                    setTeacherFirst={setTeacherFirst}
                    setTeacherSecond={setTeacherSecond}
                    setTeacherThird={setTeacherThird}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={handleClick}
                    disabled={
                        managerImage === null &&
                        licenseImage === null &&
                        teacherImageFirst === null &&
                        teacherImageSecond === null &&
                        teacherImageThird === null &&
                        defaultData === null
                    }
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalWindow;
