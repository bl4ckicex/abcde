import Expo from 'expo';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import {
    FormLabel,
    Button
} from 'react-native-elements';


class OTP extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.logo}>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                        style={styles.image} />
                </View>
                <View style={styles.form}>
                    <FormLabel style={{alignItems: 'center', marginBottom: 5}}>Enter One-time Password</FormLabel>
                    <View style={styles.otpContainer}>
                        <View>
                            <TextInput
                                defaultValue=""
                                placeholderTextColor="rgba(0,0,0,0.3)"
                                returnKeyLabel="Go"
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                maxLength={1}
                                onChangeText={(text) => {
                                    this.setState({
                                        otpFirst: text
                                    });
                                }}
                            />
                        </View>
                        <View>
                            <TextInput
                                defaultValue=""
                                placeholderTextColor="rgba(0,0,0,0.3)"
                                returnKeyLabel="Go"
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                maxLength={1}
                                onChangeText={(text) => {
                                    this.setState({
                                        otpSecond: text
                                    });
                                }}
                            />
                        </View>
                        <View>
                            <TextInput
                                defaultValue=""
                                placeholderTextColor="rgba(0,0,0,0.3)"
                                returnKeyLabel="Go"
                                keyboardType="default"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                maxLength={1}
                                onChangeText={(text) => {
                                    this.setState({
                                        otpThird: text
                                    });
                                }}
                            />
                        </View>
                        <View>
                            <TextInput
                                defaultValue=""
                                placeholderTextColor="rgba(0,0,0,0.3)"
                                returnKeyLabel="Go"
                                keyboardType="phone-pad"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                maxLength={1}
                                onChangeText={(text) => {
                                    this.setState({
                                        otpFourth: text
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
        width:280,
        height:280
    },
    form: {
        width: 210,
        marginTop: 40
    },
    input: {
        paddingLeft: 12,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        width: 35
    },
    submit: {
        marginTop: 50
    },
    otpContainer: {
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

export default OTP;
