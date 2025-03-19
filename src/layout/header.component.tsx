import React, { useState } from 'react'
import Logo from '../assets/logo.png'

interface IDropdownItem {
    icon: string;
    title: string;
    description: string;
}


export default function Header(): React.ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownItems: IDropdownItem[] = [
        { icon: "ri-pie-chart-2-line", title: "Analytics", description: "Get a better understanding of your traffic" },
        { icon: "ri-cursor-line", title: "Engagement", description: "Speak directly to your customers" },
        { icon: "ri-git-repository-private-line", title: "Security", description: "Your customers’ data will be safe and secure" },
        { icon: "ri-team-line", title: "Integrations", description: "Connect with third-party tools" },
        { icon: "ri-puzzle-line", title: "Automations", description: "Build strategic funnels that will convert" },
    ];

    const menuItems = ["Company", "Marketplace", "Features", "Team", "Contact"];

    const DropdownItem = ({ icon, title, description }: IDropdownItem) => (
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-[--primary-v4]">
            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-300 group-hover:bg-[--primary-v1]">
                <i className={`text-[20px] ${icon}`} />
            </div>
            <div className="flex-auto">
                <a href="#" className="block font-semibold text-[--primary-v1]">
                    {title}
                    <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-300">{description}</p>
            </div>
        </div>
    );

    return (
        <header>
            <nav className="bg-[--primary-v1] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-[--primary-v5]">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="BiteCoint Logo" />
                    </a>
                    <div className="flex items-center lg:order-2">
                        {/* <a href="#" className="text-[--primary-v5] dark:text-[--primary-v1] hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-[--primary-v4] focus:outline-none dark:focus:ring-[--primary-v5]">Log in</a> */}
                        {/* <a href="#" className="text-[--primary-v1] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a> */}
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-[--primary-v3] rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[--primary-v2] dark:hover:bg-[--primary-v4] dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <i className="ri-menu-3-line text-[20px]" />
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-[--primary-v1] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[--primary-v1]" aria-current="page">Home</a>
                            </li>
                            <li>
                                <div className="hidden lg:flex lg:gap-x-12">
                                    <div className="relative">
                                        <button
                                            type="button"
                                            className="flex items-center py-2 pr-4 pl-3 text-[--primary-v4] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-[--primary-v2] lg:dark:hover:text-[--primary-v1] dark:hover:bg-[--primary-v4] dark:hover:text-[--primary-v1] lg:dark:hover:bg-transparent dark:border-[--primary-v4]"
                                            aria-expanded={isOpen}
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            Product
                                            <i
                                                className={`ri-arrow-down-s-line transition-transform duration-300 ml-2 ${isOpen ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </button>

                                        {/* Dropdown */}
                                        <div
                                            className={`absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[--primary-v6] shadow-lg ring-1 ring-[--primary-v6]/5 transition-all duration-300 ease-out ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
                                                }`}
                                        >
                                            <div className="p-4">
                                                {dropdownItems.map((item, index) => (
                                                    <DropdownItem key={index} {...item} />
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-2 divide-x bg-[--primary-v4]">
                                                <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-100 hover:bg-[--primary-v5]">
                                                    <i className="text-[20px] ri-play-circle-line" /> Watch demo
                                                </a>
                                                <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-100 hover:bg-[--primary-v5]">
                                                    <i className="text-[20px] ri-customer-service-2-line" /> Contact sales
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {menuItems.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="block py-2 pr-4 pl-3 text-[--primary-v4] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-[--primary-v2] lg:dark:hover:text-[--primary-v1] dark:hover:bg-[--primary-v4] dark:hover:text-[--primary-v1] lg:dark:hover:bg-transparent dark:border-[--primary-v4]"
                                    >
                                        {item}
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
