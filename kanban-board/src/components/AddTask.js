import { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../store/actions/';

const AddTask = (props) => {
  const [newTask, setNewTask] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsPending(true);

    const { dispatch } = props;
    dispatch(addTask(newTask));
    setNewTask('');
    setIsPending(false);
  };

  return (
    <section className="add-task">
      <h2 className="visually-hidden">Добавить задачу</h2>
      <form className="add-task__form" aria-label="Форма добавления задачи" onSubmit={handleSubmit}>
        <div className="add-task__input-wrapper">
          <label htmlFor="add-task">Новая задача</label>
          <input 
            type="text" name="task-name" id="add-task"
            placeholder="Название задачи..." required
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        {isPending && 
          (<button className="add-task__button button" type="submit" disabled>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10.0833" y="3.66663" width="1.83333" height="14.6667" fill="white" />
              <rect x="18.3333" y="10.0833" width="1.83333" height="14.6667" transform="rotate(90 18.3333 10.0833)"
                fill="white" />
            </svg>
            <span>Добавляю...</span>
          </button>)
        }
        {!isPending && 
          (<button className="add-task__button button" type="submit">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10.0833" y="3.66663" width="1.83333" height="14.6667" fill="white" />
              <rect x="18.3333" y="10.0833" width="1.83333" height="14.6667" transform="rotate(90 18.3333 10.0833)"
                fill="white" />
            </svg>
            <span>Добавить</span>
          </button>)
        }
      </form>
    </section>
  );
}

export default connect()(AddTask);
