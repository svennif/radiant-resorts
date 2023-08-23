import NextAuth, { type NextAuthOptions } from "next-auth";
import CredetialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
    interface User {
        id: number;
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredetialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@email.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = { id: 1, name: "Sven", email: "test@test.com" };
                return user;
            },
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
