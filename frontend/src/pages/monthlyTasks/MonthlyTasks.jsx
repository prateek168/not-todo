import Header from "../../components/Header"
import TaskList from "../../components/TaskList"
import { sampleTasks } from "../../data/sampleData"
const MonthlyTasks = () => {
  return (
    <div>
      <Header />
      <TaskList tasks={sampleTasks} />
      Monthly Tasks
    </div>
  );
}

export default MonthlyTasks
