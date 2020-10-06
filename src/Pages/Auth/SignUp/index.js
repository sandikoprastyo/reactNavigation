import React, {useState} from 'react';
import firebase from '../../../Config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {
  ImageBackground,
  Text,
  StatusBar,
  Image,
  View,
  StyleSheet,
} from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [iconState, setIconState] = useState('eye-slash');

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Success');
        navigation.navigate('Logins');
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        //var errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const showPass = () => {
    setSecureTextEntry(false);
    setIconState('eye');
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require('../../../assets/image/bb.jpg')}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        source={require('../../../assets/image/logo-red.png')}
        style={styles.img}
      />
      <View style={styles.inputText}>
        <Input
          label="Email"
          value={email}
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Password"
          value={password}
          secureTextEntry={secureTextEntry}
          leftIcon={<Icon name="lock" size={24} color="black" />}
          rightIcon={
            <Icon name={iconState} size={20} color="black" onPress={showPass} />
          }
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.err}>{error}</Text>
      </View>

      <Button
        buttonStyle={styles.buttonSign}
        title="Sign Up"
        onPress={handleSignUp}
      />
    </ImageBackground>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626',
  },
  err: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.7,
    fontSize: 16,
    padding: 10,
  },
  inputText: {
    width: 350,
    backgroundColor: 'rgba(255, 255,255,0.6)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#000',
    marginVertical: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  buttonSign: {
    borderRadius: 50,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
});
