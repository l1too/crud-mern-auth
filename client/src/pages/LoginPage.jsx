import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {

  const { register, handleSubmit, formState: {errors} } = useForm()

  const {signin, errors: signinErrors} = useAuth()

  const onSubmit = handleSubmit( data=> {
    signin(data);
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">

      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">

      {
        signinErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white text-center' key={i}>
            {error}
          </div>
        ))
      }

        <h1 className="font-bold text-2xl text-center">Login</h1>

      <form onSubmit={onSubmit} className='flex flex-col text-black mt-3 p-6'>
       
       <input type="email" placeholder='Email' className='bg-zinc-700 max-w-md rounded-md text-white p-2 m-2' {...register('email', { required: true })} />
       {
         errors.email && (
           <p className='text-red-500'>Email is required</p>
         )
       }

       <input type="password" placeholder='Password' className='bg-zinc-700 max-w-md rounded-md text-white p-2 m-2' {...register('password', { required: true })} />
       {
         errors.password && (
           <p className='text-red-500'>Password is required</p>
         )
       }

       <button type='submit' className='bg-zinc-700 max-w-20 rounded-md text-white p-2 m-2' >Login</button>


     </form>

       <p className="flex justify-between p-10">Don't have an account? <Link to={'/register'} className="text-sky-500">Sign up</Link></p>

      </div>

    </div>
  )
}

export default LoginPage