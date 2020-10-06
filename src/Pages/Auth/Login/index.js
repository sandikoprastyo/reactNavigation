import React, {useState, useEffect} from 'react';
import firebase from '../../../Config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
/* import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin'; */

import {
  StatusBar,
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
} from 'react-native';

const Logins = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [iconState, setIconState] = useState('eye-slash');

  const simulateNetworkRequest = () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    /*     GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '268570233560-6kicl2gr1vd0aj3q63ette7r6fv3gvnq.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
    }); */

    if (loading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [loading]);

  // Somewhere in your code
  /*   const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }; */

  /*   const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  }; */
  /*
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({isLoginScreenPresented: !isSignedIn});
  }; */

  const handleLogin = () => {
    setError('');
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setError('');
        setLoading(false);
        navigation.navigate('Home');
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
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
          leftIcon={<Icon name="user" size={20} color="black" />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Password"
          value={password}
          secureTextEntry={secureTextEntry}
          leftIcon={<Icon name="lock" size={20} color="black" />}
          rightIcon={
            <Icon name={iconState} size={20} color="black" onPress={showPass} />
          }
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.err}>{error}</Text>
      </View>
      <Button
        disabled={!loading ? false : true}
        buttonStyle={loading ? styles.loading : styles.button}
        title={loading ? 'Loading..' : 'Login'}
        onPress={!loading ? handleLogin : null}
      />
      {/*     <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={this.state.isSigninInProgress}
      /> */}
      <Text
        style={styles.textSignUp}
        onPress={() => navigation.navigate('SignUp')}>
        Create account
      </Text>
    </ImageBackground>
  );
};

export default Logins;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#262626',
  },
  inputText: {
    width: 350,
    backgroundColor: 'rgba(255, 255,255,0.6)',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontSize: 18,
    marginVertical: 10,
    marginBottom: 30,
  },
  err: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 16,
  },
  textSignUp: {
    color: '#fff',
    paddingTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
  loading: {
    borderRadius: 50,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
});
