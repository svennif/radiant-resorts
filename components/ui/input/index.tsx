import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

export default function Input({ label, id, ...props }: InputProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </>
    );
}