"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/schemas";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/animations";

export default function Contact() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (_data: ContactFormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));
        reset();
    };

    return (
        <section
            id="waitlist"
            className="py-20 lg:py-28 px-6 bg-secondary/30"
            aria-label="Join our waitlist"
        >
            <div ref={ref} className="max-w-container mx-auto">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.span
                        variants={STAGGER_ITEM}
                        className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-4"
                    >
                        Be First in Line
                    </motion.span>

                    <motion.h2
                        variants={STAGGER_ITEM}
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight"
                    >
                        Join the Waitlist
                    </motion.h2>

                    <motion.p
                        variants={STAGGER_ITEM}
                        className="mt-5 text-primary/70 text-base sm:text-lg"
                    >
                        Be among the first to receive our eco-friendly products. No spam,
                        just a heads-up when we&apos;re live.
                    </motion.p>

                    {isSubmitSuccessful ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-10 p-6 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-medium"
                            role="alert"
                            aria-live="polite"
                        >
                            🌿 You&apos;re on the list! We&apos;ll be in touch soon.
                        </motion.div>
                    ) : (
                        <motion.form
                            variants={STAGGER_ITEM}
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-10"
                            noValidate
                            aria-label="Waitlist signup form"
                        >
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <div className="flex-1">
                                    <label htmlFor="email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="your@email.com"
                                        aria-required="true"
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        {...register("email")}
                                        className={`w-full px-5 py-4 rounded-full border text-primary placeholder:text-primary/40 bg-white focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all ${errors.email
                                                ? "border-red-400 focus:ring-red-400"
                                                : "border-secondary"
                                            }`}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-4 bg-primary text-white font-medium rounded-full text-sm tracking-wide border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap"
                                    aria-label="Submit waitlist signup"
                                >
                                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                                </button>
                            </div>

                            {errors.email && (
                                <p
                                    id="email-error"
                                    role="alert"
                                    aria-live="polite"
                                    className="mt-3 text-red-500 text-sm text-center"
                                >
                                    {errors.email.message}
                                </p>
                            )}
                        </motion.form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
