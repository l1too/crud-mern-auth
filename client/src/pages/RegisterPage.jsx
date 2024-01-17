import { useForm } from 'react-hook-form'
import { useAuth } from "../context/AuthContext";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    useEffect(()=> {
        if(isAuthenticated) navigate('/tasks')
    },[isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

  return (
        <div className=' bg-zinc-800 max-w-md mx-auto rounded-md'>

            {
                registerErrors.map((error, i)=>(
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))
            }

            <form onSubmit={onSubmit} className='flex flex-col text-black mt-3 p-6'>
                <input type="text" placeholder='Username' className='bg-zinc-700 max-w-md rounded-md text-white p-2 m-2' {...register('username', {required: true})}/>
                {
                    errors.username && (
                        <p className='text-red-500'>Username is required</p>
                    )
                }

                <input type="email" placeholder='Email' className='bg-zinc-700 max-w-md rounded-md text-white p-2 m-2' {...register('email', {required: true})}/>
                {
                    errors.email && (
                        <p className='text-red-500'>Email is required</p>
                    )
                }

                <input type="password" placeholder='Password' className='bg-zinc-700 max-w-md rounded-md text-white p-2 m-2' {...register('password', {required: true})}/>
                {
                    errors.password && (
                        <p className='text-red-500'>Password is required</p>
                    )
                }

                <button type='submit' className='bg-zinc-700 max-w-20 rounded-md text-white p-2 m-2' >Register</button>


            </form>
        </div>
    )
}

export default RegisterPage