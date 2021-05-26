import ClearGroupButton from './ClearGroupButton';
import EmptyTask from './EmptyTask';
import Task from './Task';

const Group = ({tasks, title, className, groupId}) => {
  return (
    <article className={`taskboard__group taskboard__group--${className}`}>
      <h3 className={`taskboard__group-heading taskboard__group-heading--${className}`}>{title}</h3>
      <div className="taskboard__list">
        {tasks.map((task) => <Task groupId={groupId} task={task} key={task.id}/>)}
        {tasks.length === 0 && <EmptyTask text={`${className === 'basket' ? 'Корзина пуста' : 'Перетащите карточку'}`} /> }
      </div>
      {className === 'basket' &&  <ClearGroupButton groupId={groupId} />}
    </article>
  );
}

export default Group;
