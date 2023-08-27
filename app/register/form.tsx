"use client";

import Input from "@/components/ui/input";

export const RegisterForm = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Registered!');
    };

    return (
        <>
            <h1>Create your account</h1>
            <form>
                <Input label="Email" id="email" type="email" name="email" />
                <Input label="Name" id="name" type="name" name="name" />
                <Input label="Password" id="password" type="password" name="password" />
                <button type="submit">Create account</button>
            </form>
        </>
    );
};
