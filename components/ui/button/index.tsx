interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export default function Button({ children, type, ...props }: ButtonProps) {
    return (
        <>
            <button type={type} className="button" {...props}>
                {children}
            </button>
        </>
    );
}
