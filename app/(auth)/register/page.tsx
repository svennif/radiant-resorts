import Link from "next/link";
import { RegisterForm } from "./form";

export default function RegisterPage() {
    return (
        <>
            <div className="register">
                <div className="register--container">
                    <h1 className="register--title title">Register</h1>
                    <RegisterForm />
                    <p className="register--text text">
                        Already have an account? <Link href="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
