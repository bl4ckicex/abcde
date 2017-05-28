import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Platform,
    Picker,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import SimplePicker from 'react-native-simple-picker';

const SCREEN_WIDTH = Dimensions.get('window').width;
const options = ['Male', 'Female'];

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            gender: 'Gender',
            date: '',
            maxDate: new Date()
        };
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">

                <View style={styles.form}>
                    <View style={styles.profilepic}>
                        <TouchableOpacity style={styles.profileBtn} onPress={() => {
                            alert("add picture");
                        }}>
                        <Image source={require('../images/circle-with-plus.png')} style={styles.circlewithplus} />
                        </TouchableOpacity>
                        <Image source={require('../images/placeholderuser.png')} style={styles.profilepicimage} />

                    </View>
                    <View>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="rgba(0,0,0,0.3)"
                            returnKeyLabel="Next"
                            onSubmitEditing={() => this.firstname.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => {
                                this.setState({
                                    username: text
                                });
                            }}
                        />
                    </View>

                      <View>
                          <TextInput
                              placeholder="First Name"
                              placeholderTextColor="rgba(0,0,0,0.3)"
                              returnKeyLabel="Next"
                              onSubmitEditing={() => this.lastname.focus()}
                              autoCapitalize="none"
                              autoCorrect={false}
                              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                              underlineColorAndroid="transparent"
                              ref={(input) => this.firstname = input}
                              onChangeText={(text) => {
                                  this.setState({
                                      firstname: text
                                  });
                              }}
                          />
                      </View>

                      <View>
                          <TextInput
                              placeholder="Last Name"
                              placeholderTextColor="rgba(0,0,0,0.3)"
                              returnKeyLabel="Next"
                              onSubmitEditing={() => this.password.focus()}
                              autoCapitalize="none"
                              autoCorrect={false}
                              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                              underlineColorAndroid="transparent"
                              ref={(input) => this.lastname = input}
                              onChangeText={(text) => {
                                  this.setState({
                                      lastname: text
                                  });
                              }}
                          />
                      </View>

                    <View>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="rgba(0,0,0,0.3)"
                            returnKeyLabel="Next"
                            onSubmitEditing={() => this.retypepassword.focus()}
                            secureTextEntry
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                            underlineColorAndroid="transparent"
                            ref={(input) => this.password = input}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text
                                });
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder="Retype Password"
                            placeholderTextColor="rgba(0,0,0,0.3)"
                            returnKeyLabel="Go"
                            secureTextEntry
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                            underlineColorAndroid="transparent"
                            ref={(input) => this.retypepassword = input}
                            onChangeText={(text) => {
                                this.setState({
                                    retypepassword: text
                                });
                            }}
                        />
                    </View>

                    <View style={styles.genderDateContainer}>
                      <View style={{ borderWidth: 1, borderColor: 'gray', paddingLeft: 3, justifyContent: 'center' }}>
                        <Text
                        style={{ width: 0.3 * SCREEN_WIDTH,
                           paddingLeft: 10,
                           fontSize: 16
                         }}onPress={() => { this.refs.picker.show(); }}>{this.state.gender}</Text>
                      </View>

                      <SimplePicker
                        ref={'picker'}
                        options={options}
                        onSubmit={(option) => {
                          this.setState({
                            gender: option,
                          });
                        }}
                      />

                        <View>
                            <DatePicker
                                style={styles.datepicker}
                                date={this.state.date}
                                mode="date"
                                placeholder="DOB"
                                format="DD-MM-YYYY"
                                minDate="02-01-1900"
                                maxDate={this.state.maxDate}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => { this.setState({ date })}}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.submit}>
                    <Button raised title='SIGN UP' backgroundColor='black' onPress={() => {
                        Actions.mobile();
                    }}/>
                </View>
                <View style={styles.disclaimer}>
                    <Text style={styles.disclaimerText}>By signing up you agree to the{'\n'}<Text style={{color:"blue", textDecorationLine:"underline"}} onPress={() => {
                        alert("t&c");
                    }}>Terms & Conditions</Text> and <Text style={{color:"blue", textDecorationLine:"underline"}} onPress={() => {
                        alert("pp");
                    }}>Privacy Policy</Text></Text>
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
        width: 120,
        height: 120
    },
    profilepicimage: {
        width: 125,
        height: 125,
        borderRadius: 60
    },
    profilepic: {
        alignItems: 'center',
        paddingBottom: 50,
    },
    logo: {
    },
    profileBtn: {
        position: 'absolute',
        paddingLeft: 115,
        paddingTop: 100
    },
    circlewithplus: {
        width: 25,
        height: 25
    },
    form: {
        width: 0.7 * SCREEN_WIDTH
    },
    emailBorder: {
        ...Platform.select({
            ios: {
                height: 35
            },
        }),
        borderWidth: 2,
    },
    passwordBorder: {
        marginTop: 10,
        ...Platform.select({
            ios: {
                height: 35
            },
        }),
        borderWidth: 2,
    },
    retypePasswordBorder: {
        marginTop: 10,
        ...Platform.select({
            ios: {
                height: 35
            },
        }),
        borderWidth: 2,
    },
    genderBorder: {
        marginTop: 10,
        ...Platform.select({
            ios: {
                height: 35
            },
        }),
        borderWidth: 2,
        width: 125,
        flex: 1
    },
    gender: {
        width: 0.3 * SCREEN_WIDTH,
        height: 20
    },
    input: {
        paddingLeft: 10
    },
    genderDateContainer: {
        flexDirection: 'row'
    },
    datepickerContainer: {
        flex: 1
    },
    datepicker: {
        width: 0.4 * SCREEN_WIDTH,

    },
    submit: {
        marginTop: 50,
        width: 0.7 * SCREEN_WIDTH
    },
    disclaimerText: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default Register;
