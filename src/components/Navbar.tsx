import { useTranslations } from "@/i18n/utils";
import { useState } from "react";
import LanguagePicker from "./LanguagePicker";
import logo from "@//assets/images/logos/TEDxKMUTT_w.png";

const Navbar = ({ lang, path }: { lang: string; path: string }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const t = useTranslations(lang);

    return (
        <nav className="bg-black sticky top-0 z-50">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-8 py-5">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src={logo.src} className="w-40" alt="TEDxKMUTT logo" />
                </a>
                <button
                    onClick={toggleNavbar}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-black duration-150 hover:bg-gray-900"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isNavbarOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${isNavbarOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col items-center absolute right-3 w-44  font-medium text-white p-2 md:p-0 mt-4 border border-gray-800 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:w-auto md:flex-row md:mt-0 md:border-0 md:right-0 md:relative">
                        <li className="w-full text-center md:w-auto md:text-justify">
                            <button
                                onMouseEnter={toggleDropdown}
                                onClick={toggleDropdown}
                                className="flex items-center justify-center w-full py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 duration-150 hover:bg-gray-900 rounded-lg"
                            >
                                {t("nav.events")}
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div
                                    onMouseLeave={toggleDropdown}
                                    className="z-10 relative mt-2 font-normal text-white bg-black rounded-lg shadow w-full md:p-2 md:w-auto md:absolute"
                                >
                                    <ul
                                        className="pb-2 text-sm text-gray-300 space-y-1 md:pb-0"
                                        aria-labelledby="dropdownNavbarLink"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 rounded-md bg-gray-800 duration-150 hover:bg-gray-700"
                                            >
                                                Man in the Mirror
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="w-full text-center md:w-auto md:text-start">
                            <a
                                href={`/${lang}/about`}
                                className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 duration-150"
                            >
                                {t("nav.about")}
                            </a>
                        </li>
                        <li className="w-full text-center md:w-auto md:text-start">
                            <a
                                href={`/${lang}/watch`}
                                className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 duration-150"
                            >
                                {t("nav.watch")}
                            </a>
                        </li>
                        <li className="w-full text-center md:w-auto md:text-start">
                            <a
                                href={`/${lang}/read`}
                                className="block py-2 px-3 text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 duration-150"
                            >
                                {t("nav.read")}
                            </a>
                        </li>
                        <li className="w-full text-center md:w-auto md:text-start">
                            <LanguagePicker lang={lang} path={path} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
