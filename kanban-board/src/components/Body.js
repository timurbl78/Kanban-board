import AddTask from "./AddTask"
import Taskboard from "./Taskboard"

const Body = () => {
  return (
    <main className="board-app__main">
      <div className="board-app__inner">
        <AddTask />
        <Taskboard />
      </div>
    </main>
  );
}
 
export default Body;
