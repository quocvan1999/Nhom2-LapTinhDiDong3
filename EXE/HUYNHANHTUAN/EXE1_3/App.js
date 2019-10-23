import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Text } from 'react-native';

export default class ExeComponent extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.ctn}>
            <Image 
            style={styles.logo}
            source={require('./images/img4.png')}/>
            <View style={styles.container1}>
              <Text style={styles.Text1}>Huynh Anh Tuan</Text>
              <Text style={styles.Text2}>00000000000000</Text>
            </View>
          </View>
          <View style={styles.ctn}>
            <Image 
            style={styles.logo}
            source={require('./images/img4.png')}/>
            <View style={styles.container1}>
              <Text style={styles.Text1}>Tuan Anh Huynh</Text>
              <Text style={styles.Text2}>4444444444444</Text>
            </View>
          </View>
          <View style={styles.ctn}>
            <Image 
            style={styles.logo}
            source={require('./images/img4.png')}/>
            <View style={styles.container1}>
              <Text style={styles.Text1}>Huynh Tuan</Text>
              <Text style={styles.Text2}>2222222222222222</Text>
            </View>
          </View>
          <View style={styles.ctn}>
            <Image 
            style={styles.logo}
            source={require('./images/img4.png')}/>
            <View style={styles.container1}>
              <Text style={styles.Text1}>Bui Anh Tuan Anh</Text>
              <Text style={styles.Text2}>3333333333333333</Text>
            </View>
          </View>
          <View style={styles.ctn}>
            <Image 
            style={styles.logo}
            source={require('./images/img4.png')}/>
            <View style={styles.container1}>
              <Text style={styles.Text1}>Ngô Tuan Anh</Text>
              <Text style={styles.Text2}>44444444444444444</Text>
            </View>
          </View>
          <View style={styles.ctn}>
            <Image 
            style={styles.logo}
            source={require('./images/img4.png')}/>
            <View style={styles.container1}>
              <Text style={styles.Text1}>Ngô Tuan Anh</Text>
              <Text style={styles.Text2}>44444444444444444</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
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
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  ctn: {
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#95a5a6',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 90,
    width: 400,
    alignItems: 'center',
    marginTop: 10
  },
  container1: {
    flexDirection: 'column',
    paddingLeft: 10
  },
  Text1: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold'
  },
  Text2: {
    color: 'black',
    fontSize: 16,
    paddingTop:10
  }
});