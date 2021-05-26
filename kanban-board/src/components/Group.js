import Task from './Task';

const Group = ({tasks, title, className, groupId}) => {
  // {isPending && <span>Loading...</span>}
  //       {error && <span>{error}</span>}
  //       {tasks && groupInfo.tasks.map((task) => {
  //         return <Task 
  //                 task={task}
  //                 key={task.id}
  //               />
  //       })}

  return (
    <article className={`taskboard__group taskboard__group--${className}`}>
      <h3 className={`taskboard__group-heading taskboard__group-heading--${className}`}>{title}</h3>
      <div className="taskboard__list">
        {tasks.map((task) => <Task groupId={groupId} task={task} key={task.id}/>)}
      </div>
    </article>
  );
}
 
export default Group;
