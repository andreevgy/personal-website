import enLocale from "../public/locales/en.json";
import ruLocale from "../public/locales/ru.json";
import {useRouter} from "next/router";

interface Locale {
  workExperience: {
    "title": string;
    "company": string;
    "companyLink": string;
    "duration": string;
    "responsibilities": string[]
  }[];
  [s: string]: any;
}

interface Locales {
  'en-US': Locale,
  'ru-RU': Locale
}

const locales: Locales = {
  'en-US': enLocale,
  'ru-RU': ruLocale,
}

const useLocale = () => {
  const { locale } = useRouter();

  return locales[locale];
}

export default useLocale;
