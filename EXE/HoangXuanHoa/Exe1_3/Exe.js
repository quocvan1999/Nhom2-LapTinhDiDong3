import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Text, Image } from 'react-native';

export default class HomePage extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.btncontainer}>
            <Image 
            style={styles.logo}
            source={require('./images/img1.png')}/>
            <Text style={styles.title}>Home Page</Text>
        </View>
        <TouchableOpacity 
            style={styles.btncontainer1}>
            <Image 
            style={styles.logo}
            source={require('./images/img2.png')}/>
            <Text style={styles.butntext}>
              Grammar
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.btncontainer2}>
            <Image 
            style={styles.logo}
            source={require('./images/img3.png')}/>
            <Text style={styles.butntext}>
              Vocabulary
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.btncontainer3}>
            <Image 
            style={styles.logo}
            source={require('./images/img4.png')}/>
            <Text style={styles.butntext}>
              Spelling
            </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    textAlignVertical: 'center',
    justifyContent: 'center'
  },
  title: {
      color: '#004D40',
      fontWeight: 'bold',
      fontSize: 30
  },
  btncontainer: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    textAlignVertical: 'center',
},
  btncontainer1: {
    borderColor: '#1A237E',
    borderWidth: 1,
    backgroundColor: '#3F51B5',
    borderRadius: 10,
    marginTop: 5,
    marginLeft:5,
    marginRight: 5,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
},
btncontainer2: {
    borderColor: '#311B92',
    borderWidth: 1,
    backgroundColor: '#673AB7',
    borderRadius: 10,
    marginTop: 5,
    marginLeft:5,
    marginRight: 5,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
},
btncontainer3: {
    borderColor: '#4A148C',
    borderWidth: 1,
    backgroundColor: '#9C27B0',
    borderRadius: 10,
    marginTop: 5,
    marginLeft:5,
    marginRight: 5,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
},
butntext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
},
logo: {
    width: 110,
    height: 60,
  },
});