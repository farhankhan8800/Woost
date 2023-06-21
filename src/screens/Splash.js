import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Signup');
    }, 2500);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/LOW-INTRO.gif')}
      style={{flex: 1}}
    />
  );
}
export default SplashScreen;
