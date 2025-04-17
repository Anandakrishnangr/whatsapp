import React from 'react';
import { InputProps } from '../../types/input';

export const OtpInput: React.FC<InputProps> = ({ maxLength = 1, value, name='', onChange,label='' }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = value.split('');
        newValue[index] = e.target.value;
        onChange(e, newValue.join(''));
        if (e.target.value && index < maxLength - 1) {
            (e.target.nextElementSibling as HTMLInputElement)?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !value[index] && index > 0) {
            const previousSibling = (e.target as HTMLInputElement).previousElementSibling;
            if (previousSibling && previousSibling instanceof HTMLInputElement) {
                previousSibling.focus();
            } 
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    return (
        <>
       {label&& <p>{label}</p>}
        <div className="flex flex-row my-2 justify-between ">
            {Array.from({ length: maxLength }, (_, index) => (
                <input
                    name={name}
                    key={index}
                    type="text"
                    value={value[index] || ''}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onFocus={handleFocus}
                    maxLength={1}
                    className="w-10 h-10 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            ))}
        </div>
        </>
    );
};

