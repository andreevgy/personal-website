import React, {useEffect, useRef, useState} from "react";

interface VueDropdownProps {
  texts: { [s: string]: string };
}

const VueDropdown: React.FC<VueDropdownProps> = (props) => {
  const { texts } = props;
  const vueModule = useRef(null);
  const [isVueLoaded, setIsVueLoaded] = useState(false);

  useEffect(() => {
    import('vue')
      .then(vue => {
        vueModule.current = vue;
        setIsVueLoaded(true);
      })
  }, []);

  useEffect(() => {
    if (isVueLoaded) {
      const vue = vueModule.current;
      const app = vue.createApp({
        data() { return { isOpen: false } },
        render() {
          return vue.h('div', [
            vue.h('h5', {onClick: () => this.isOpen = !this.isOpen}, texts.educationTitle),
            this.isOpen ? vue.h('p', texts.educationInfo) : null,
          ]);
        }
      });
      app.mount("#vueDropdown");
    }
  }, [isVueLoaded, texts]);

  return <div id="vueDropdown" />
}

export default VueDropdown;
