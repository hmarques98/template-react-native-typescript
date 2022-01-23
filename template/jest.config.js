module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-iphone-x-helper|react-native-flipper|@react-native-community|@react-navigation|.|react-navigation|react-native-animatable)/)',
  ],
  moduleNameMapper: {
    '.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^styled-components$': '<rootDir>/node_modules/styled-components',
  },
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
};
