import { useEffect, useRef, useState } from "react";
import useReview from "./review.service";
import { useTranslation } from "react-i18next";

const ReviewSection = () => {
    const stars = [1, 2, 3, 4, 5];
    const ratings = [
        { star: 5, width: 'w-5/6', percentage: '83%' },
        { star: 4, width: 'w-4/6', percentage: '67%' },
        { star: 3, width: 'w-3/6', percentage: '50%' },
        { star: 2, width: 'w-2/6', percentage: '33%' },
        { star: 1, width: 'w-1/6', percentage: '17%' },
    ];


    const {
        selectedFile,
        message,
        name,
        dataReview,
        isLoading,
        rating,
        hoverRating,
        containerRef,
        setRating,
        setHoverRating,
        updateData,
        setName,
        setMessage,
        handleFileChange,
        handleDrop,
    } = useReview()
    const convertToKB = (bytes: number) => (bytes / 1024).toFixed(2);
    const { t } = useTranslation()

    return (
        <section className="px-3 sm:px-10" id="review">
            {/* <div className="max-w-7xl mx-auto grid grid-cols-5 gap-2 py-10"> */}
            {/* <div className="col-span-2 flex flex-col max-w-xl shadow-sm rounded-xl lg:p-12 bg-[--primary-v4] text-[--primary-v1] border-[1px] border-gray-600">
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                        <div className="flex flex-col items-center py-6 space-y-3">
                            <span className="text-center">How was your experience?</span>
                            <div className="flex space-x-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        title={`Rate ${star} ${star > 1 ? "stars" : "star"}`}
                                        aria-label={`Rate ${star} ${star > 1 ? "stars" : "star"}`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="focus:outline-none"
                                    >
                                        <i
                                            className={`text-[40px] transition-colors duration-200 ${star <= (hoverRating || rating)
                                                    ? "ri-star-fill text-yellow-500"
                                                    : "ri-star-line text-gray-400 hover:text-yellow-400"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="w-full pb-5">
                            <input
                                type="file"
                                id="fileInput"
                                onChange={handleFileChange}
                                accept=".png, .jpg, .jpeg"
                                hidden
                            />
                            <div className="flex">
                                <label
                                    htmlFor="fileInput"
                                    className="min-w-fit font-bold border-[1px] rounded-s-md px-5 py-[10px] cursor-pointer border-[--primary-v1] text-[--primary-v1] hover:bg-[--primary-v3]"
                                >
                                    BROWSE FILE
                                </label>
                                <div className="flex items-center border-[1px] rounded-e-md w-full pl-2 text-gray-v3 bg-gray-v1">
                                    {selectedFile ? selectedFile.name : "No file chosen"}
                                </div>
                            </div>

                            <div
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleDrop}
                                className="flex flex-col justify-center items-center mt-2 bg-brand-v1 rounded-md border-[1px] border-dashed border-brand-v3 h-[150px] cursor-pointer"
                            >
                                {selectedFile ? (
                                    <>
                                        <i className="ri-file-line text-[18px] mb-1 text-[--primary-v5]" />
                                        <div className="text-[--primary-v1] mb-1">{selectedFile.name}</div>
                                        <div className="text-gray-v5">{convertToKB(selectedFile.size)} KB</div>
                                    </>
                                ) : (
                                    <>
                                        <i className="ri-upload-line text-[18px] mb-1" />
                                        <div className="text-[--primary-v1] mb-1">Click to upload or drag and drop</div>
                                        <div className="text-gray-v5">PNG, JPG, JPEG (MAX. 5MB)</div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <input
                                placeholder="Name..."
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="p-4 rounded-md resize-none text-[--primary-v5] bg-gray-50" />
                            <textarea
                                placeholder="Message..."
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                className="p-4 rounded-md resize-none text-[--primary-v5] bg-gray-50" />
                            <button
                                type="button"
                                onClick={() => updateData()}
                                className="inline-flex mt-4 items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                                {isLoading ? 'Loading...' : 'Leave feedback'}
                            </button>
                        </div>
                    </div>
                </div> */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex justify-center w-full pt-10 text-[--primary-v6] text-4xl font-bold"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {t("theyTalkAbout")}
                </div>

                {/* Scrollable container */}
                <div
                    className="relative w-full py-10 overflow-x-auto whitespace-nowrap scrollbar-hide"
                    ref={containerRef}
                >
                    <div className="flex gap-4 px-4 sm:px-10 w-max">
                        {[...dataReview, ...dataReview].map(({ name, updated_at, rating, message, file }, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-[350px] sm:w-[400px] shrink-0 rounded-md p-6 text-[--primary-v1] bg-[--primary-v4] border-[1px] border-[--primary-v4]"
                            >
                                <div className="flex justify-between pl-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <h4 className="font-bold break-words">{name}</h4>
                                            <span className="text-xs text-[--primary-v1] break-words">{updated_at}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center text-yellow-400 bg-[--primary-v5] w-11 h-11 rounded-full">
                                        <span className="text-xl font-bold">{rating}</span>
                                    </div>
                                </div>
                                {file && (
                                    <div className="flex justify-center mt-4">
                                        <img
                                            src={'https://otc.corecraft.my.id/' + file}
                                            className="w-full h-[250px] rounded-md pointer-events-none"
                                            alt="Review"
                                        />
                                    </div>
                                )}
                                <div className="p-4 space-y-2 text-sm text-[--primary-v1] h-[150px] overflow-y-auto break-words leading-relaxed">
                                    <p className="whitespace-pre-wrap">{message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    );
};

export default ReviewSection;
