module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.watchOptions = {
      aggregateTimeout: 200,
      poll: 1000,
    };
    return config;
  },
};

// module.exports = {
//   addons: ['@storybook/preset-create-react-app'],
//   webpackFinal: async (config, { configType }) => {
//     config.module.rules.push({
//       test: /\.module\.css$/,
//       use: [
//         'style-loader',
//         {
//           loader: 'css-loader',
//           options: {
//             modules: true,
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };
