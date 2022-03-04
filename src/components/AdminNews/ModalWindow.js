import React, {useContext, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import CreatePanel from "./CreatePanel";
import {LOCALES} from "../../i18n/Locale";
import {createNews} from "../../http/Api";
import {Context} from "../../index";

const ModalWindow = () => {
    const {news} = useContext(Context)
    const [show, setShow] = useState(false);
    const [data, setData] = useState(
         {
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
        }
        )
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
        })
        setImage(null)
    }
    const [image,setImage] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        < >
            <Button variant="primary" onClick={handleShow}>
                Create News
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Panel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreatePanel data={data} setImage={setImage}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(event) => {
                        const fd = new FormData();
                        const obj = data
                        obj.date = new Date().toLocaleString("ru-RU")
                        fd.append('data', JSON.stringify(obj))
                        fd.append('picture', image)
                        event.target.disabled = true
                        createNews(fd).then((ns) => {
                            const promise = ns.json()
                            promise.then((data)=>{
                                data.id = news.getNews().length + 1
                                console.log(data.title);
                                news.AddNews(data)
                                clearData()
                                event.target.disabled = false
                            })
                        })
                    }}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;