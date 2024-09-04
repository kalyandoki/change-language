import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      Movies: "Movies",
      TVShows: "TV Shows",
      Sports: "Sports",
      Live: "Live",
      Settings: "Settings",
      Language: "Choose a language",
    },
  },
  fr: {
    translation: {
      Home: "Accueil",
      Movies: "Films",
      TVShows: "Émissions de télévision",
      Sports: "Sports",
      Live: "En direct",
      Settings: "Paramètres",
      Language: "Choisissez une",
    },
  },
  de: {
    translation: {
      Home: "Zuhause",
      Movies: "Filme",
      TVShows: "Fernsehsendungen",
      Sports: "Sport",
      Live: "Live",
      Settings: "Einstellungen",
      Language: "Wählen Sie eine Sprache",
    },
  },
  es: {
    translation: {
      Home: "Inicio",
      Movies: "Películas",
      TVShows: "Programas de televisión",
      Sports: "Deportes",
      Live: "En vivo",
      Settings: "Ajustes",
      Language: "Elige un idioma",
    },
  },
  ru: {
    translation: {
      Home: "Главная",
      Movies: "Фильмы",
      TVShows: "ТВ-шоу",
      Sports: "Спорт",
      Live: "Живой",
      Settings: "Настройки",
      Language: "Выберите язык",
    },
  },
  zh: {
    translation: {
      Home: "家",
      Movies: "电影",
      TVShows: "电视剧",
      Sports: "运动",
      Live: "直播",
      Settings: "设置",
      Language: "选择语言",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
