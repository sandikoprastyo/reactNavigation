import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigations from './src/Components/Navigations';
/* import Logins from './src/Pages/Auth/Login/index';
import Auth from './src/Pages/Auth/'; */

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigations />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
