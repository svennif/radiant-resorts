"use client";

import { useEffect, useState } from "react";
import { Alert } from "@/components/ui/alert";
import Input from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";

export const Form = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams?.get("callbackUrl") || "/dashboard";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect;

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
                callbackUrl,
            });
            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError("Invalid email or password");
            }
        } catch (err: any) {}
        console.log("Logged in!");
    };
    return (
        <form className="form" onSubmit={onSubmit}>
            <Input required label="Email" id="email" type="email" name="email" autoComplete="new-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input required label="Password" id="password" type="password" name="password" placeholder="********" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <Alert>{error}</Alert>}
            <Button type="submit">Login</Button>
        </form>
    );
};
