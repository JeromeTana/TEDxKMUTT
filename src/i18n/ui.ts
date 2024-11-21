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
        "nav.about": "About us",
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
        "view.details": "View details",
        "watch.now": "Watch now",
        "home.hero.tag": "Ideas worth spreading",
        "home.hero.title": "Reimagining the Future, One Talk at a Time",
        "home.hero.description":
            "Experience thought-provoking talks from visionary thinkers and innovators at King Mongkut's University of Technology Thonburi",
        "home.hero.watch": "Watch talks",
        "home.hero.read": "Read blogs",
        "home.about.tag": "About us",
        "home.about.title": "Ideas in Action at KMUTT",
        "home.about.description": `TEDx KMUTT brings cutting-edge ideas to King Mongkut's University of Technology Thonburi. We showcase innovative thinkers from our community and beyond, fostering intellectual growth and inspiration`,
        "home.about.more": "Getting to know us",
        "home.vision.1": "Innovation",
        "home.vision.2": "Collaboration",
        "home.vision.3": "Impact",
        "home.tedx.tag": "TEDx",
        "home.tedx.title": "What is TEDx?",
        "home.tedx.description": `In the spirit of discovering and spreading ideas, TED has created a program called TEDx.\n\nTEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx[name],\n\nwhere x = independently organized TED event. At our TEDx[name] event,\n\nTED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program,\n\nbut individual TEDx events, including ours, are self-organized.`,
        "home.tedx.more": "Explore more of TEDx",
        "home.events.tag": "Our past journeys",
        "home.events.title": "A Legacy of Inspiration",
        "home.events.description":
            "Explore our previous events that have illuminated groundbreaking research, visionary projects, and transformative ideas born at KMUTT and beyond",
        "home.talks.tag": "Highlighted talks",
        "home.talks.title": "Ideas That Resonate",
        "home.talks.description":
            "Watch standout presentations from KMUTT researchers, alumni, and invited experts that exemplify our commitment to advancing knowledge and technology",
        "home.talks.more": "All talks",
        "home.read.tag": "Read blogs",
        "home.read.title": "Beyond the Stage",
        "home.read.description":
            "Delve deeper into TEDx KMUTT talks with expert analyses, speaker interviews, and explorations of how these ideas are shaping our future",
        "home.read.more": "All blogs",
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
        "view.details": "ดูรายละเอียด",
        "watch.now": "ดูทอล์ค",
    },
} as const;
