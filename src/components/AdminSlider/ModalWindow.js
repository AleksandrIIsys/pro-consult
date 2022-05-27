import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { LOCALES } from "../../i18n/Locale";
import { createPartner, createSlider, editPartner, editSlider, fetchPartners, fetchSlider } from "../../http/Api";
import { Button, Modal } from "react-bootstrap";
import CreatePanel from "../AdminSlider/CreatePanel";

const ModalWindow = ({
                         show,
                         handleClose,
                         type,
                         defaultData,
                         isLoad,
                         setIsLoad,
                     }) => {
    const { slider, locale } = useContext(Context);
    const temp = {
        title: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        subtitle: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        url: "",
        image: "",
    }
    const [data, setData] = useState(temp);
    useEffect(() => {
        if (!isLoad) {
            fetchSlider().then((data) => {
                slider.setSlider(data);
            });
        }
    }, [isLoad]);
    const clearData = () => {
        setData(temp);
        setImage(null);
    };
    const [image, setImage] = useState(null);
    const handleClick = (event) => {
        const fd = new FormData();
        const obj = data;
        obj.date = new Date().toLocaleString(locale);
        fd.append("picture", image);
        event.target.disabled = true;
        setIsLoad(true);
        switch (type) {
            case "update":
                fd.append("data", JSON.stringify(defaultData));
                editSlider(fd).then((res) => {
                    setIsLoad(false);
                });
                break;
            case "create":
                fd.append("data", JSON.stringify(obj));
                createSlider(fd).then((ns) => {
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