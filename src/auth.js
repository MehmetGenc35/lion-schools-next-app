import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";
import { getIsTokenValid, getIsUserAuthorized } from "./helpers/auth-helper";

const config = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const res = await login(credentials);
        const data = await res.json();
        if (!res.ok) return null;

        const payload = {
          user: { ...data },
          accessToken: data.token.split(" ")[1],
        };
        delete payload.user.token;

        return payload; //return payload olduğu anda user session oluşmuş oluyor
      },
    }),
  ],
  callbacks: {
    // middleware in kapsama alanina giren sayfalara yapilan isteklerden hemen once calisir
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      const userRole = auth?.user?.role;

      //kullanıcı login mi?
      const isLoggedIn = !!userRole;

      //loginse login sayfasına mı gitmek istiyor?
      const isInLoginPage = pathname.startsWith("/login");

      //dashboard sayfasında mı?
      const isInDashboardPages = pathname.startsWith("/dashboard");

      //!!!mevcut token ın valid olma durumunun kontrolü
      const isTokenValid = getIsTokenValid(auth?.accessToken);

      //login olduktan sonra yapılacak kontroller
      if (isLoggedIn && isTokenValid) {
        if (isInDashboardPages) {
          //!rollere göre erişim kontrolü
          const isUserAuthorized = getIsUserAuthorized(userRole, pathname);

          //loginse ve rolü nereye yetkili ise gidebilir
          if (isUserAuthorized) return true;

          //ilgili yere yetkisi yoksa bu sayfaya yönlendirecek
          return Response.redirect(new URL("/unauthorized", request.nextUrl));
        } else if (isInLoginPage) {
          //login olmuşsa tekrar login sayfasına gidemesin
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
      } else if (isInDashboardPages) {
        //login olmamıs biri bu kısma gidemez
        return false;
      }

      return true; //login gerektirmeyen diğer yerlere herkes ulaşabilir
    },
    // JWT datasina ihtiyac duyan her yerde
    async jwt({ token, user }) {
      //console.log("JWT", token, user);
      return { ...user, ...token }; //!buradan yapılan returnler session a gidecek
    },
    // Session datasina ihtiyac duyan her yerde
    async session({ session, token }) {
      //eğer backend token exp time dolmuşsa frontend tarafında başlatılan session içinin boşaltmamız lazım
      const isTokenValid = getIsTokenValid(token.accessToken);
      if (!isTokenValid) return null;

      session.accessToken = token.accessToken;
      session.user = token.user;
      return session; //!uygulamada istenilen kısma yönlendirecek
    },
  },

  pages: {
    signIn: "/login",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

/*


  async jwt({ token, user }){

  },

  js tip güvenli bir dil olmadığı için ekstra işlemler yapmak gerekiyor
  jwt datasına ihtiyaç duyan her route da (sayfalarda) çalışır
  geriye kullanabileceğimiz token ve user döndürür
  yapılan returnler session a gidecek

  default sesion objesi
  {...token}
  JWT{
    name:
    email:
    picture:
    sub:
  }


  async session({ session, token }) {
    
  },

  session a ihtiyaç duyan her route da çalışır
  session dönen objesi
  SESSION{
    user:{}
    expires:
  }
*/
