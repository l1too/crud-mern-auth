import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"
import { Link } from "react-router-dom"


function TasksPage() {
  const {getTasks, tasks} = useTasks()

  useEffect(()=> {
    getTasks()
  },[getTasks])

  if(tasks.length === 0) return (
    <div className=" h-screen flex flex-col">
        <h1 className="text-2xl text-center pt-28">No pending tasks</h1>
        <Link to={"/add-task"} className=" bg-indigo-500 p-2 rounded-md mx-auto mt-8">Add task</Link>
    </div>
  )
  return (
    <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        tasks.map(task => (
          <TaskCard task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

export default TasksPage