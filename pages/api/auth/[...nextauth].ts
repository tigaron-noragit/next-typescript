import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: 'nextjs-openid',
      clientSecret: 'iL0Pnva0uHnG22ORpj9Xo92gMcfEFVcU',
      issuer: 'https://kc.beta.lyrid.io/realms/test',
    }),
  ],
  callbacks: {
    async signIn(params) {
      console.log(`signIn cb`);
      console.log(params);
      return true;
    },
    async redirect(params) {
      console.log(`redirect cb`);
      console.log(params);
      return params.url;
    },
    async session(params) {
      console.log(`session cb`);
      console.log(params);
      return params.session;
    },
    async jwt(params) {
      console.log(`jwt cb`);
      console.log(params);
      return params.token;
    },
  },
});
