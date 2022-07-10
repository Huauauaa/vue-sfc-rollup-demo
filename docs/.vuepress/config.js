const path = require('path');

module.exports = (option) => {
  const { sourceDir } = option;

  console.log({ sourceDir });

  return {
    themeConfig: {
      sidebar: [
        {
          title: 'Lib Components',
          collapsable: false,
          children: ['/lib-components/vue-sfc-rollup-demo-sample.md'],
        },
      ],
    },
    plugins: [
      [
        '@vuepress/register-components',
        {
          componentsDir: path.resolve(sourceDir, '../src/lib-components'),
        },
      ],
    ],
  };
};
