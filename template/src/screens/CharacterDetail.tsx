import React, { Suspense } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { CommonStackParamList } from 'screens';
import { Box } from 'components/molecules/Box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PADDING } from 'styles/spacing';
import { StatusBar, StyleSheet } from 'react-native';
import { myTheme } from 'theme';
import { Typography } from 'components/molecules/Typography';
import UserAvatar from 'react-native-user-avatar';
import { FONT_SIZE_16 } from 'styles/typography';
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
      <Box flex={1} alignItems="center" paddingTop={PADDING}>
        <AvatarComponent name={name} />
        <Typography variant="bold" color={myTheme.colors.white} mt="16px">
          {name}
        </Typography>
        <Box my={'8px'}>
          <Typography
            variant="bold"
            color={myTheme.colors.white}
            fontSize={FONT_SIZE_16}>
            Gender - {restProperties.gender}
          </Typography>
          <Typography
            variant="bold"
            color={myTheme.colors.white}
            fontSize={FONT_SIZE_16}>
            Hair color - {restProperties.hair_color}
          </Typography>
          <Typography
            variant="bold"
            color={myTheme.colors.white}
            fontSize={FONT_SIZE_16}>
            Eye color - {restProperties.eye_color}
          </Typography>
          <Typography
            variant="bold"
            color={myTheme.colors.white}
            fontSize={FONT_SIZE_16}>
            Skin color - {restProperties.skin_color}
          </Typography>
        </Box>
        <Box width={WINDOW_DEVICE_WIDTH * 0.8}>
          <Button
            onPress={goBack}
            bg={myTheme.colors.secondary}
            width="100%"
            flexDirection="row"
            alignItems="center">
            <Box marginRight={2}>
              <AntDesignIcon
                name="arrowleft"
                color={myTheme.colors.primary}
                size={20}
              />
            </Box>
            <Typography color={myTheme.colors.primary}>Come back</Typography>
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
    backgroundColor: myTheme.colors.black,
  },
});

const AvatarComponent = ({ name }: { name?: string }) => (
  <UserAvatar size={100} name={name} />
);
