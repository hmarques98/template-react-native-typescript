// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = {
  testEnvironment: 'node',
  preset: 'react-native',
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './node_modules/react-native/jest/setup.js',
    './node_modules/react-native/Libraries/Utilities/__mocks__/BackHandler.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
    '\\.svg': '<rootDir>/__mocks__/svgMocks.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
