import React, {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from './src/Pages/SplashScreen/index';

const Main = () => {
  /* State */
  const [currentScreen, setCurrentScreen] = useState('SplashScreen');
  /* Setimeout untuk splash screen */
  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen('Go to Login');
    }, 3000);
  });
  /* variable if else */
  const mainScreen =
    currentScreen === 'SplashScreen' ? <SplashScreen /> : <App />;
  /* Return variable */
  return mainScreen;
};

export default Main;

AppRegistry.registerComponent(appName, () => Main);
