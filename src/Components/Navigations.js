import React, {createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Dashboard, Profile} from '../Pages/';
import {StyleSheet} from 'react-native';
import {Logins, SignUp} from '../Pages/Auth/';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const MyContext = createContext('ini context');

function Navigations(props) {
  return (
    <SafeAreaProvider style={styles.container}>
      <MyContext.Provider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Logins"
              component={Logins}
              options={{
                title: 'My Logins',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: 'My SignUp',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'My home',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                title: 'My Dashboard',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: 'My Profile',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
    </SafeAreaProvider>
  );
}

export default Navigations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
