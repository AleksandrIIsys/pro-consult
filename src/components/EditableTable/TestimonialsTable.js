import React, { useContext, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { PencilFill, Save, Trash, XSquare } from "react-bootstrap-icons";
import "./EditableTable.styles.scss";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { deleteTestimonial, editTestimonial } from "../../http/Api";
import ModalWindow from "../AdminTestimonials/ModalWindow";

export const TestimonialsTable = observer(
    ({ columns, language, setIsLoad }) => {
        const { testimonials } = useContext(Context);
        const [rowsState, setRowsState] = useState(
            testimonials.getTestimonials()
        );
        const [editedRow, setEditedRow] = useState();
        const handleEdit = (rowID) => {
            setEditedRow(
                testimonials
                    .getTestimonials()
                    .filter((row) => row.id === rowID)[0]
            );
            setShow(true);
        };
        const handleClose = () => {
            setShow(false);
        };
        const [deletModal, setDeletModal] = useState(false);

        const deleteModalOpen = (rowID) => {
            setDeletModal(true);
            setEditedRow(
                testimonials
                    .getTestimonials()
                    .filter((row) => row.id === rowID)[0]
            );
        };
        const deleteModalClose= () => {
            setDeletModal(false);
        };
        const [show, setShow] = useState(false);
        const handleRemoveRow = async (rowID) => {
            const newData = rowsState.filter((row) => {
                return row.id !== rowID ? row : null;
            });
            const deleteData = rowsState.filter((row) => {
                return row.id === rowID ? row : null;
            })[0];
            newData.forEach((elem, index) => {
                elem.id = index + 1;
            });
            const fd = new FormData();
            fd.append("data", JSON.stringify(deleteData));
            deleteTestimonial(fd)
                .then((res) => {
                    if (res.status === 200) {
                        testimonials.setTestimonials(newData);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        };
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {columns.map((column) => {
                                return (
                                    <th key={column.field}>
                                        {column.fieldName}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rowsState.map((row) => {
                            return (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>
                                        <span>
                                            <img
                                                src={row.image}
                                                style={{ width: "100px" }}
                                                alt={""}
                                            />
                                        </span>
                                    </td>
                                    <td>
                                        <span className={"title"}>
                                            {row.name[language]}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={"title"}>
                                            {row.position[language]}
                                        </span>
                                    </td>
                                    <td>
                                        <span>{row.text[language]}</span>
                                    </td>
                                    <td>{row.date}</td>
                                    <td className={"icon_td"} >
                                        {deletModal && row.id === editedRow.id ? (
                                            <div className={"popup-menu"} id >
                                                <Button size={"sm"} onClick={deleteModalClose}>
                                                    cancel
                                                </Button>
                                                <Button
                                                    size={"sm"}
                                                    onClick={() =>
                                                        handleRemoveRow(row.id)
                                                    }
                                                >
                                                    ok
                                                </Button>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        <button
                                            onClick={() => handleEdit(row.id)}
                                            className="custom-table__action-btn"
                                        >
                                            <PencilFill />
                                        </button>
                                        <button
                                            onClick={()=>deleteModalOpen(row.id)}
                                            className="custom-table__action-btn"
                                        >
                                            <Trash />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <ModalWindow
                    show={show}
                    handleClose={handleClose}
                    type={"update"}
                    setIsLoad={setIsLoad}
                    defaultData={editedRow}
                />
            </div>
        );
    }
);

export default TestimonialsTable;
