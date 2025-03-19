
import './customer.style.css'

const CustomerSection = () => {
    const logos = [
        "ri-discord-fill",
        "ri-svelte-fill",
        "ri-meta-line",
        "ri-evernote-fill",
        "ri-netflix-fill",
        "ri-playstation-line",
        "ri-steam-fill",
        "ri-switch-line",
        "ri-tiktok-line",
        "ri-remixicon-line",
        "ri-soundcloud-fill",
    ];
    return (
        <>
            {/* customer logo */}
            <section className="bg-[--primary-v1] dark:bg-[--primary-v5] overflow-hidden">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-[--primary-v9] dark:text-[--primary-v1] md:text-4xl">
                        You’ll be in good company
                    </h2>

                    {/* Wrapper Slider */}
                    <div className="slider">
                        <div className="logos-slide">
                            {/* Duplikasi Elemen untuk Efek Seamless */}
                            {logos.concat(logos).map((icon, index) => (
                                <a key={index} href="#" className="logo-item">
                                    <i className={`${icon} text-[45px] text-[--primary-v2] dark:text-[--primary-v2]`} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* end customer logo */}
        </>
    )
}

export default CustomerSection
