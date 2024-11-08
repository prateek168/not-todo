import Header from "../../components/Header"
import TaskList from "../../components/TaskList";
import { sampleTasks } from "../../data/sampleData";
const DailyTasks = () => {
  return (
    <div>
      <Header />
      <TaskList tasks={sampleTasks} />
      daily Tasks
    </div>
  );
}

export default DailyTasks
