import Label from "../label";

interface InputProps {
    label: string;
    id: string;
    required?: boolean;
    type?: string;
    name?: string;
    autoComplete?: string;
    placeholder?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, id, ...props }: InputProps) {
    return (
        <>
            <div className="input-wrapper">
                <Label aria-hidden="true" label={label} id={id} {...props} />
                <input className="input" id={id} {...props} />
                <span className="input-border"></span>
            </div>
        </>
    );
}
