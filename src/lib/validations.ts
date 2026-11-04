import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.').max(80),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(3, 'Please add a subject.').max(120),
  message: z.string().min(10, 'Your message should be at least 10 characters.').max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
