import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useReactQuery from 'src/application/hooks/useReactQuery';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const mockData = {
  data: {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ],
    starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  },
};

describe('useReactQuery Hook', () => {
  test('should render hook data', async () => {
    const { result, waitForValueToChange } = renderHook(
      () =>
        useReactQuery<{ data: any }>({
          path: 'people/1/',
          queryName: 'people',
        }),
      {
        wrapper: QueryProvider,
      },
    );

    await waitForValueToChange(() => result.current.data);

    expect(result.current.data).toMatchObject(mockData.data);
  });

  test('should to call refetch from hook', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useReactQuery<{ data: any }>({
          path: 'people/1/',
          queryName: 'people',
        }),
      {
        wrapper: QueryProvider,
      },
    );
    const mockRefetch = jest
      .fn()
      .mockImplementationOnce(() => result.current.refetch());

    act(() => {
      mockRefetch();
    });

    await waitForNextUpdate({ timeout: 5000 });

    expect(mockRefetch).toBeCalledTimes(1);
  });
});
