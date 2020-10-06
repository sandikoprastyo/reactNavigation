import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';
const SplashScreen = () => {
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={true}
      logoImage={require('../../assets/image/logo-red.png')}
      backgroundColor={'#262626'}
      logoHeight={80}
      logoWidth={80}>
      <View style={styles.container}>
        <Image source={require('../../assets/image/logo-red.png')} />
        <Text style={styles.text}>SplashScreen</Text>
      </View>
    </AnimatedSplash>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  text: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
