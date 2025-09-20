import { I18n } from 'i18n-js';
import vi from './locales/vi.json';
import en from './locales/en.json';
import ja from './locales/ja.json';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Khởi tạo i18n với các ngôn ngữ
const translations = { vi, en, ja };
const i18n = new I18n(translations);

i18n.defaultLocale = 'vi';
i18n.locale = 'vi';
i18n.enableFallback = true;

// Storage key for persisting selected language
const STORAGE_KEY = 'locale';

// Determine initial locale from localStorage, browser, or default
const getInitialLocale = (): keyof typeof translations => {
    try {
        const saved = (typeof window !== 'undefined')
            ? (localStorage.getItem(STORAGE_KEY) as keyof typeof translations | null)
            : null;
        if (saved && translations[saved]) return saved;
    } catch (_) {
        // ignore storage errors (e.g., privacy mode)
    }

    const browserLang = (typeof navigator !== 'undefined' ? navigator.language : '')
        .split('-')[0] as keyof typeof translations;
    if (browserLang && translations[browserLang]) return browserLang;

    return i18n.defaultLocale as keyof typeof translations;
};

// Định nghĩa kiểu dữ liệu cho ngữ cảnh
interface LanguageContextType {
    i18n: I18n;
    locale: string;
    switchLanguage: (newLocale: keyof typeof translations) => void;
}

// Tạo context với kiểu dữ liệu cụ thể
const LanguageContext = createContext<LanguageContextType | null>(null);

// Provider cho ngữ cảnh ngôn ngữ
const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<string>(() => {
        const initial = getInitialLocale();
        i18n.locale = initial; // set synchronously so first render uses the right locale
        if (typeof document !== 'undefined') {
            document.documentElement.lang = initial;
        }
        return initial;
    });

    // Keep i18n and document.lang in sync with state (in case of external changes)
    useEffect(() => {
        if (i18n.locale !== locale) i18n.locale = locale;
        if (typeof document !== 'undefined') {
            document.documentElement.lang = locale;
        }
    }, [locale]);

    const switchLanguage = (newLocale: keyof typeof translations) => {
        if (translations[newLocale]) {
            // Update i18n first so consumers see the new locale on the next render
            i18n.locale = newLocale;
            setLocale(newLocale);
            try {
                if (typeof window !== 'undefined') {
                    localStorage.setItem(STORAGE_KEY, newLocale);
                }
            } catch (_) {
                // ignore storage errors
            }
            if (typeof document !== 'undefined') {
                document.documentElement.lang = newLocale;
            }
        } else {
            console.error(`Language ${newLocale} not supported`);
        }
    };

    return (
        <LanguageContext.Provider value={{ i18n, locale, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook để sử dụng ngữ cảnh
export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};

export { i18n };
export default LanguageProvider;
