import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import randomColor from 'randomcolor';
import AppText from './AppText';
import {fonts} from '../utils';

interface Props {
  props?: object;
  imageSource?: string | number;
  styles?: object;
}

const FeatureCard: React.FC<PropsWithChildren<Props>> = ({
  imageSource,
  props,
  styles: featureStyles,
}) => {
  if (imageSource)
    return (
      <ImageBackground
        {...props}
        source={
          imageSource
            ? {uri: imageSource}
            : require('../assets/images/background-image.jpg')
        }
        style={[styles.card, featureStyles]}
        imageStyle={{borderRadius: 30}}>
        <AppText title={'First name'} fontSize={fonts.fontSize(12)} />
        <AppText title={'Last name'} fontSize={fonts.fontSize(12)} />
      </ImageBackground>
    );

  return (
    <LinearGradient
      {...props}
      colors={randomColor({count: 2})}
      style={[styles.card, featureStyles]}>
      <AppText title={'First name'} fontSize={fonts.fontSize(12)} />
      <AppText title={'Last name'} fontSize={fonts.fontSize(12)} />
    </LinearGradient>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({
  card: {
    width: 100,
    aspectRatio: 1 / 1.5,
    borderRadius: 30,
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 20,
  },
});
