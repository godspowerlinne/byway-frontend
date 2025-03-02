import { XIcon } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react'

// Implement a global context for accessing core functionalities from any component
const ModalContext = createContext({
    isOpen: false,
    message: "",
    openModal: (message) => { },
    closeModal: () => { },
});
const Modal = ({ children }) => {
    // Step 1: Initialize state to check isOpen and message status
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    // Step 2: Implement openModal and closeModal functions
    const openModal = (message) => {
        setMessage(message);
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }
    const closeModal = () => {
        setIsOpen(false);
        setMessage("");
        document.body.style.overflow = "unset";
    }
    return (
        <ModalContext.Provider value={{ isOpen, message, openModal, closeModal }}>
            {children}
            {isOpen && <ModalComponent />}
        </ModalContext.Provider>
    )
}

export default Modal

// Always create a custom hook 
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("`useModal` must be used within a `useModal`");
    }
    return context;
};

// The modal component it self
export const ModalComponent = () => {
    const { message, closeModal } = useModal();
    return (

        <div className="fixed inset-0 z-50 flex items-center justify-cente">
            <div className="absolute inset-0 bg-black/50" onClick={closeModal}>
                {/* modal card */}
                <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
                    {/* Close button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <XIcon size={24} />
                    </button>

                    <div className="mt-7">
                        <p className="text-gray-700 dark:text-gray-200">{message}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
