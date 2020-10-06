import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Dashboard send params</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.push('Profile', {
            user: 'Sansan',
            /* param bisa dari state */
            email: 'sansan@mail.com',
          })
        }
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});
