"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/schemas";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();
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
                setApiError(result.message || t("contact.error_generic"));
            }
        } catch (error) {
            setApiError(t("contact.error_connection"));
            console.error("Form submission error:", error);
        }
    };

    return (
        <section id="contact" className="relative pb-10 px-6 z-20 pt-16 overflow-visible bg-white">
            <div className="max-w-6xl mx-auto -mb-32 md:-mb-48 lg:-mb-56 relative z-30">
                <div className="bg-white rounded-[44px] p-8 lg:p-14 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.35)] border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Info Side */}
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#2a7dc9]/5 text-[#2a7dc9] text-xs font-black tracking-widest uppercase mb-6 border border-[#2a7dc9]/10">
                                    {t("contact.badge")}
                                </span>
                                <h2 className="text-4xl w-fit flex flex-col items-start md:text-6xl font-black text-[#1a3a2a] font-outfit mb-4 md:leading-[1] leading-[1.1] tracking-tight">
                                    {t("contact.title_start")}{" "}
                                    <span className="relative w-fit">
                                        <span className="relative z-10 text-[#2a73c1]">{t("contact.title_highlight")}</span>
                                        <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-200/70 -rotate-1 -z-0 rounded" />
                                    </span>
                                </h2>
                                <p className="text-gray-500 text-lg">
                                    {t("contact.description")} <br />
                                    <span className="text-[#2a7dc9] font-medium">{t("contact.wholesale")}</span>
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <a href="mailto:customercare@adrarecom.com" className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#2a7dc9] group-hover:bg-[#2a7dc9] group-hover:text-white transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t("contact.email_us")}</span>
                                        <span className="font-medium text-[#1a3a2a] group-hover:text-[#2a7dc9] transition-colors duration-300">customercare@adrarecom.com</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="lg:col-span-7">
                            {isSubmitSuccessful ? (
                                <div className="py-12 text-center text-[#2a7dc9] font-black bg-[#2a7dc9]/5 rounded-3xl border border-[#2a7dc9]/10 uppercase font-outfit tracking-widest">
                                    {t("contact.success_message")}
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    {apiError && (
                                        <div className="p-4 text-sm text-red-500 bg-red-50 rounded-2xl border border-red-100 mb-4">
                                            ❌ {apiError}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <input {...register("name")} placeholder={t("contact.name_placeholder")} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#2a7dc9] focus:ring-0 transition-all text-gray-800 placeholder:text-gray-400 font-medium" />
                                            {errors.name && <p className="text-red-500 text-xs px-2">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-1">
                                            <input {...register("email")} placeholder={t("contact.email_placeholder")} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#2a7dc9] focus:ring-0 transition-all text-gray-800 placeholder:text-gray-400 font-medium" />
                                            {errors.email && <p className="text-red-500 text-xs px-2">{errors.email.message}</p>}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <textarea {...register("message")} placeholder={t("contact.message_placeholder")} rows={3} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#2a7dc9] focus:ring-0 transition-all text-gray-800 placeholder:text-gray-400 font-medium resize-none" />
                                        {errors.message && <p className="text-red-500 text-xs px-2">{errors.message.message}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="relative group w-full overflow-hidden py-5 bg-[#2a7dc9] text-white font-black rounded-3xl hover:bg-[#2176c1] shadow-xl shadow-yellow-900/10 hover:-translate-y-1 active:scale-95 text-xs tracking-[0.2em] transition-all duration-300 uppercase mt-2 cursor-pointer"
                                    >
                                        <span className="relative z-10">{isSubmitting ? t("contact.sending") : t("contact.submit")}</span>
                                        <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
