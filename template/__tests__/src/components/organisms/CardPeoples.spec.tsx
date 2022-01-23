import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import CardPeoples from 'src/presentation/components/organisms/CardPeoples';

describe('Card People Component', () => {
  const onPress = jest.fn();
  it('should render correctly', () => {
    render(<CardPeoples onPress={onPress} name="React" homeworld="Earth" />);
  });
  it('should has the people name', () => {
    const { getByText } = render(
      <CardPeoples onPress={onPress} name="React" homeworld="Earth" />,
    );

    expect(getByText('React')).toBeDefined();
  });
  it('should has the people homeworld', () => {
    const { getByText } = render(
      <CardPeoples onPress={onPress} name="React" homeworld="Earth" />,
    );

    expect(getByText('Earth')).toBeDefined();
  });
  it('should onPress to be called', () => {
    const { getByTestId } = render(
      <CardPeoples onPress={onPress} name="React" homeworld="Earth" />,
    );
    const button = getByTestId('Button');
    fireEvent.press(button);
    expect(onPress).toBeCalled();
  });
});
