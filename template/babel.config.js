module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@application': './src/application',
          '@business': './src/business',
          '@core': './src/core',
          '@core/theme': './src/core/theme.ts',
          '@features': './src/features',
          '@features/components': './src/features/components',
          '@features/modules': './src/features/modules',
          '@store': './src/store',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'transform-remove-console'],
    },
  },
};
