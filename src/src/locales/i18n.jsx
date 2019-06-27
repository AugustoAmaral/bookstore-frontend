import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enUS from "./en-US";
import ptBR from "./pt-BR";
import "moment/locale/pt-br";

const resources = {
  "pt-BR": ptBR,
  en: enUS
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: process.env.REACT_APP_DEVELOPMENT,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
