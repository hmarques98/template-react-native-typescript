/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.useFakeTimers();

// eslint-disable-next-line jest/expect-expect
it('renders correctly', async () => {
  renderer.create(<App />);
});
