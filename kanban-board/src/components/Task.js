import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../store/actions';

const Task = ({ groupId, task, dispatch}) => {
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
    <div
      className={`taskboard__item task task--${task.status} ${isEdit ? 'task--active' : ''}`}
      draggable={true}
    >
      <div className="task__body">
        <p className="task__view">{currTitle}</p>
        <input className="task__input" type="text" value={editedTitle} autoFocus onChange={(e) => setEditedTitle(e.target.value)} />
      </div>
      <button className="task__edit" type="button" aria-label="Изменить" onClick={handleChangeClick}></button>
    </div>
  );
}

export default connect()(Task);
