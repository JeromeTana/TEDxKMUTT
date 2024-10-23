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
        "nav.events": "Events",
        "nav.watch": "Watch",
        "nav.read": "Read",
        "nav.twitter": "Twitter",
        "footer.info": "Information",
        "footer.contact": "Contact",
        "footer.contact.location":
            "Knowledge Exchange 110/1 Krung Thon Buri Road, Khwaeng Bang Lamphu Lang, Khet Khlong San, Krung Thep Maha Nakhon 10600",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.cookies": "Cookies Settings",
    },
    th: {
        "nav.home": "หน้าหลัก",
        "nav.about": "เกี่ยวกับเรา",
        "nav.events": "กิจกรรมต่าง ๆ",
        "nav.watch": "ดูวิดีโอ",
        "nav.read": "อ่านบทความ",
        "footer.info": "ข้อมูลต่าง ๆ",
        "footer.contact": "ติดต่อเรา",
        "footer.contact.location":
            "อาคารเคเอกซ์ 110/1 ถนนกรุงธนบุรี แขวงบางลำภูล่าง เขตคลองสาน กรุงเทพฯ 10600",
        "footer.privacy": "นโยบายความเป็นส่วนตัว",
        "footer.terms": "ข้อกำหนดการใช้งาน",
        "footer.cookies": "การตั้งค่าคุกกี้",
    },
} as const;
