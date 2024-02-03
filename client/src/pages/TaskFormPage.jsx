import { useForm } from "react-hook-form"
import { useTasks } from "../context/TaskContext";

function TaskFormPage() {
  const {register, handleSubmit} = useForm()

  const {createTask} = useTasks()


  const onSubmit = handleSubmit((data)=> {
      createTask(data);
  })

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md m-auto">
      <h1 className="text-center text-2xl pb-3">hola</h1>
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder="Title" {...register("title")} className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2" autoFocus/>
        <textarea rows="3" placeholder="Description" {...register("description")} className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2"></textarea>
        <button type="submit" className="w-16 bg-zinc-600 rounded-md">Save</button>
      </form>
    </div>
  )
}

export default TaskFormPage