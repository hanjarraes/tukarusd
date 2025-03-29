import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'

interface IDropdownItem {
    link: string
    icon: string;
    title: string;
    description: string;
}

interface IDropdownlanguage {
    label: string
    value: string
}

const languageDropdown: IDropdownlanguage[] = [
    { label: 'EN', value: 'en' },
    { label: 'ID', value: 'id' },
]

export default function Header(): React.ReactElement {
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language;

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };


    const [isOpen, setIsOpen] = useState(false);
    const dropdownItems: IDropdownItem[] = [
        { link: "#home", icon: "ri-home-3-line", title: t('home'), description: "Get a better understanding of your traffic" },
        { link: "#features", icon: "ri-line-chart-line", title: t('features'), description: "Speak directly to your customers" },
        { link: "#howToJoin", icon: "ri-git-repository-private-line", title: t('howToJoin'), description: "Your customers’ data will be safe and secure" },
        { link: "#review", icon: "ri-team-line", title: t('review'), description: "Connect with third-party tools" },
        { link: "#faq", icon: "ri-questionnaire-line", title: t('faq'), description: "Build strategic funnels that will convert" },
    ];

    const menuItems = [
        { title: t('home'), link: "#home" },
        { title: t('features'), link: "#features" },
        { title: t('howToJoin'), link: "#howToJoin" },
        { title: t('review'), link: "#review" },
        { title: t('faq'), link: "#faq" },
    ];


    const DropdownItem = ({ icon, title, link }: IDropdownItem) => (
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-[--primary-v4]">
            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-300 group-hover:bg-[--primary-v1]">
                <i className={`text-[20px] ${icon}`} />
            </div>
            <div className="flex-auto">
                <a href={link} className="block font-semibold text-[--primary-v1]" onClick={() => setIsOpen(false)}>
                    {title}
                    <span className="absolute inset-0"></span>
                </a>
            </div>
        </div>
    );

    return (
        <header>
            <nav className="bg-[--primary-v1] border-gray-200 px-4 py-8 lg:px-6 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        <img src={Logo} className="mr-3 h-9" alt="BiteCoint Logo" />
                    </a>
                    <div className="flex gap-2 items-center lg:order-2">
                        <a href="#"
                            className="no-underline bg-blue-600 text-white px-8 py-2 rounded-3xl hover:bg-blue-500 hidden sm:flex" >
                            {t('contactUs')}
                        </a>
                        <div className="flex flex-row items-center right-1 rounded-md ml-2 cursor-pointer">
                            <button
                                className={`${currentLanguage === 'en' && 'bg-[--primary-v3]'} p-2 flex flex-row gap-2 items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-[--primary-v3] focus:bg-[--primary-v3] hover:text-[--primary-v1] focus:outline-none rounded-l-md border-r-0 cursor-pointer ${currentLanguage === "en" ? "bg-[--primary-v3]" : ""
                                    }`}
                                onClick={() => handleChangeLanguage("en")}
                            >
                                <span className="text-md">En</span>
                                <span className='text-[20px]'>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                            </button>

                            <button
                                className={`${currentLanguage === 'id' && 'bg-[--primary-v3]'} p-2 flex flex-row gap-2 items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-[--primary-v3] focus:bg-[--primary-v3] hover:text-[--primary-v1] focus:outline-none rounded-r-md cursor-pointer ${currentLanguage === "id" ? "bg-[--primary-v3]" : ""
                                    }`}
                                onClick={() => handleChangeLanguage("id")}
                            >
                                <span className="text-md">Id</span>
                                <span className="text-[20px]">🇮🇩</span>
                            </button>
                        </div>
                    </div>
                    <div />
                    <div className="flex lg:hidden lg:gap-x-12 fixed z-[999] right-5 bg-[--primary-v3] px-3 py-2 rounded-full">
                        <div className="relative">
                            <button
                                type="button"
                                className="flex items-center  border-gray-100 hover:bg-gray-50  border-0 hover:text-primary-700 p-0 hover:text-[--primary-v1]hover:text-[--primary-v1] hover:bg-transparent border-[--primary-v4] text-[--primary-v1] "
                                aria-expanded={isOpen}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <i className="ri-menu-3-line text-[20px]" onClick={() => setIsOpen(!isOpen)} />
                            </button>
                            <div
                                className={`absolute top-full -right-4 sm:right-0 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[--primary-v5] shadow-lg transition-all duration-300 ease-out
                                    ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-3 pointer-events-none"}`}
                            >
                                <div className="p-4">
                                    {dropdownItems.map((item, index) => (
                                        <DropdownItem key={index} {...item} />
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x bg-[--primary-v4]">
                                    <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-[--primary-v1] hover:bg-[--primary-v2]">
                                        <i className="text-[20px] ri-play-circle-line" /> {t('startOtc')}
                                    </a>
                                    <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-[--primary-v1] hover:bg-[--primary-v2]">
                                        <i className="text-[20px] ri-customer-service-2-line" /> {t('contactUs')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {menuItems.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        href={item.link}
                                        className="block py-2 pr-4 pl-3 text-[--primary-v5] border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:hover:text-[--primary-v2] hover:bg-[--primary-v4] hover:text-[--primary-v5] lg:hover:bg-transparent border-[--primary-v4]"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}
