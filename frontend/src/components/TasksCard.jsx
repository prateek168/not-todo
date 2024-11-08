import PropTypes from "prop-types"; // Import PropTypes

const TaskCard = ({ task }) => {
  const { title, body, author, deadline, isBacklog } = task;

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 border border-gray-200">
      {/* Task title */}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      {/* Author and Deadline */}
      <div className="text-sm text-gray-500 mb-2">
        <p>Author: {author?.name || "Unknown"}</p>
        <p>Deadline: { (new Date(deadline), "MMM dd, yyyy")}</p>
      </div>

      {/* Task body */}
      <p className="text-gray-700 mb-4">{body}</p>

      {/* Backlog label */}
      {isBacklog && (
        <span className="inline-block bg-red-200 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
          Backlog
        </span>
      )}
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string,
    }),
    deadline: PropTypes.instanceOf(Date).isRequired,
    isBacklog: PropTypes.bool,
  }).isRequired,
};

export default TaskCard;
