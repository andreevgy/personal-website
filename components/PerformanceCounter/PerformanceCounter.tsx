import {useEffect, useState} from "react";
import Text from "../Text";
import useLocale from "../../utils/useLocale";

const PerformanceCounter = () => {
  const [milliseconds, setMilliseconds] = useState(null);
  const texts = useLocale();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const perfEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
      setMilliseconds(perfEntries[0].domContentLoadedEventEnd)
    }
  }, []);

  return <Text mb={1}><b>NextJS</b>: {texts.nextJs} {Math.round(milliseconds)} {texts.milliseconds}</Text>
}

export default PerformanceCounter;
