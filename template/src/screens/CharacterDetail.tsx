import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CommonStackParamList } from 'screens';
import { Box } from 'components/molecules/Box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { theme } from 'theme';
import { Typography } from 'components/molecules/Typography';
import UserAvatar from 'react-native-user-avatar';
import { Button } from 'components/molecules/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { WINDOW_DEVICE_WIDTH } from '@utils/constants';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

type ScreenRouteProp = RouteProp<CommonStackParamList, 'CharacterDetail'>;
type CharacterDetailScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'Home'
>;

const CharacterDetailScreen = () => {
  const { params } = useRoute<ScreenRouteProp>();
  const { goBack } = useNavigation<CharacterDetailScreenNavigationProp>();
  const { name, ...restProperties } = params.character;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Box flex={1} alignItems="center" paddingTop={'sm'}>
        <AvatarComponent name={name} />
        <Typography variant="bold" color={'white'} mt="ls">
          {name}
        </Typography>
        <Box my={'md'}>
          <Typography variant="bold" color={'white'} fontSize="ls">
            Gender - {restProperties.gender}
          </Typography>
          <Typography variant="bold" color={'white'} fontSize="ls">
            Hair color - {restProperties.hair_color}
          </Typography>
          <Typography variant="bold" color={'white'} fontSize="ls">
            Eye color - {restProperties.eye_color}
          </Typography>
          <Typography variant="bold" color={'white'} fontSize="ls">
            Skin color - {restProperties.skin_color}
          </Typography>
        </Box>
        <Box width={WINDOW_DEVICE_WIDTH * 0.8}>
          <Button
            onPress={goBack}
            bg="secondary"
            width="100%"
            flexDirection="row"
            alignItems="center">
            <Box marginRight={'md'}>
              <AntDesignIcon
                name="arrowleft"
                color={theme.colors.primary}
                size={20}
              />
            </Box>
            <Typography color="primary">Back</Typography>
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default CharacterDetailScreen;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});

const AvatarComponent = ({ name }: { name?: string }) => (
  <UserAvatar size={100} name={name} />
);
