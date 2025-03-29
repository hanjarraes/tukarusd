import React from 'react'
import Logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'


export default function Footer(): React.ReactElement {
    const { t } = useTranslation()
    return (
        <footer className="bg-[--primary-v1]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex justify-between items-center flex-col sm:flex-row">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src={Logo} className="h-14 me-3" alt="BiteCoint Logo" />
                        </a>
                        <div className="flex mt-5 sm:justify-center">
                            <a href="#" className="text-[20px] text-[--primary-v6] hover:text-[--primary-v6] dark:hover:text-[--primary-v1]">
                                <i className="ri-twitter-x-line" />
                            </a>
                            <a href="#" className="text-[20px] text-[--primary-v6] hover:text-[--primary-v6] dark:hover:text-[--primary-v1] ms-5">
                                <i className="ri-whatsapp-line" />
                            </a>
                            <a href="#" className="text-[20px] text-[--primary-v6] hover:text-[--primary-v6] dark:hover:text-[--primary-v1] ms-5">
                                <i className="ri-whatsapp-line" />
                            </a>
                            <a href="#" className="text-[20px] text-[--primary-v6] hover:text-[--primary-v6] dark:hover:text-[--primary-v1] ms-5">
                                <i className="ri-telegram-2-line" />
                            </a>
                            <a href="#" className="text-[20px] text-[--primary-v6] hover:text-[--primary-v6] dark:hover:text-[--primary-v1] ms-5">
                                <i className="ri-telegram-2-line" />
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center mx-4 flex-col sm:flex-row'>
                        <a href="#"
                            className="no-underline cursor-pointer hover:text-[--primary-v4] hidden sm:flex" >
                            {t('contactUs')}
                        </a>
                        <a href="#"
                            className="no-underline bg-blue-600 text-white px-[5rem] py-2 rounded-3xl hover:bg-blue-500 font-bold" >
                            {t('startOtc')}
                        </a>
                        <a href="#"
                            className="no-underline cursor-pointer hover:text-[--primary-v4] flex sm:hidden" >
                            {t('contactUs')}
                        </a>
                    </div>
                    {/* <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[--primary-v6] uppercase dark:text-[--primary-v1]">Resources</h2>
                            <ul className="text-[--primary-v3] dark:text-[--primary-v2] font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">BiteCoint</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[--primary-v6] uppercase dark:text-[--primary-v1]">Follow us</h2>
                            <ul className="text-[--primary-v3] dark:text-[--primary-v2] font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[--primary-v6] uppercase dark:text-[--primary-v1]">Legal</h2>
                            <ul className="text-[--primary-v3] dark:text-[--primary-v2] font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                <div className='text-[--primary-v5] mt-10 leading-4'>
                    {t('tradingRiskNotice')}
                </div>
            </div>
        </footer>

    )
}
