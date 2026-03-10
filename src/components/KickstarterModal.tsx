"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/schemas";
import { useLanguage } from "@/lib/LanguageContext";

export default function KickstarterModal() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    useEffect(() => {
        // Show modal after 3 seconds
        const timer = setTimeout(() => {
            setIsOpen(true);
            // Trigger animation after content is in DOM
            setTimeout(() => setIsVisible(true), 10);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const closeForm = () => {
        setIsVisible(false);
        // Wait for transition before removing from DOM
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

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
                setTimeout(() => closeForm(), 2000);
            } else {
                setApiError(result.message || t("kickstarter.error_generic"));
            }
        } catch (error) {
            setApiError(t("kickstarter.error_connection"));
            console.error("Form submission error:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Backdrop */}
            <div
                onClick={closeForm}
                className="absolute inset-0 bg-[#1a3a2a]/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-2xl bg-white rounded-[44px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transform transition-transform duration-300 ${isVisible ? "scale-100 translate-y-0" : "scale-90 translate-y-4"}`}
            >
                {/* Close Button */}
                <button
                    onClick={closeForm}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors z-50 cursor-pointer"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="p-8 md:p-12">
                    <div className="mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#2a7dc9]/5 text-[#2a7dc9] text-[10px] font-black tracking-widest uppercase mb-4 border border-[#2a7dc9]/10">
                            {t("kickstarter.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl w-fit flex flex-col items-start font-black text-[#1a3a2a] font-outfit mb-4 leading-[1.1] tracking-normal">
                            {t("kickstarter.title_start")}{" "}
                            <span className="relative w-fit">
                                <span className="relative z-10 text-[#2a73c1]">{t("kickstarter.title_highlight")}</span>
                                <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-200/70 -rotate-1 -z-0 rounded" />
                            </span>
                        </h2>
                        <p className="text-gray-500 text-md md:text-lg leading-relaxed">
                            {t("kickstarter.description")}
                        </p>
                    </div>

                    {isSubmitSuccessful ? (
                        <div className="py-12 text-center text-[#2a7dc9] font-black bg-[#2a7dc9]/5 rounded-3xl border border-[#2a7dc9]/10 uppercase font-outfit tracking-widest transition-all duration-500">
                            {t("kickstarter.success")}
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {apiError && (
                                <div className="p-4 text-xs text-red-500 bg-red-50 rounded-2xl border border-red-100 mb-4">
                                    ❌ {apiError}
                                </div>
                            )}
                            <div className="space-y-1">
                                <input
                                    {...register("name")}
                                    placeholder={t("contact.name_placeholder")}
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#2a7dc9] focus:ring-0 transition-all text-gray-800 placeholder:text-gray-400 font-medium text-base md:text-sm"
                                />
                                {errors.name && <p className="text-red-500 text-[10px] px-2 font-bold">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <input
                                    {...register("email")}
                                    placeholder={t("contact.email_placeholder")}
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#2a7dc9] focus:ring-0 transition-all text-gray-800 placeholder:text-gray-400 font-medium text-base md:text-sm"
                                />
                                {errors.email && <p className="text-red-500 text-[10px] px-2 font-bold">{errors.email.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <textarea
                                    {...register("message")}
                                    placeholder={t("contact.message_placeholder")}
                                    rows={2}
                                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#2a7dc9] focus:ring-0 transition-all text-gray-800 placeholder:text-gray-400 font-medium text-base md:text-sm resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative group w-full overflow-hidden py-5 bg-[#2a7dc9] text-white font-black rounded-3xl hover:bg-[#2176c1] shadow-xl shadow-yellow-900/10 hover:-translate-y-1 active:scale-95 text-xs tracking-[0.2em] transition-all duration-300 uppercase mt-4 cursor-pointer"
                            >
                                <span className="relative z-10">{isSubmitting ? t("kickstarter.registering") : t("kickstarter.submit")}</span>
                                <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700" />
                            </button>
                        </form>
                    )}
                </div>

                {/* Decorative background paw */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12 pointer-events-none">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" /></svg>
                </div>
            </div>
        </div>
    );
}
