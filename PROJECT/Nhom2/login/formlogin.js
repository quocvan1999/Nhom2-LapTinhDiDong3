import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, StatusBar, ToolbarAndroid } from 'react-native';

export default class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }
    render() {
        //const{ navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
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
                    onSubmitEditing={() =>this.refs.txtPassword.focus()}
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
                    autoCorrect={false}
                    ref={(input) => this.passwordInput = input}>
                </TextInput>
                <TouchableOpacity
                    onPress={() => this.login()}
                    style={styles.btncontainer}>
                    <Text style={styles.butntext}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    //const{ navigate } = this.props.navigation;
    login() {
        
        fetch('http://192.168.131.13/TracNghiem/Login.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson ==  "true") {
                   // alert("Login thanh cong");
                    //navigate('Home');
                   this.props.navigation.navigate('Home');
                } else {
                    alert("Login Failed");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

}



const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        borderColor: '#95a5a6',
        borderWidth: 0.5,
        borderRadius: 15,
        height: 52,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#2c3e50',
        paddingHorizontal: 10
    },
    btncontainer: {
        backgroundColor: '#2908b9',
        paddingVertical: 15,
        borderRadius: 10
    },
    butntext: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});