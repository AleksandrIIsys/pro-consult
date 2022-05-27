import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { LOCALES } from "../../i18n/Locale";
import { createCareers, editCareers, fetchCareers } from "../../http/Api";
import { Button, Modal } from "react-bootstrap";
import CreatePanel from "./CreatePanel";

const ModalWindow = ({ show, handleClose, type, defaultData,isLoad,setIsLoad }) => {
    const { careers, locale } = useContext(Context);
    const temp = {
        title: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        description: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        workSchedule: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        date: "",
        salary: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
    }
    const [data, setData] = useState(temp);
    useEffect(() => {
        if (!isLoad) {
            fetchCareers()
                .then((data)=>{
               careers.setCareers(data);
            })
        }
    }, [isLoad]);
    const clearData = () => {
        setData(temp);
    };
    const handleClick = (event) => {
        const fd = new FormData();
        const obj = data;
        event.target.disabled = true;
        setIsLoad(true)
        switch (type) {
            case "update":
                fd.append("data", JSON.stringify(defaultData));
                editCareers(fd).then((res) => {
                    setIsLoad(false);
                });
                break;
            case "create":
                fd.append("data", JSON.stringify(obj));
                createCareers(fd).then((res) => {
                    setIsLoad(false);
                    event.target.disabled = false;
                });
                break;
        }
        clearData();
        handleClose();
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create/Edit Panel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreatePanel
                        data={defaultData || data}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleClick}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalWindow;