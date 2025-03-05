import { AlertCircle, AlertTriangle, CheckCircle, InfoIcon, XIcon } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react';

// Implement a global context for accessing core functionalities from any component
const ModalContext = createContext({
    isOpen: false,
    type: "info",
    message: "",
    openModal: (message,type ) => {},
    closeModal: () => {},
});

const Modal = ({ children }) => {
    // Step 1: Initialize state to check isOpen and message status
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("info");

    // Step 2: Implement openModal and closeModal functions
    const openModal = (message, type) => {
        setMessage(message);
        setType(type);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        setIsOpen(false);
        setMessage("");
        setType("");
        document.body.style.overflow = "unset";
    };

    return (
        <ModalContext.Provider value={{ isOpen, message, type, openModal, closeModal }}>
            {children}
            {isOpen && <ModalComponent />}
        </ModalContext.Provider>
    );
};

export default Modal;

// Always create a custom hook
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("`useModal` must be used within a `ModalProvider`.");
    }
    return context;
};

// The modal component itself
export const ModalComponent = () => {
    const { message, type, closeModal } = useModal();
    const getIcon = () => {
        switch(type) {
            case "success":
                return <CheckCircle className='w-12 h-12 mb-4 text-green-500 dark:text-green-400' />;
            case "warning":
                return <AlertTriangle className='w-12 h-12 mb-4 text-yellow-500 dark:text-yellow-400' />;
            case "error":
                return <AlertCircle className='w-12 h-12 mb-4 text-red-500 dark:text-red-400' />;
            default:
                return <InfoIcon className='w-12 h-12 mb-4 text-blue-500 dark:text-blue-400' />;
        }
    };
    const getColorScheme = () => {
        switch(type) {
            case "success": 
                return "bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-800";
            case "warning": 
                return "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-800";
            case "error": 
                return "bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-800";
            default: 
                return "bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800";
        }
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out" onClick={closeModal}>
            {/* Modal card */}
            <div 
                className={`relative w-full max-w-md ${getColorScheme()} rounded-lg shadow-lg p-6 m-auto transform transition-transform duration-300 ease-in-out border`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-[#334155] hover:text-[#64748B] dark:text-[#c19bff] dark:hover:text-white transition-all"
                    aria-label="Close modal"
                >
                    <XIcon size={24} />
                </button>

                <div className="flex flex-col items-center text-center mt-7 space-y-4">
                    {getIcon()}
                    <p className="text-[#334155] dark:text-white">{message}</p>
                </div>
                <button 
                    onClick={closeModal} 
                    className="w-full mt-6 py-3 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-700 dark:bg-[#c19bff] dark:hover:bg-[#a064ff] transition-colors duration-300 ease-in-out"
                >
                    Got it
                </button>
            </div>
        </div>
    );
};