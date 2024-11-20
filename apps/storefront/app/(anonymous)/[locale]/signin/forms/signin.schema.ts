import { z } from 'zod'

export const SigninFormSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password should be at least 8 characters long')
    .max(16, 'Password should be at most 16 characters long'),
})

export type TSigninFormSchema = z.infer<typeof SigninFormSchema>
