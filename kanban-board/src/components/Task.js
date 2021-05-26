import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { updateTask } from '../store/actions';

const Task = ({ groupId, task, index, dispatch}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [currTitle, setCurrTitle] = useState(task.title);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleChangeClick = (evt) => {
    evt.preventDefault();
    setIsEdit(true);
  }

  useEffect(() => {
    const handleTaskSubmit = (evt) => {
      const data = {
        id: task.id,
        status: task.status,
        title: editedTitle,
      };

      if (evt.key === 'Enter') {
        dispatch(updateTask(groupId, data));
        setCurrTitle(editedTitle);
        setIsEdit(false);
      }
    }

    document.addEventListener('keypress', handleTaskSubmit);

    return () => {
      document.removeEventListener('keypress', handleTaskSubmit);
    }

  }, [editedTitle, setEditedTitle, currTitle, task.id, task.status, groupId, dispatch])

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
          className={`taskboard__item task task--${task.status} ${isEdit ? 'task--active' : ''}`}>
          <div className="task__body">
            <p className="task__view">{currTitle}</p>
            <input className="task__input" type="text" value={editedTitle} autoFocus onChange={(e) => setEditedTitle(e.target.value)} />
          </div>
          <button className="task__edit" type="button" aria-label="Изменить" onClick={handleChangeClick}></button>
        </div>
      )}
    </Draggable>
  );
}

export default connect()(Task);
