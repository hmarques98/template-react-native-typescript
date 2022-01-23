import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Button, Typography } from '@features/components';

import { FlatList } from 'react-native-gesture-handler';

import LottieView from 'lottie-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import useInfiniteReactQuery from '@application/hooks/useInfiniteQuery';
import { CardPeoples } from './components';
import network from '@business/services/network';
import { CommonStackParamList } from '..';
import { IPeople } from './Home.types';
import { WINDOW_DEVICE_WIDTH } from '@application/utils/constants';
import { theme } from '@core/theme';

type ProfileScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const [responseListWithoutHomeWorld, setResponseListWithoutHomeWorld] =
    React.useState<IPeople[]>([]);
  const [peoplesList, setPeoplesList] = React.useState<IPeople[]>([]);

  const isMount = useRef<boolean>(false);

  const { status, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteReactQuery<{
      results: IPeople[];
      count: number;
      next: string;
      previous: string;
    }>({
      path: `people/`,
      queryName: 'allPeoples',
    });

  const isLoading = status === 'loading';

  useEffect(() => {
    if (!isMount.current && data) {
      isMount.current = true;
      setResponseListWithoutHomeWorld(data.pages[0].results);
    }
  }, [data]);

  const changeHomeWorld = useCallback(
    (peopleName: string, newHomeWorldText: string) => {
      setPeoplesList(() => {
        const newList = responseListWithoutHomeWorld.map((value) => {
          if (value.name === peopleName) {
            value.homeworld = newHomeWorldText;
            return value;
          } else {
            return value;
          }
        });
        return newList;
      });
    },
    [responseListWithoutHomeWorld],
  );

  const getHomeWorldEachItem = useCallback(async () => {
    responseListWithoutHomeWorld
      .sort((a, b) => (String(a.name) > String(b.name) ? 0 : -1))
      .map(async (item) => {
        try {
          if (item.homeworld.includes('https://swapi.dev/api/')) {
            const replaceURL = item.homeworld.replace(
              'https://swapi.dev/api/',
              '',
            );

            const {
              data: { name: nameWorld },
            } = await network.get(replaceURL);

            changeHomeWorld(item.name, nameWorld);
            //or setResponseListWithoutHomeWorld([])
          }
        } catch (error) {
          console.log({ error });
        }
      });
  }, [changeHomeWorld, responseListWithoutHomeWorld]);

  useEffect(() => {
    getHomeWorldEachItem();
  }, [getHomeWorldEachItem]);

  const handleMore = useCallback(async () => {
    if (hasNextPage) {
      try {
        const responseNextPage = await fetchNextPage();

        const pages = responseNextPage.data?.pages.map((result) =>
          result.results.map((result) => result),
        );
        const lastResponse = pages && pages[pages?.length - 1];

        setResponseListWithoutHomeWorld((preview) => {
          if (lastResponse) {
            return [...preview, ...lastResponse];
          }
          return [...preview];
        });
      } catch (error) {
        console.log(error);
      } finally {
        getHomeWorldEachItem();
      }
    }
  }, [fetchNextPage, getHomeWorldEachItem, hasNextPage]);

  const { navigate } = useNavigation<ProfileScreenNavigationProp>();

  const footerButton = () => {
    return (
      <Button
        my={'sm'}
        flexDirection="row"
        width={WINDOW_DEVICE_WIDTH * 0.8}
        backgroundColor={!hasNextPage ? 'secondary' : 'grayLight'}
        disabled>
        {isFetching || hasNextPage ? (
          <LottieView
            source={require('@core/assets/spinner.json')}
            autoPlay
            loop
            hardwareAccelerationAndroid={false}
            resizeMode="contain"
            style={{
              height: 40,
              width: 40,
            }}
          />
        ) : (
          <Typography color={!hasNextPage ? 'primary' : 'secondary'}>
            All list is loaded
          </Typography>
        )}
      </Button>
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Box flex={1} alignItems="center" paddingTop={'sm'}>
        <Typography color={'white'} fontSize={'xl'} variant="bold">
          STAR WARS API
        </Typography>
        <Box
          mt={'md'}
          alignItems="center"
          justifyContent={isLoading ? 'center' : 'flex-start'}
          flex={1}>
          {isLoading && (
            <Box height={120} width="100%" alignItems="center">
              <LottieView
                source={require('@core/assets/spinner.json')}
                autoPlay
                loop
                hardwareAccelerationAndroid={false}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
              <Typography variant="bold" fontSize={'ls'} color={'white'}>
                We are finding information about
              </Typography>
            </Box>
          )}
          {error && <Typography>Something is wrong. Sorry</Typography>}
          <FlatList
            contentContainerStyle={{
              alignItems: 'center',
              width: WINDOW_DEVICE_WIDTH,
              paddingHorizontal: 10,
            }}
            keyExtractor={(item) => item.name}
            data={peoplesList?.sort((a, b) =>
              String(a.name) > String(b.name) ? 0 : -1,
            )}
            renderItem={({ item }: { item: IPeople; index: number }) => {
              return (
                <CardPeoples
                  name={item.name}
                  homeworld={
                    item.homeworld.includes('http')
                      ? 'Floating for planet'
                      : item.homeworld
                  }
                  onPress={() => {
                    navigate('CharacterDetail', {
                      character: item,
                    });
                  }}
                />
              );
            }}
            onEndReached={() => {
              hasNextPage && handleMore();
            }}
            onEndReachedThreshold={0.1}
            ListFooterComponent={data && footerButton()}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});
