interface LabelProps {
    label: string;
    id: string;
}

export default function Label({ label, id , ...props}: LabelProps) {
    return (
        <>
            <label htmlFor={id} aria-label={label} aria-hidden="true" className="screenreader-label">{label}</label>
        </>
    );
}