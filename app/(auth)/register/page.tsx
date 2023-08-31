import Link from "next/link";
import { RegisterForm } from "./form";

export default function RegisterPage() {
    return (
        <>
            <div className="register">
                <div>
                    <RegisterForm />
                </div>
                <div>
                    <h1>Register</h1>
                </div>
                <div>
                    <p>Already have an account? <Link href="/login">Sign in</Link></p>
                </div>
            </div>
        </>
    );
}
