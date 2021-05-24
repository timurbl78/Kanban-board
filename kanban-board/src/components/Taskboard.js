import { groupName } from '../const';
import Group from './Group';

const Taskboard = () => {
  return (
    <section className="taskboard">
      <h2 className="visually-hidden">Ваши задачи:</h2>
      {groupName.map((group) => <Group groupInfo={group} key={group.id}/>)}
    </section>
  );
}

export default Taskboard;
