/** @type { import('@storybook/vue3').Preview } */
import { createI18n } from "vue-i18n";
import { setup } from "@storybook/vue3";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
const i18n = {
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages: {
    en: {
      message: {
        language: "English",
        greeting: "Hello !",
      },
    },
    ar: {
      message: {
        language: "العربية",
        greeting: "السلام عليكم",
      },
    },
    es: {
      message: {
        language: "Español",
        greeting: "Hola !",
      },
    },
  },
};
//console.log("i18n :", i18n);
setup((app) => {
  console.log("app", app);
  app.use( createI18n(i18n));
});
export default preview;
