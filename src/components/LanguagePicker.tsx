import { languages } from "@/i18n/ui";
import { getLangFromUrl } from "@/i18n/utils";

const LanguagePicker = ({ url }: { url: URL }) => {
    const lang = getLangFromUrl(url);
    const pathWithoutLang = url.pathname.slice(lang.length + 2); // +2 to account for the leading "/"

    const replacePath = (newLang: string) => {
        return `/${newLang}/${pathWithoutLang}`;
    };

    return (
        <ul>
            {Object.entries(languages)
                .filter(([langCode]) => langCode !== lang)
                .map(([langCode]) => (
                    <li key={langCode}>
                        <a
                            href={replacePath(langCode)}
                            className="flex items-center gap-1 p-2 justify-center rounded-sm hover:text-white hover:bg-gray-900 md:hover:text-primary-500 md:hover:bg-transparent duration-150"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5em"
                                height="1.5em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                                ></path>
                            </svg>
                            {langCode === "en" ? "TH" : "EN"}
                        </a>
                    </li>
                ))}
        </ul>
    );
};

export default LanguagePicker;
