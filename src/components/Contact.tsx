"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/schemas";

export default function Contact() {
    const [apiError, setApiError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setApiError(null);
        try {
            const response = await fetch("https://planetpetly.com/api/submit-form.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.status === "success") {
                reset();
            } else {
                setApiError(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setApiError("Failed to connect to the server. Please check your internet connection.");
            console.error("Form submission error:", error);
        }
    };

    return (
        <section id="contact" className="py-24 bg-primary px-6 overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">

                    <div className="text-white">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-secondary text-xs font-bold tracking-widest uppercase mb-6">Contact Us</span>
                        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight mb-8 font-outfit">
                            Let&apos;s Connect.
                        </h2>

                        <div className="space-y-10">
                            <div>
                                <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">Company</h4>
                                <p className="text-2xl font-semibold">ADRARECOM LLC</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">Customer Support</h4>
                                    <a href="mailto:customercare@adrarecom.com" className="text-lg hover:text-secondary transition-colors underline underline-offset-8 decoration-white/20">customercare@adrarecom.com</a>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-3">Business &amp; Wholesale</h4>
                                    <a href="mailto:admin@adrarecom.com" className="text-lg hover:text-secondary transition-colors underline underline-offset-8 decoration-white/20">admin@adrarecom.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[44px] p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-2 font-outfit">Send a Message</h3>
                        <p className="text-primary/50 text-sm mb-8">We look forward to hearing from you.</p>

                        {isSubmitSuccessful ? (
                            <div className="py-12 text-center text-primary font-bold bg-primary/5 rounded-3xl border border-primary/10">
                                ✔️ Message sent. We will get back to you soon.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                {apiError && (
                                    <div className="p-4 text-sm text-red-500 bg-red-50 rounded-2xl border border-red-100 mb-4">
                                        ❌ {apiError}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-1">
                                        <input {...register("name")} placeholder="Name" className="w-full px-6 py-4 rounded-full bg-primary/5 border border-primary/10 text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-primary text-base" />
                                        {errors.name && <p className="text-red-500 text-sm px-4">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-1">
                                        <input {...register("email")} placeholder="Email" className="w-full px-6 py-4 rounded-full bg-primary/5 border border-primary/10 text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-primary text-base" />
                                        {errors.email && <p className="text-red-500 text-sm px-4">{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <textarea {...register("message")} placeholder="Message" rows={4} className="w-full px-6 py-4 rounded-3xl bg-primary/5 border border-primary/10 text-primary placeholder:text-primary/30 focus:outline-none focus:ring-2 focus:ring-primary text-base resize-none" />
                                    {errors.message && <p className="text-red-500 text-sm px-4">{errors.message.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-black transition-all shadow-xl text-sm tracking-widest uppercase mt-4"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
