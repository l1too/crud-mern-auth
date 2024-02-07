import { useForm } from "react-hook-form"
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react";

function TaskFormPage() {
  const {register, handleSubmit, setValue} = useForm()
  const {createTask, getTask, updateTask} = useTasks()
  const navigate = useNavigate()
  const params = useParams()


  useEffect( ()=> {
    async function loadTask(){
      if(params.id){
        const task = await getTask(params.id)
        console.log(task);
        setValue('title', task.title)
        setValue('description', task.description)
      }
    }
    loadTask()
  },[])

  const onSubmit = handleSubmit((data)=> {
      if(params.id ){
        updateTask(params.id, data)
      } else {
        createTask(data)
      }
      navigate("/tasks")
  })

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md m-auto">

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Title" {...register("title")}  className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2" autoFocus/>
        <textarea rows="3" placeholder="Description" {...register("description")} className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2"></textarea>
        <button type="submit" className="w-16 bg-zinc-600 rounded-md">Save</button>
      </form>
    </div>
  )
}

export default TaskFormPage