"use client";

import { Alert } from "@/components/ui/alert";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input/";
import { signIn } from "next-auth/react";
import { useState } from "react";

export const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({ email, password, name }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.ok) {
                signIn();
            }
        } catch (error: any) {
            setError(error?.message);
            console.error(error);
        }
        console.log("Registered!");
    };

    return (
        <>
            <form className="register--form" onSubmit={onSubmit}>
                <Input required label="Email" id="email" type="email" name="email" autoComplete="new-email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input required label="Name" id="name" type="name" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <Input required label="Password" id="password" type="password" name="password" placeholder="********" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <Alert>{error}</Alert>}
                <Button type="submit">Create account</Button>
            </form>
        </>
    );
};
