import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Dimensions,
    Text
} from 'react-native';
import {
    FormLabel,
    Button
} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class OTP extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.logo}>
                    <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.form}>
                    <FormLabel style={{ alignItems: 'center', marginBottom: 5 }}>Enter One-time Password</FormLabel>
                    <View style={styles.otpContainer}>
                      <View style={styles.textbox}>
                        <Text style={{ fontSize: 18 }}>OTP</Text>
                      </View>
                      <View>
                        <TextInput
                          placeholderTextColor="rgba(0,0,0,0.3)"
                          returnKeyLabel="Go"
                          keyboardType="phone-pad"
                          autoCapitalize="none"
                          maxLength={4}
                          autoCorrect={false}
                          style={styles.input}
                          underlineColorAndroid="transparent"
                          onChangeText={(text) => {
                              this.setState({
                                  mobile: text
                              });
                          }}
                        />
                      </View>
                    </View>
                </View>
                <View style={styles.submit}>
                    <Button raised title='PROCEED TO SIGN-UP!' backgroundColor='black' onPress={() => {
                        // on validate, check for +65 in case user deleted it
                        alert("sign up"); // remember to remove white spaces from number before sending to next page replace '' with ''
                    }}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 280,
        height: 280
    },
    form: {
        width: 0.6 * SCREEN_WIDTH,
        marginTop: 40
    },
    input: {
      backgroundColor: '#ffffff1F',
      color: 'black',
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      paddingLeft: 10,
      fontSize: 20,
      width: 100,
      marginTop: 10
    },
    submit: {
        marginTop: 50
    },
    otpContainer: {
        flexDirection: 'row',
        width: 0.6 * SCREEN_WIDTH,
        justifyContent: 'center'
    },
    textbox: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      borderColor: 'gray'
    }
});

export default OTP;
