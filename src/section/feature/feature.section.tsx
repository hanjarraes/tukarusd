const features = [
    {
        icon: "ri-wallet-3-line",
        title: "Secure Digital Wallet",
        description:
            "Store, send, and receive cryptocurrencies with ease. Our multi-layer security ensures your assets stay safe at all times.",
    },
    {
        icon: "ri-exchange-dollar-line",
        title: "Instant Transactions",
        description:
            "Enjoy lightning-fast transactions with minimal fees. Buy, sell, and trade crypto seamlessly on our platform.",
    },
    {
        icon: "ri-shield-check-line",
        title: "Enterprise-Grade Security",
        description:
            "BiteCoin employs cutting-edge encryption and AI-powered fraud detection to keep your assets secure.",
    },
    {
        icon: "ri-global-line",
        title: "Borderless Payments",
        description:
            "Send and receive payments across the globe without intermediaries. Lower costs, faster transfers, and full transparency.",
    },
    {
        icon: "ri-bar-chart-box-line",
        title: "Advanced Trading Tools",
        description:
            "Take control of your investments with real-time analytics, AI-driven insights, and automated trading bots.",
    },
    {
        icon: "ri-community-line",
        title: "Decentralized Finance (DeFi)",
        description:
            "Access a range of DeFi services, including staking, yield farming, and lending, all in one secure ecosystem.",
    },
];


const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <div className="flex flex-col items-start bg-gray-900 rounded-lg p-5 borde-slate-700 shadow-xl">
        <div className="flex justify-center items-center bg-slate-700 rounded-md p-2 mb-3">
            <i className={`${icon} text-4xl text-white`} />
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
);

const FeaturesSection = () => {
    return (
        <section className="bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Built for the Future of Digital Finance
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        At BiteCoin, we harness the power of blockchain to create an ecosystem that is secure, efficient, and accessible to all.
                        Whether you're a trader, investor, or business, our cutting-edge solutions are designed to help you thrive in the digital economy.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
