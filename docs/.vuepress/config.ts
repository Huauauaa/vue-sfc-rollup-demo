const { defaultTheme } = require('vuepress');
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components');
const { path } = require('@vuepress/utils');

module.exports = {
  lang: 'en-US',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/lib-components',
      },
    ],
    sidebar: [
      {
        text: 'Lib Components',
        link: '/lib-components/',
        children: [
          {
            text: 'sample',
            link: '/lib-components/vue-sfc-rollup-demo-sample.md',
          },
        ],
      },
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../../src/lib-components'),
    }),
  ],
};
