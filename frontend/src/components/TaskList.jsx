import PropTypes from "prop-types"; // Import PropTypes
import TaskCard from "./TasksCard";

const TaskList = ({ tasks }) => (
  <div className="grid gap-4">
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string,
      }),
      deadline: PropTypes.instanceOf(Date).isRequired,
      isBacklog: PropTypes.bool,
    })
  ).isRequired,
};

export default TaskList;
