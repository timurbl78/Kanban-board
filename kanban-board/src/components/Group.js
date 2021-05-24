import useFetch from '../utils/useFetch';
import Task from './Task';

const Group = ({groupInfo}) => {
  const { data: tasks, isPending, error } = useFetch('http://localhost:8000/tasks/');

  return (
    <article className={`taskboard__group taskboard__group--${groupInfo.className}`}>
      <h3 className={`taskboard__group-heading taskboard__group-heading--${groupInfo.className}`}>{groupInfo.title}</h3>
      <div className="taskboard__list">
        {isPending && <span>Loading...</span>}
        {tasks && tasks.filter((task) => task.status === groupInfo.className).map((task) => <Task task={task} key={task.id} />)}
      </div>
    </article>
  );
}
 
export default Group;
