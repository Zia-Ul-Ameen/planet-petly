import { z } from "zod";

// General Contact Schema — the single form on the site
export const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
