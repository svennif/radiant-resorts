"use client";

export const RegisterForm = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Registered!');
    };

    return (
        <div>
            <h1>Create your account</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Create account</button>
            </form>
        </div>
    );
};
