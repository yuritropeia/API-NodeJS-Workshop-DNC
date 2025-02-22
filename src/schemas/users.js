import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().regex(/^[a-zA-Z0-9]{8,}$/)
});
