import { z } from "zod";

export const contactSchema = z.object({
    email: z
        .string()
        .min(1, "Email address is required.")
        .email("Please enter a valid email address."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
