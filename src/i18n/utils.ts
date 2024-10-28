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

export function flattenMarkdown(markdownText: string): string {
    return markdownText
        // Remove headers
        .replace(/^#{1,6}\s+/gm, "")
        // Remove bold and italic formatting
        .replace(/(\*\*|__)(.*?)\1/g, "$2")
        .replace(/(\*|_)(.*?)\1/g, "$2")
        // Remove strikethrough
        .replace(/~~(.*?)~~/g, "$1")
        // Remove links but keep text
        .replace(/\[([^\]]+)]\(([^)]+)\)/g, "$1")
        // Remove images but keep alt text
        .replace(/!\[([^\]]*)]\(([^)]+)\)/g, "$1")
        // Remove inline code
        .replace(/`([^`]+)`/g, "$1")
        // Remove code blocks
        .replace(/```[\s\S]*?```/g, "")
        // Remove horizontal lines
        .replace(/---+/g, "")
        // Remove lists and list markers
        .replace(/^\s*([-*+]|\d+\.)\s+/gm, "")
        // Remove blockquotes
        .replace(/^\s*>+/gm, "")
        // Remove extra whitespace and new lines
        .replace(/\n{2,}/g, "\n")
        .trim();
}