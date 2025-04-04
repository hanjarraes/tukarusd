import { fetch, post } from "common/common.service";
import { useEffect, useRef, useState } from "react";
import { IDataReview } from "./review.interface";
import { Toast } from "component/toast/toast.component";

const useReview = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [dataReview, setDataReview] = useState<IDataReview[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollSpeed = 0.5; // Kecepatan scroll otomatis
    const duration = 5000; // Durasi dalam milidetik

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && validateFile(file)) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        if (file && validateFile(file)) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    // Validasi hanya PNG & JPG
    const validateFile = (file: File): boolean => {
        const allowedFormats = ["image/png", "image/jpeg"];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedFormats.includes(file.type)) {
            alert("Invalid file format. Only PNG and JPG are allowed.");
            return false;
        }

        if (file.size > maxSize) {
            alert("File size exceeds 5MB limit.");
            return false;
        }

        return true;
    };
    const getReview = async () => {
        try {
            const response = await fetch<{ data: IDataReview[] }, unknown>({ endpoint: `api/review` });
            if (response) {
                setDataReview(response.data);
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };


    const postReview = async () => {
        // Validasi input sebelum mengirim data
        if (!name.trim()) {
            Toast({
                header: 'Validation Error',
                message: 'Name is required.',
                type: 'error',
            });
            return;
        }
        if (!message.trim()) {
            Toast({
                header: 'Validation Error',
                message: 'Message is required.',
                type: 'error',
            });
            return;
        }
        if (!rating || rating < 1 || rating > 5) {
            Toast({
                header: 'Validation Error',
                message: 'Please provide a valid rating between 1 and 5.',
                type: 'error',
            });
            return;
        }
        if (!(selectedFile instanceof File)) {
            Toast({
                header: 'Validation Error',
                message: 'Please upload a valid image file.',
                type: 'error',
            });
            return;
        }

        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("message", message);
            formData.append("rating", rating.toString());
            formData.append("file", selectedFile);

            const response = await post({
                payload: formData,
                endpoint: "api/review/create",
                isFormData: true,
            });

            return response;
        } catch (error) {
            Toast({
                header: 'Submission Error',
                message: 'Failed to post review. Please try again later.',
                type: 'error',
            });
        }
    };

    const updateData = async () => {
        setIsLoading(true);
        await postReview()
        setIsLoading(false);
        await getReview()
    }

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrame: number;
        let start: number | null = null;

        const smoothScroll = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            if (elapsed < duration) {
                container.scrollLeft += scrollSpeed;
                animationFrame = requestAnimationFrame(smoothScroll);
            } else {
                start = null;
                animationFrame = requestAnimationFrame(smoothScroll);
            }
        };

        const startScrolling = () => {
            if (!isScrolling) {
                setIsScrolling(true);
                animationFrame = requestAnimationFrame(smoothScroll);
            }
        };

        startScrolling();

        return () => cancelAnimationFrame(animationFrame);
    }, []);


    useEffect(() => {
        getReview();
    }, []);

    return {
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
    };
};

export default useReview;
