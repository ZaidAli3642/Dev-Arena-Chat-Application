import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppButton, AppText} from '../../components';
import {colors, fonts as customFonts} from '../../config';
import {fonts} from '../../utils';
import {routes} from '../../routes';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any, any>;
}

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background-image.jpg')}
      style={styles.container}>
      <AppText
        styles={{marginTop: '40%'}}
        title="DevArena"
        color={colors.tomato}
        fontSize={fonts.fontSize(60)}
        fontFamily={customFonts.PacificoRegular}
      />

      <View style={styles.buttons}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LoginScreen)}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate(routes.RegisterScreen)}
          backgroundColor={colors.tomato}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttons: {
    width: '100%',
    padding: 30,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1 / 0.6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
