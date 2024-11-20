import { z } from 'zod'

export const SignupFormSchema = z.object({
  full_name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(25, 'Name should be at most 25 characters long'),
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password should be at least 8 characters long')
    .max(16, 'Password should be at most 16 characters long'),
})

export type TSignupFormSchema = z.infer<typeof SignupFormSchema>
