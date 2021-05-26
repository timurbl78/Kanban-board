const EmptyTask = ({ text }) => {
  return (
    <div className="task--empty task task--empty-trash">
      <p>{text}</p>
    </div>
  );
}

export default EmptyTask;
