import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ractions from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class LoginForm extends Component {

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      Actions.mainUI();
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={-800} >

          <View style={styles.container}>
            <View>
              <Image source={require('../../../assets/images/mavent_logo.png')} style={styles.LogoImage} />
            </View>
            <View style={styles.Form}>
                <View>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='white'
                        returnKeyLabel='Next'
                        onSubmitEditing={() => this.password.focus()}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.TextInput}
                        underlineColorAndroid='transparent'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </View>
                <View>
                    <TextInput
                        //color="white"
                        placeholder="Password"
                        placeholderTextColor="white"
                        returnKeyLabel="Go"
                        //backgroundColor="#ffffff1F"
                        onSubmitEditing={() => this.password.focus()}
                        secureTextEntry
                        style={styles.TextInput}
                        underlineColorAndroid="transparent"
                        ref={(input) => this.password = input}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </View>
            </View>
            <View style={styles.ForgetPassword}>
              <Text
                style={{ color: 'white', textDecorationLine: 'underline' }}>Forgot your password?
              </Text>
            </View>

            <View style={styles.Button}>
                <Button
                    raised
                    title='LOGIN'
                    iconRight
                    icon={{ name: 'send' }}
                    backgroundColor='#0F3B5F'

                    onPress={() => {
                                alert(this.props.email);
                  }}
                />
                <SocialIcon
                  raised
                  title='Sign In With Facebook'
                  button
                  type='facebook'

                  onPress={() => {
                    this.props.facebookLogin();
                    this.onAuthComplete(this.props);
                }}
                />

            </View>
            <View style={styles.Register}>
              <Text style={{ color: 'white' }}>Sign up with us <Text style={{ color: 'white', textDecorationLine: 'underline' }} onPress={() => { Actions.register(); }} >now!</Text></Text>
            </View>
          </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  },
  LogoImage: {
    height: 200,
    width: 200
  },
  Form: {
    width: 0.7 * SCREEN_WIDTH,
    marginTop: 30
  },
  TextInput: {
    backgroundColor: '#ffffff1F',
    color: 'white',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 14
  },
  ForgetPassword: {
    marginTop: 9,
    alignItems: 'center'
  },
  Button: {
    marginTop: 40,
    width: 0.75 * SCREEN_WIDTH,
    //paddingBottom: 10
  },
  Register: {
      marginTop: 5,
    alignItems: 'center'
  }
});

function mapStateToProps({ auth }) {
  const { token, email, password } = auth;

  return { token, email, password };
}

export default connect(mapStateToProps, ractions)(LoginForm);
