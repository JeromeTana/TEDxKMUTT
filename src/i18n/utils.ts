import { ui, defaultLang, type UI } from "./ui";

export function getLangFromUrl(url: URL): string {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as string;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return (ui as UI)[lang][key] || ui[defaultLang][key];
    };
}
