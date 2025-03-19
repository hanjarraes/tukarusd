const ReviewSection = () => {
    const stars = [1, 2, 3, 4, 5];
    const ratings = [
        { star: 5, width: 'w-5/6', percentage: '83%' },
        { star: 4, width: 'w-4/6', percentage: '67%' },
        { star: 3, width: 'w-3/6', percentage: '50%' },
        { star: 2, width: 'w-2/6', percentage: '33%' },
        { star: 1, width: 'w-1/6', percentage: '17%' },
    ];

    const reviews = [
        {
            name: "Alice Robertson",
            date: "1 week ago",
            rating: 5,
            text: [
                "Amazing platform! The transactions are super fast, and the security is top-notch.",
                "I love how user-friendly the dashboard is. Makes trading so much easier!"
            ]
        },
        {
            name: "Michael Lee",
            date: "3 days ago",
            rating: 4,
            text: [
                "Great experience overall, but I hope they add more staking options in the future.",
                "Customer support was very responsive and helped me with my verification issue quickly."
            ]
        },
        {
            name: "Sophia Martinez",
            date: "2 weeks ago",
            rating: 4.5,
            text: [
                "Really smooth UI! I switched from another exchange, and I’m not looking back.",
                "Would be great if they added more fiat deposit options, but still a fantastic service!"
            ]
        },
        {
            name: "Daniel Carter",
            date: "5 days ago",
            rating: 3.5,
            text: [
                "The platform is good, but withdrawals take a bit longer than expected sometimes.",
                "Security features are impressive, but a bit too many verification steps for small transactions."
            ]
        },
        {
            name: "Emily Nguyen",
            date: "4 days ago",
            rating: 5,
            text: [
                "This is hands down the best crypto exchange I’ve used. Low fees, fast transactions, and an easy-to-use UI!",
                "The mobile app works seamlessly. Love it!"
            ]
        },
        {
            name: "James Wilson",
            date: "6 days ago",
            rating: 4,
            text: [
                "I enjoy trading on BiteCoin. However, sometimes there are slight delays in price updates.",
                "Still, the experience has been mostly positive, and I’ll continue using it."
            ]
        }
    ];


    return (
        <section className="bg-[--primary-v6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex gap-3">
                <div className="flex flex-col gap-3 w-full min-w-[500px]">
                    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-[--primary-v4] text-[--primary-v1] border-[1px] border-gray-600">
                        <h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
                        <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                            <div className="flex">
                                {stars.map((star) => (
                                    <button key={star} type="button" title={`Rate ${star} stars`}>
                                        <i className="text-[20px] ri-star-line" />
                                    </button>
                                ))}
                            </div>
                            <span className="text-[--primary-v1]">3 out of 5</span>
                        </div>
                        <p className="text-sm text-[--primary-v1]">861 global ratings</p>
                        <div className="flex flex-col mt-4">
                            {ratings.map(({ star, width, percentage }) => (
                                <div key={star} className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">{star} star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
                                        <div className={`bg-orange-500 h-4 ${width}`}></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">{percentage}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-[--primary-v4] text-[--primary-v1] border-[1px] border-gray-600">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                                <div className="flex space-x-3">
                                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <i className="text-[40px] ri-star-line" />
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                        <i className="text-[40px] ri-star-line" />
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                        <i className="text-[40px] ri-star-line" />
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                        <i className="text-[40px] ri-star-line" />
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                        <i className="text-[40px] ri-star-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea placeholder="Message..." className="p-4 rounded-md resize-none text-[--primary-v5] bg-gray-50"></textarea>
                                <button type="button" className="inline-flex mt-4 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 me-2 mb-2">
                                    Leave feedback
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 max-h-[calc(100vh-150px)] overflow-y-auto pb-2">
                    {reviews.map(({ name, date, rating, text }, index) => (
                        <div key={index} className="flex flex-col w-[340px] rounded-md p-6 text-[--primary-v1] bg-[--primary-v4] border-[1px] border-gray-600">
                            <div className="flex justify-between pl-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <h4 className="font-bold">{name}</h4>
                                        <span className="text-xs text-[--primary-v1]">{date}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center text-yellow-400 bg-[--primary-v5] w-11 h-11 rounded-full ">
                                    <span className="text-xl font-bold">{rating}</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm text-[--primary-v1]">
                                {text.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
