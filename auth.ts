import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      // authorize: async (credentials) => {
      //   let user = null;

      // logic to salt and hash password
      // const pwHash = saltAndHashPassword(credentials.password);

      // logic to verify if the user exists
      // user = await getUserFromDb(credentials.email, pwHash);

      // if (!user) {
      // No user found, so this is their first attempt to login
      // Optionally, this is also the place you could do a user registration
      // throw new Error("Invalid credentials.");
      // }

      // return user object with their profile data
      // return user;
      //   },
    }),
  ],
});
