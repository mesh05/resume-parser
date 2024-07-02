import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
