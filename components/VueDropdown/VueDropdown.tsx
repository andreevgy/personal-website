import React, {useEffect, useState} from "react";
import Script from "next/script";

interface VueDropdownProps {
  texts: { [s: string]: string };
}

const VueDropdown: React.FC<VueDropdownProps> = (props) => {
  const { texts } = props;
  const [isVueLoaded, setIsVueLoaded] = useState(false);

  useEffect(() => {
    if (isVueLoaded) {
      const vue = window.Vue;
      const app = vue.createApp({
        data() { return { isOpen: false } },
        render() {
          return vue.h('div', [
            vue.h('h5', {onClick: () => this.isOpen = !this.isOpen, style: 'cursor:pointer'}, texts.educationTitle),
            this.isOpen ? vue.h('p', texts.educationInfo) : null,
          ]);
        }
      });
      app.mount("#vueDropdown");
    }
  }, [isVueLoaded, texts]);

  return <>
    <Script src="https://unpkg.com/vue@3/dist/vue.global.prod.js" onLoad={() => setIsVueLoaded(true)} />
    <div id="vueDropdown" />
  </>
}

export default VueDropdown;
