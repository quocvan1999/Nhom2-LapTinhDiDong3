import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Spelling extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <View style={styles.ctn}>
                        <Image
                            style={styles.logo}
                            source={require('./images/img1.png')} />
                        <View style={styles.formcontainer}>
                            <Image
                                style={styles.logo1}
                                source={require('./images/img4.png')} />
                            <Text style={styles.text}>
                            Spelling
                            </Text>
                            <Text style={styles.nd}>
                                Số câu hỏi : 10
                            </Text>
                            <Text style={styles.nd}>
                                Thời gian trả lời: 90s
                            </Text>
                            <TouchableOpacity
                                //onPress={() => this.signup()}
                                style={styles.btncontainer}>
                                <Text style={styles.butntext}
                                >
                                    Start
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView >
        );
    }
}

const styles = StyleSheet.create({
    nd:{
        marginTop: 30,
        textAlign: 'center',
        fontSize: 15
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    logo1: {
        width: 110,
        height: 60,
        marginLeft: 120,
        marginBottom: 20,
        //backgroundColor: ''
      },
    input: {
        borderColor: '#95a5a6',
        borderWidth: 0.5,
        borderRadius: 15,
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#2c3e50',
        paddingHorizontal: 10
    },
    btncontainer: {
        backgroundColor: '#2908b9',
        paddingVertical: 15,
        borderRadius: 10,
        marginLeft:30,
        marginRight: 30,
        marginTop: 40
    
        
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