import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CreatePanel from "./CreatePanel";
import { LOCALES } from "../../i18n/Locale";
import { createNews, editNews, fetchNews } from "../../http/Api";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const ModalWindow = observer(({ show, handleClose, type, defaultData,isLoad,setIsLoad  }) => {
    const { news } = useContext(Context);
    const [data, setData] = useState({
        title: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        text: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        date: "",
        image: "",
    });
    useEffect(() => {
        if (!isLoad) {
            fetchNews().then((data) => {
                news.setNews(data);
            });
        }
    }, [isLoad]);

    const clearData = () => {
        setData({
            title: {
                [LOCALES.ENGLISH]: "",
                [LOCALES.RUSSIAN]: "",
                [LOCALES.UZBEK]: "",
            },
            text: {
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
        obj.date = new Date().toLocaleString("ru-RU");
        fd.append("picture", image);
        event.target.disabled = true;
        setIsLoad(true);
        switch (type) {
            case "update":
                fd.append("data", JSON.stringify(defaultData));
                editNews(fd).then((res) => {
                    setIsLoad(false);
                });
                break;
            case "create":
                fd.append("data", JSON.stringify(obj));
                createNews(fd).then((res) => {
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
                        disabled={image === null && defaultData === null}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
});

export default ModalWindow;
