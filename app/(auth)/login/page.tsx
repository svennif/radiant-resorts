import Link from "next/link";
import { Form as LoginForm } from "./form";

export default function LoginPage() {
    return (
        <>
            <div className="Login">
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <LoginForm />
                </div>
                <div>
                    <p>
                        Need to create an account? <Link href="/register">Create account</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
