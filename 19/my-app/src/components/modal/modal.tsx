import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    headerRequired?: boolean;
    footerRequired?: boolean;
    closeOnBackdropClick?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title = '', children, headerRequired = true, footerRequired = true, closeOnBackdropClick = false }) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (closeOnBackdropClick && e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } bg-black bg-opacity-50`}
                onClick={handleBackdropClick}
        >
            <div
                className={`bg-white rounded-lg shadow-lg transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'
                    } w-11/12 md:w-1/2`}
            >
                {headerRequired &&
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-lg font-semibold">{title || ''}</h2>
                        <button
                            className="text-gray-400 hover:text-gray-600"
                            onClick={onClose}
                        >
                            ✕
                        </button>
                    </div>}
                <div className="p-4">{children}</div>
                {footerRequired &&
                    <div className="flex justify-end p-4 border-t">
                        <button
                            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

