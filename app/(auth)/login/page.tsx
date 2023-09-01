import Link from "next/link";
import { Form as LoginForm } from "./form";

export default function LoginPage() {
    return (
        <>
            <div className="login">
                <div className="login--container">
                    <h1 className="login--title title">Login</h1>
                    <LoginForm />
                    <p className="login--text text">
                        Need to create an account? <Link href="/register">Create account</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
