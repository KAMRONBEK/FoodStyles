import React from 'react';
import {Image, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoImage from '@technicalchallenge/assets/images/logo.png';

const GradientHeader = () => {
  return (
    <LinearGradient
      colors={['#FA7745', '#F3C442']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.gradient}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Image source={LogoImage} style={styles.logo} />
    </LinearGradient>
  );
};

export default GradientHeader;

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 60,
    paddingHorizontal: 19,
    flexDirection: 'row',
  },

  logo: {
    alignSelf: 'center',
  },
});
