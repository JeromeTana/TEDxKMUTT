export interface UI {
    [key: string]: {
        [key: string]: string;
    };
}

export const languages = {
    en: "English",
    th: "ไทย",
};

export const defaultLang = "en";

export const ui: UI = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.twitter": "Twitter",
    },
    th: {
        "nav.home": "หน้าหลัก",
        "nav.about": "เกี่ยวกับเรา",
    },
} as const;
