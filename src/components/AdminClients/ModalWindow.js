import React, {useContext, useEffect, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import CreatePanel from "./CreatePanel";
import { LOCALES } from "../../i18n/Locale";
import {createClient, editClient, fetchClients} from "../../http/Api";
import { Context } from "../../index";

const ModalWindow = ({ show, handleClose, type, defaultData,isLoad,setIsLoad  }) => {
    const { clients, locale } = useContext(Context);
    const [data, setData] = useState({
        name: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        description: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        country: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        date: "",
        image: "",
    });
    useEffect(()=>{
        if(!isLoad){
            fetchClients().then((data)=>{
                clients.setClients(data)
            })
        }
    },[isLoad])
    const clearData = () => {
        setData({
            name: {
                [LOCALES.ENGLISH]: "",
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
            },
            description: {
                [LOCALES.ENGLISH]: "",
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
            },
            country: {
                [LOCALES.ENGLISH]: "",
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
            },
            date: "",
            image: "",
        });
        setImage(null);
    };
    const [image, setImage] = useState(null);
    const handleClick = (event) => {
        const fd = new FormData();
        const obj = data;
        obj.date = new Date().toLocaleString(locale);
        fd.append("picture", image);
        event.target.disabled = true;
        setIsLoad(true)
        switch (type) {
            case "update":
                fd.append(
                    "data",
                    JSON.stringify(defaultData)
                );
                editClient(fd).then((res) => {
                    setIsLoad(false)
                });
                break;
            case "create":
                fd.append("data", JSON.stringify(obj));
                createClient(fd).then((ns) => {
                    setIsLoad(false);
                        event.target.disabled = false;
                });
                break;
        }
        clearData();
        handleClose();
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create/Edit Panel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreatePanel
                        data={defaultData || data}
                        setImage={setImage}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleClick}
                        disabled={image === null && defaultData === undefined}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalWindow;