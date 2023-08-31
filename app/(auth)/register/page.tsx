import Link from "next/link";
import { RegisterForm } from "./form";

export default function RegisterPage() {
    return (
        <>
            <div className="register">
                <div>
                    <h1 className="register--title">Register</h1>
                </div>
                <div>
                    <RegisterForm />
                </div>
                <div>
                    <p className="register--text">
                        Already have an account? <Link href="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
