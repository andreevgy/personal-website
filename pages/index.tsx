import Head from "next/head";
import {useEffect, useState} from "react";
import D3Chart from "../components/D3Chart";
import Box from "../components/Box";
import Text from "../components/Text";
import Link from "../components/Link";
import {useThemeContext} from "../theme";
import useLocale from "../utils/useLocale";
import LinksSection from "../pageSections/LinksSection";
import WorkExperienceSection from "../pageSections/WorkExperienceSection";
import PerformanceCounter from "../components/PerformanceCounter";

export default function Home() {
  const texts = useLocale();
  const {setDarkMode, isDarkMode} = useThemeContext();

  return (
    <Box backgroundColor="background">
      <Head>
        <title>{texts.title}</title>
      </Head>
      <Text variant="h1" mb={2}>{texts.title}</Text>
      <Box display="flex" flexDirection="row" mb={4}>
        <Link href="/" mr={2} locale={texts.switchLocaleId}>{texts.switchLocaleText}</Link>
        <Text variant="link" onClick={() => setDarkMode(!isDarkMode)}>Switch theme</Text>
      </Box>
      <Box>
        <Text mb={2}>{texts.subtitle}</Text>
        <Text mb={4}>{texts.place}</Text>
        <LinksSection/>
        <Text variant="h2" mb={1}>{texts.workExperienceTitle}</Text>
        <Text variant="small" mb={3}>{texts.clickable}</Text>
        {texts.workExperience.map((ex, i) => <WorkExperienceSection {...ex} key={i} />)}
        <Text variant="h2" mb={2} mt={4}>{texts.techStuff}</Text>
        <PerformanceCounter />
        <Text mb={1}><b>VueJS</b>: {texts.vueJs}</Text>
        <Text mb={1}><b>styled-components + styled-system</b>: {texts.styledSystem}</Text>
        <Text mb={2}><b>D3</b>: {texts.chartTitle}</Text>
        <D3Chart/>
        <Text mb={4}><b>i18n</b>: {texts.localisationTitle}</Text>
        <Text mb={2}>{texts.moreText}</Text>
      </Box>

    </Box>

  )
}
