import React from 'react';
import { CapsuleButtonProps } from '../types';

export const CapsuleButton: React.FC<CapsuleButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 bg-whatsapp-primary py-2 text-white rounded-full hover:bg-whatsapp-dark focus:outline-none"
    >
      {label}
    </button>
  );
};

