import Link from 'next/link';
import enLocale from '../public/locales/en.json';
import ruLocale from '../public/locales/ru.json';
import {useEffect, useState} from "react";
import D3Chart from "../components/D3Chart";
import VueDropdown from "../components/VueSpoiler";
import Layout from "../components/Layout";
import {useThemeContext} from "../theme";

const locales = {
  'en-US': enLocale,
  'ru-RU': ruLocale,
}

export const getStaticProps = async ({locale}) => {
  const texts = locales[locale];

  return {
    props: {
      texts,
    },
  }
}

export default function Home(props) {
  const {texts} = props;
  const [state, setState] = useState(null);
  const {setDarkMode, isDarkMode} = useThemeContext();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const perfEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      setState(perfEntries[0].domContentLoadedEventEnd)
    }
  }, []);

  return (
    <Layout backgroundColor="background" color="text">
      <header><h1 className="page-title">{texts.title}</h1></header>
      <small>
        <Link href="/" locale={texts.switchLocaleId}>{texts.switchLocaleText}</Link>
      </small>
      <small>
        <a className="switch" onClick={() => setDarkMode(!isDarkMode)}>Switch theme</a>
      </small>
      <div className="page-body"><p className="">{texts.subtitle}</p>
        <p className="">{texts.place}</p>
        <div className="column-list">
          <div className="column column1">
            <h4>{texts.contactTitle}</h4>
            <p className="">LinkedIn: <a
              href="https://www.linkedin.com/in/andreevgy">@andreevgy</a></p>
            <p className="">{texts.telegram}: <a
              href="https://t.me/andreevgy">@andreevgy</a>
            </p>
            <p className="">{texts.instagram}: <a
              href="https://www.instagram.com/andreevgy/">@andreevgy</a></p>
          </div>
          <div className="column">
            <h4>{texts.linksTitle}</h4>
            <p className=""><a
              href="https://blossom-elbow-5da.notion.site/VPN-8b0304f4965449a9956207e4c3756126">{texts.vpnGuide}</a>
            </p>
            <p className=""><a href="https://stickersnow.ru">{texts.stickersNow}</a></p>
          </div>
        </div>
        <br/>
        <h4>{texts.demonstrationTitle}</h4>
        <p className="">{texts.nextJs} {Math.round(state)} {texts.milliseconds}</p>
        <h4 className="">{texts.vueTitle}</h4>
        <VueDropdown spoilerTitle={texts.educationTitle} spoilerText={texts.educationInfo}/>
        <h4>{texts.chartTitle}</h4>
        <D3Chart/>
        <br/>
        <p className="">{texts.localisationTitle}</p>
        <p className="">{texts.moreText}</p>
      </div>

    </Layout>

  )
}
