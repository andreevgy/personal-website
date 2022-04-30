import React, {useEffect, useRef} from "react";
import {useVueContext} from "../../utils/vueContext";
import {useTheme} from "styled-components";
import {AppTheme} from "../../theme";

interface VueSpoilerProps {
  spoilerTitle: string;
  spoilerText: string;
}

const VueAppConfig = {
  data() {
    return {isOpen: false}
  },
  props: {
    spoilerTitle: String,
    spoilerText: String,
    textColor: String,
  },
  template: `
    <div>
        <h5 @click="() => this.isOpen = !this.isOpen" :style="{ cursor: 'pointer', color: textColor.value }" >{{spoilerTitle.value}}</h5>
        <p v-if="isOpen" :style="{ cursor: 'pointer', color: textColor.value }">{{spoilerText.value}}</p>
    </div>
`,
}

const VueSpoiler: React.FC<VueSpoilerProps> = (props) => {
  const { spoilerText, spoilerTitle } = props;
  const isVueLoaded = useVueContext();
  const component = useRef(null);
  const reactiveVueProps = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (isVueLoaded) {
      const vue = window.Vue;
      reactiveVueProps.current =
        vue.reactive({ spoilerTitle: { value: spoilerTitle }, spoilerText: { value: spoilerText }, textColor: { value: (theme as AppTheme).colors.text } });

      const app = vue.createApp(VueAppConfig, reactiveVueProps.current);
      app.mount(component.current);
    }
  }, [isVueLoaded]);

  useEffect(() => {
    if (reactiveVueProps.current) {
      reactiveVueProps.current.spoilerText.value = spoilerText;
      reactiveVueProps.current.spoilerTitle.value = spoilerTitle;
      reactiveVueProps.current.textColor.value = (theme as AppTheme).colors.text;
    }
  }, [spoilerText, spoilerTitle, theme]);

  return <div ref={component} />
}

export default VueSpoiler;
