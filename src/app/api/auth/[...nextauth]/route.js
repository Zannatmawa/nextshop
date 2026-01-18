import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        // 1️⃣ Mock login using credentials
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Hardcoded credentials
                const MOCK_EMAIL = "user@example.com"
                const MOCK_PASSWORD = "password123"

                if (
                    credentials.email === MOCK_EMAIL &&
                    credentials.password === MOCK_PASSWORD
                ) {
                    return { id: 1, name: "Mock User", email: MOCK_EMAIL }
                }
                return null
            },
        }),

        // 2️⃣ Google login (Optional)
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    pages: {
        signIn: "/login", // Custom login page
    },

    session: {
        strategy: "jwt", // use JWT for session storage
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user
            return token
        },
        async session({ session, token }) {
            session.user = token.user
            return session
        },
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
