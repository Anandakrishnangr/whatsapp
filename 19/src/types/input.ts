
export interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>,value?:string ) => void;
    placeholder?: string;
    className?: string;
    name?: string;
    label?: string;
    style?: React.CSSProperties;
    maxLength?: number;
}