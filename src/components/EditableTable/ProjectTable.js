import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { deleteNews, deleteProject, fetchNews, fetchProject } from "../../http/Api";
import { Button, Table } from "react-bootstrap";
import { PencilFill, Trash } from "react-bootstrap-icons";
import ModalWindow from "../AdminProjects/ModalWindow";

const ProjectTable = observer(({ columns, language, setIsLoad  }) => {
    const {project} = useContext(Context)
    const [rowsState, setRowsState] = useState(project.getProject());
    const [editedRow, setEditedRow] = useState(null);
    const handleEdit = (rowID) => {
        setEditedRow(project.getProject().filter((row) => row.id === rowID)[0]);
        setShow(true);
    };
    const [deletModal, setDeletModal] = useState(false);

    const deleteModalOpen = (rowID) => {
        setDeletModal(true);
        setEditedRow(project.getProject().filter((row) => row.id === rowID)[0]);
    };
    const deleteModalClose= () => {
        setDeletModal(false);
    };
    const handleClose = () => {
        setShow(false);
    };
    const [show, setShow] = useState(false);
    const handleRemoveRow = async (rowID) => {
        const newData = rowsState.filter((row) => {
            return row.id !== rowID ? row : null;
        });
        const deleteData = rowsState.filter((row) => {
            return row.id === rowID ? row : null;
        })[0];
        const fd = new FormData();
        fd.append("data", JSON.stringify(deleteData));
        deleteProject(fd)
            .then((res) => {
                fetchProject().then((data)=>{
                    project.setProject(data);
                })
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
                            <th key={column.field}>{column.fieldName}</th>
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
                                            {row.title[language]}
                                        </span>
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
});

export default ProjectTable;