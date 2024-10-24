const data = {
  home: {
    title: 'react-intl-lil',
    subtitle: 'The Easiest Static Internationalization for React and Next.js',
    developer: 'Developed by ',
    sum: {
      title: 'Summary',
      data: 'This guide shows the implementation of react-intl-lil on a static website developed with react and javascript. This website was developed with the technologies mentioned in this guide, you can find the source code in the following ',
      repository: 'repository',
    },
    inst: {
      title: 'Installation',
      data: 'react-intl-lil can easily be installed by:',
    },
    config: {
      title: 'Configuration',
      data: 'react-intl-lil just need the following files:',
      files: [
        {
          data: 'Language, these files contains the information corresponding to each language',
          file: '@/lang/messages/en.js \n\nconst data = { \n  home: { \n    title: "Welcome to react-intl-lil", \n    // {{Dynamic values}} support \n    version: "Current version: {{version}}", \n    // Array support\n    features:[ \n      {title:"Multi language", data:"Single and multi language support"} \n      {title:"Local Storage", data:"For persistence across sessions"} \n    ] \n  }, \n};\nexport default data;',
        },
        {
          data: 'Configuration, this file will have the following structure and is used to select the following properties:',
          file: '@/lang/config.js \n\n// Import yours language files \nimport es from "./messages/es"; \nimport en from "./messages/en"; \n\nexport const langConfig: = { \n  defaultLang: "en", \n  // mode: "local" for local storage \n  // mode: "single" for single language support \n  mode: "local", \n  languages: [{ en: en }, { es: es }],\n};',
        },
        {
          data: 'Container, this should be located at the root of the project and must include a reference to the configuration file',
          file: '@/src/main.jsx \n\n... \nimport { LangProvider } from "react-intl-lil"; \nimport { langConfig } from "@/lang/config"; \n\ncreateRoot(document.getElementById("root")).render( \n  <StrictMode> \n    <LangProvider langConfig={langConfig}> \n      <App /> \n    </LangProvider> \n  </StrictMode> \n);',
        },
        {
          data: 'That is all it takes to give your static project support for multiple languages. For get the strings or arrays for each language just use the hook useLanguage inside a component',
          file: 'import { useLanguage } from "react-intl-lil"; \n\n const UseHooks = () => { \n  const { gs, ga, getLanguage, setLanguage } = useLanguage(); \n\n  return ( \n    <section> \n      {/* this return the current language */} \n      <h1>{getLanguage}</h1> \n\n      {/* this button change the current language */} \n      <button onClick={()=>setLanguage("es")}>Change Language</button> \n\n      {/* this return a string */} \n      <h2>{gs("home.title")}</h2> \n\n      {/* this return a string with a dynamic value*/} \n      <p>{gs("home.version", { version: "1.1.1" })}</p> \n\n      {/* this return an array */} \n      <ul> \n        {ga("home.features").map((item) => ( \n          <li key={item.title}> \n            <h2>{item.title}</h2> \n            <p>{item.data}</p> \n          </li> \n        ))} \n      </ul> \n    </section> \n  ); \n}; \n\nexport default UseHooks; \n',
        },
      ],
    },
    final:
      'I hope this package is useful to you. I am running out of energy but not desire. If you want to help me continue on my path, consider gifting me a coffee.',
  },
};

export default data;
