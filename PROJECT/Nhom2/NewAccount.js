import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            mail: "",
            phone: "",
        };
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <View style={styles.ctn}>
                        <Image
                            style={styles.logo}
                            source={require('./images/img1.png')} />
                        <View style={styles.formcontainer}>
                            <View style={styles.containerform}>
                                <StatusBar barStyle={"light-content"}></StatusBar>
                                <TextInput
                                    value={this.state.username}
                                    onChangeText={username => this.setState({ username })}
                                    placeholderTextColor='#3F51B5'
                                    placeholder='Username'
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={styles.input}>
                                </TextInput>
                                <TextInput
                                 value={this.state.password}
                                 onChangeText={password => this.setState({ password })}
                                    placeholderTextColor='#3F51B5'
                                    placeholder='Password'
                                    returnKeyType='go'
                                    style={styles.input}
                                    secureTextEntry
                                    ref={(input) => this.passwordInput = input}
                                ></TextInput>
                                <TextInput
                                    placeholderTextColor='#3F51B5'
                                    placeholder=' Enter Password'
                                    returnKeyType='go'
                                    style={styles.input}
                                    secureTextEntry
                                    ref={(input) => this.passwordInput = input}
                                ></TextInput>
                                <TextInput
                                 value={this.state.mail}
                                 onChangeText={mail => this.setState({ mail })}
                                    placeholderTextColor='#3F51B5'
                                    placeholder='Email'
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={styles.input}>
                                </TextInput>
                                <TextInput
                                 value={this.state.phone}
                                 onChangeText={phone => this.setState({ phone })}
                                    placeholderTextColor='#3F51B5'
                                    placeholder='Phone'
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={styles.input}>
                                </TextInput>
                                <TouchableOpacity
                                onPress={() => this.signup()}
                                    style={styles.btncontainer}>
                                    <Text style={styles.butntext}
                                >
                                        SignUp
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
    signup(){
        fetch('http://10.0.3.2/TracNghiem/SignUp.php',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                mail: this.state.mail,
                phone: this.state.phone,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) =>{
            if(responseJson ==  "Successfully"){
                alert("Dang ky thanh cong");
            }else{
                alert("Kiem tra lai thong tin!");
            }
        })
        .catch((error) =>{
            console.log(error);
        })
    }
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#95a5a6',
        borderWidth: 0.5,
        borderRadius: 10,
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#2c3e50',
        paddingHorizontal: 10,
    },
    btncontainer: {
        backgroundColor: '#2908b9',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20
    },
    butntext: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        
    }
    ,
    containerform: {
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1'
    },
    textstyle: {
        marginTop: 10,
        color: '#2908b9'
    },
    logo: {
        marginTop: 5,
        marginLeft: 5,
        width: 110,
        height: 60
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 15
    },
    ctn: {
        borderWidth: 0.3,
        borderColor: '#95a5a6',
        borderRadius: 10,
        backgroundColor: 'white',
        height: 480,
        width: 350
    }
});