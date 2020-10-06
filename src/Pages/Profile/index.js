import React from 'react';
import firebase from '../../Config/firebase';
import {View, Text, Button, StyleSheet} from 'react-native';

const Profile = ({route, navigation}) => {
  /*   const {user} = route.params;
  const {email} = route.params; */

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        setTimeout(() => {
          navigation.navigate('Logins');
        }, 3000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Profile menerima params dari dashboard</Text>
      <View>
        <Text>Email : props email</Text>
      </View>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="logout" onPress={handleSignOut} />
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});
