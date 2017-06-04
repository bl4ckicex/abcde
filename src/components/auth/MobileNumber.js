import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TextInput,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    FormLabel,
    Button
} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class MobileNumber extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.logo}>
                    <Image source={require('../../images/mavent_logo.png')}
                        style={styles.image} />
                </View>
                <View>
                    <FormLabel style={{alignItems: 'center', marginBottom: 5}}>Mobile Number</FormLabel>
                    <View style={styles.form}>
                        <View style={styles.textbox}>
                          <Text style={{ fontSize: 18 }}>+65</Text>
                        </View>
                        <TextInput
                            placeholderTextColor="rgba(0,0,0,0.3)"
                            returnKeyLabel="Go"
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                            maxLength={8}
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
                <View style={styles.submit}>
                    <Button
                    raised
                    title='GENERATE OTP'
                    backgroundColor='black'
                    onPress={() => {
                        Actions.otp();
                    }}
                    />
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
        width: 200,
        height: 200
    },
    form: {
        width: 0.4 * SCREEN_WIDTH,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        height: 40,
        width: 0.4 * SCREEN_WIDTH
    },
    submit: {
        marginTop: 50
    },
    textbox: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 5,
      paddingLeft: 5,
      borderWidth: 1,
      borderColor: 'gray'
    }
});

export default MobileNumber;
