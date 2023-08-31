import { InputHTMLAttributes } from "react";
import Label from "../label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

export default function Input({ label, id, ...props }: InputProps) {
    return (
        <>
            <Label aria-hidden="true" label={label} id={id} {...props} />
            <input id={id} {...props} />
            <span className="input-border"></span>
        </>
    );
}