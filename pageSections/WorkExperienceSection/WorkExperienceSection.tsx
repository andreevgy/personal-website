import React, {useEffect, useRef} from "react";
import {useVueContext} from "../../utils/vueContext";
import {useTheme} from "styled-components";

interface WorkExperienceSectionProps {
  title: string;
  duration: string;
  company: string;
  companyLink: string;
  responsibilities: string[];
}

const VueAppConfig = {
  data() {
    return {isOpen: false}
  },
  props: {
    title: Object,
    duration: Object,
    company: Object,
    companyLink: Object,
    responsibilities: Object,
    theme: Object,
  },
  template: `
    <div :style="{ marginBottom: theme.value.space[3] + 'px', cursor: 'pointer', color: theme.value.colors.text }" @click="() => this.isOpen = !this.isOpen">
        <div :style="{ fontSize: theme.value.fontSizes[2] + 'px', fontWeight: 800 }">{{ title.value }}</div>
        <div :style="{ fontSize: theme.value.fontSizes[0] + 'px', marginBottom: theme.value.space[1] + 'px' }">{{ duration.value }}: <a :style="{ fontSize: theme.value.fontSizes[1] + 'px' }" :href="companyLink.value"><i>{{ company.value }}</i></a></div>
        <ul v-if="isOpen">
            <li v-for="item in responsibilities.value" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
`,
}

const reactiveProps = ['title', 'duration', 'company', 'companyLink', 'responsibilities'];

const generateReactiveProps = (props: WorkExperienceSectionProps, theme) => {
  return reactiveProps.reduce((obj, prop) => {
    obj[prop] = {value: props[prop]};
    return obj;
  }, { theme: { value: theme } });
}

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = (props) => {
  const isVueLoaded = useVueContext();
  const component = useRef(null);
  const reactiveVueProps = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (isVueLoaded) {
      const vue = window.Vue;
      reactiveVueProps.current = vue.reactive(generateReactiveProps(props, theme));

      const app = vue.createApp(VueAppConfig, reactiveVueProps.current);
      app.mount(component.current);
    }
  }, [isVueLoaded]);

  useEffect(() => {
    if (reactiveVueProps.current) {
      reactiveProps.forEach(prop => reactiveVueProps.current[prop].value = props[prop]);
    }
  }, [props]);

  useEffect(() => {
    if (reactiveVueProps.current) {
      reactiveVueProps.current.theme.value = theme;
    }
  }, [theme]);

  return <div ref={component} />
}

export default WorkExperienceSection;
