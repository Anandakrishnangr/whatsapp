import { InputProps } from 'types';

export const Input = (props: InputProps) => {
    const { value, onChange, placeholder = '', className = '', name = '', label = '' } = props;

    return <>
        {label && <p>{label}</p>}
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`border rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 w-full focus:ring-blue-500 ${className}`}
        />
    </>
};


