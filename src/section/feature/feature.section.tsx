const features = [
    {
        icon: "ri-flashlight-line",
        title: "Transaksi Cepat",
        description:
            "Proses transaksi instan dengan kecepatan tinggi untuk kenyamanan kamu.",
    },
    {
        icon: "ri-customer-service-2-line",
        title: "Layanan Personal",
        description:
            "Tim support yang siap membantu kamu dengan layanan eksklusif dan profesional.",
    },
    {
        icon: "ri-shield-star-line",
        title: "Likuiditas Terbaik",
        description:
            "Akses likuiditas tinggi untuk memastikan transaksi kamu berjalan lancar tanpa hambatan.",
    },
    {
        icon: "ri-bank-card-line",
        title: "Deposit Tidak Terbatas",
        description:
            "Menerima deposit dalam jumlah besar, baik dalam bentuk fiat maupun kripto.",
    },
    {
        icon: "ri-exchange-funds-line",
        title: "Harga Kompetitif",
        description:
            "Dapatkan harga terbaik dengan biaya transaksi rendah untuk keuntungan maksimal.",
    },
    {
        icon: "ri-bar-chart-line",
        title: "Competitive Rate",
        description:
            "Kami menyediakan nilai tukar terbaik untuk setiap transaksi kamu.",
    },
];



const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <div className="flex flex-col items-start bg-[--primary-v6] rounded-lg p-5 borde-[--primary-v4] shadow-xl">
        <div className="flex justify-center items-center bg-[--primary-v4] rounded-md p-2 mb-3">
            <i className={`${icon} text-4xl text-[--primary-v1]`} />
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-[--primary-v1]">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
);

const FeaturesSection = () => {
    return (
        <section className="bg-[--primary-v1]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[--primary-v6]">
                        Built for the Future of Digital Finance
                    </h2>
                    <p className="text-gray-500 sm:text-xl">
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
