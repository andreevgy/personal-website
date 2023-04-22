import Box from "../../components/Box";
import Text from "../../components/Text";
import useLocale from "../../utils/useLocale";

const LinksSection = () => {
  const texts = useLocale();

  return <Box mb={4} display="flex" flexDirection={["column", "row"]} justifyContent={["space-between", ""]}>
    <Box width={["100%", "50%"]} mb={[4, 0]}>
      <Text mb={2} variant="h4">{texts.contactTitle}</Text>
      <Text mb={2}>LinkedIn: <Text as="a"
                                   href="https://www.linkedin.com/in/andreevgy">@andreevgy</Text></Text>
      <Text mb={2}>{texts.telegram}: <Text as="a"
                                           href="https://t.me/andreevgy">@andreevgy</Text>
      </Text>
      <Text mb={2}>{texts.instagram}: <Text as="a"
                                     href="https://www.instagram.com/andreevgy/">@andreevgy</Text></Text>
      <Text>Email: <Text as="a" href="mailto:me@andreev.gy">me@andreev.gy</Text></Text>
    </Box>
    <Box width={["100%", "50%"]} display="flex" flexDirection="column">
      <Text variant="h4" mb={2}>{texts.linksTitle}</Text>
      <Text mb={2} as="a" href="https://github.com/andreevgy/personal-website">{texts.github}</Text>
      <Text mb={2} as="a" href="https://vpn.andreev.gy">{texts.vpnLink}</Text>
      <Text mb={2} as="a"
            href="https://ru.hexlet.io/blog/posts/next-js-chto-eto-takoe-i-kak-ego-ispolzovat">{texts.nextJSLink}
      </Text>
      <Text mb={2} as="a" href="https://stickersnow.ru">{texts.stickersNow}</Text>
    </Box>
  </Box>
}

export default LinksSection;
