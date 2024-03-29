import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'User is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        required_error: 'Email invalid'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(5, {
        message: 'Password must be at least 5 characters'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email({
        required_error: 'Email invalid'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(5, {
        message: 'Password must be at lest 5 characters'
    })
})