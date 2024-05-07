import { auth } from "@/auth";
import { config } from "./config";
export const getAuthHeader = async () => {
  const session = await auth();
  const token = session?.accessToken;
  let authHeader = {
    "Content-Type": "application/json",
  };
  if (token) {
    authHeader = {
      Authorization: `Bearer ${token}`,
      ...authHeader,
    };
  }
  return authHeader;
};

//mevcut token un valid olup olmaması ile ilgili bir fonksiyon
export const getIsTokenValid = (token) => {
  if (!token) return false;

  const jwtExpireTimeStamp = parseJWT(token).exp;
  //JWT token ların exp değeri saniye cinsinden olur

  const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);
  // new Date kendisine verilen MILISANIYE cinsinden degerden bir tarih saat olusturmek icin bu degeri 1 Ocak 1970 tarihine ekleyeerk yeni bir tarih elde eder.

  return new Date() < jwtExpireDateTime;
  //jwt tokenın exp time mevcut tarihten ileride çıkarsa token hala aktif anlamına gelir ve fonk "true" döner
};

const parseJWT = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
  //parse()==> JSON ın tokenı parcalanmasını saglar
  //token.split(".")==> tokendan 3 elemanlı bir dizi oluşturur,dizinin 2. elemanında tokendak şifrelenmiş data bulunur
  //atob()==şifrelenmiş bu datayı çözer ve string hale getirir
  //JSON.parse string haldeki datayı js object haline çevirir
};

//rollerin ilgili olan yerlere ulaşma kontrolü
export const getIsUserAuthorized = (role, url) => {
  const userRight = config.userRightsOnRoutes.find((item) =>
    item.urlRegex.test(url)
  );

  if (!userRight) return false;

  return userRight.roles.includes(role);
};
