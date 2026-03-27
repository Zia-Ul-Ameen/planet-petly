"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/translations/en.json";
import es from "@/translations/es.json";
import fr from "@/translations/fr.json";
import tr from "@/translations/tr.json";
import pt from "@/translations/pt.json";
import ja from "@/translations/ja.json";
import pl from "@/translations/pl.json";
import de from "@/translations/de.json";
import sk from "@/translations/sk.json";
import bg from "@/translations/bg.json";

type Locale = "en" | "es" | "fr" | "tr" | "pt" | "ja" | "pl" | "de" | "sk" | "bg";

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t: (key: string) => any;
}

const translations = { en, es, fr, tr, pt, ja, pl, de, sk, bg };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");

    useEffect(() => {
        const savedLocale = localStorage.getItem("locale") as Locale;
        if (savedLocale && (savedLocale === "en" || savedLocale === "es" || savedLocale === "fr" || savedLocale === "tr" || savedLocale === "pt" || savedLocale === "ja" || savedLocale === "pl" || savedLocale === "de" || savedLocale === "sk" || savedLocale === "bg")) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLocaleState(savedLocale);
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("locale", newLocale);
        document.documentElement.lang = newLocale;
    };

    const t = (key: string) => {
        const keys = key.split(".");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let value: any = translations[locale];
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key; // return key if not found
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
