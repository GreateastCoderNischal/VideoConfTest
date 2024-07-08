//src/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const AuthOptions = NextAuth({
    providers: [
        GithubProvider({
            clientId: 'Ov23lijKBaz9nEG3DAYW',
            clientSecret: '4b2143c54798c78b3086136e4a1dd4779bc8c09b',
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          return true
        },
    },
})
export { AuthOptions as GET, AuthOptions as POST}

