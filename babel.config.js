module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@actions': './app/actions',
            '@apis': './app/apis',
            '@components': './app/components',
            '@constants': './app/constants',
            '@reducers': './app/reducers',
            '@sagas': './app/sagas',
            '@selectors': './app/selectors',
            '@services': './app/services',
            '@theme': './app/theme',
          },
        },
      ],
    ],
  };
};
