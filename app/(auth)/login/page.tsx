import Link from "next/link";
import { Form as LoginForm } from "./form";

export default function LoginPage() {
    return (
        <>
            <div className="Login">
                <div>
                    <LoginForm />
                </div>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <p>Need to create an account? <Link href="/register">Create account</Link></p>
                </div>
            </div>
        </>
    );
}
