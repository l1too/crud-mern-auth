import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth';

function RegisterPage() {
    const { register, handleSubmit } = useForm()
    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log(res);})

  return (
        <div className=' bg-zinc-800 max-w-md mx-auto rounded-md'>
            <form onSubmit={onSubmit} className='flex flex-col text-black mt-3 p-6'>
                <input type="text" placeholder='Username' className='bg-zinc-700 max-w-md rounded-md text-white p-2 m-2' {...register('username', {required: true})}/>
                <input type="email" placeholder='Email' className='bg-zinc-700 max-w-md rounded-md text-white p-2 m-2' {...register('email', {required: true})}/>
                <input type="password" placeholder='Password' className='bg-zinc-700 max-w-md rounded-md text-white p-2 m-2' {...register('password', {required: true})}/>
                <button type='submit' className='bg-zinc-700 max-w-20 rounded-md text-white p-2 m-2' >Register</button>

            </form>
        </div>
    )
}

export default RegisterPage