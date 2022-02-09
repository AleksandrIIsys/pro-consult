import React, {useContext, useState} from 'react';
import { Form, Table } from "react-bootstrap";
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons';
import './EditableTable.styles.scss';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const EditableTable = observer(({ columns, rows, actions }) => {
  const {news} = useContext(Context);
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [rowsState, setRowsState] = useState(news.getNews());
  const [editedRow, setEditedRow] = useState();
  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }

  const handleRemoveRow = (rowID) => {
    const newData = rowsState.filter(row => {
      return row.id !== rowID ? row : null
    });

    news.setNews(newData);
  }

  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;

    setEditedRow({
      id: rowID,
      [fieldName]: value
    })
  }

  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  }

  const handleSaveRowChanges = () => {
    setTimeout(() => {
      setIsEditMode(false);

      const newData = (rowsState.map(row => {
        if (row.id === editedRow.id) {
          if (editedRow.image) row.image = editedRow.image;
          if (editedRow.title) row.title = editedRow.title;
          if (editedRow.text) row.text = editedRow.text;
          if (editedRow.date) row.date = editedRow.date;
        }
        return row;
      }))
      news.setNews(newData);
      setEditedRow(undefined)
    }, 1000)
  }

  return (
      <Table striped bordered hover>
        <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.field}>{ column.fieldName }</th>
          })}
        </tr>
        </thead>
        <tbody>
        {rowsState.map((row) => {
          return <tr key={row.id}>
            <td>
              {row.id}
            </td>
            <td>
              { isEditMode && rowIDToEdit === row.id
                  ? <Form.Control
                      type='text'
                      defaultValue={editedRow ? editedRow.image : row.image}
                      id={row.id}
                      name='image'
                      onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : <span>{row.image}</span>
              }
            </td>
            <td>
              { isEditMode && rowIDToEdit === row.id
                  ? <Form.Control
                      type='text'
                      defaultValue={editedRow ? editedRow.title : row.title}
                      id={row.id}
                      name='title'
                      onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : <span className={"title"}>{row.title}</span>
              }
            </td>
            <td>
              { isEditMode && rowIDToEdit === row.id
                  ? <Form.Control
                      type='text'
                      defaultValue={editedRow ? editedRow.text : row.text}
                      id={row.id}
                      name='text'
                      onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : <span>{row.text}</span>
              }
            </td>
            <td>
              { isEditMode && rowIDToEdit === row.id
                  ? <Form.Control
                      type='text'
                      defaultValue={editedRow ? editedRow.date : row.date}
                      id={row.id}
                      name='date'
                      onChange={ (e) => handleOnChangeField(e, row.id) }
                  />
                  : row.date
              }
            </td>
            {actions &&
            <td>
              { isEditMode && rowIDToEdit === row.id
                  ? <button onClick={ () => handleSaveRowChanges() } className='custom-table__action-btn' disabled={!editedRow}>
                    <Save />
                  </button>
                  : <button  onClick={ () => handleEdit(row.id) } className='custom-table__action-btn'>
                    <PencilFill />
                  </button>
              }

              { isEditMode && rowIDToEdit === row.id
                  ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                    <XSquare />
                  </button>
                  : <button onClick={() => handleRemoveRow(row.id)} className='custom-table__action-btn'>
                    <Trash />
                  </button>
              }
            </td>
            }
          </tr>
        })}
        </tbody>
      </Table>
  );
});

export default EditableTable;