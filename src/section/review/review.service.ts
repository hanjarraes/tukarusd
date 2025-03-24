import { useState } from "react";

const useReview = (
    // { onFileUpload }: { onFileUpload: (file: File) => void; }
) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (validateFile(file)) {
                setSelectedFile(file);
                // onFileUpload(file);
            }
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            const file = event.dataTransfer.files[0];
            if (validateFile(file)) {
                setSelectedFile(file);
                // onFileUpload(file);
            }
        }
    };

    const validateFile = (file: File): boolean => {
        const allowedFormats = ["image/png", "image/jpeg", "application/pdf", "application/vnd.ms-excel"];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedFormats.includes(file.type)) {
            alert("Invalid file format. Allowed formats: PNG, JPG, PDF, XLS");
            return false;
        }

        if (file.size > maxSize) {
            alert("File size exceeds 5MB limit.");
            return false;
        }

        return true;
    };

    return {
        selectedFile,
        handleFileChange,
        handleDrop,
    }
}

export default useReview