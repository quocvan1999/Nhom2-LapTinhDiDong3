import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Text, TouchableOpacity, StatusBar, TextInput } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.ctn}>
            <Image
              style={styles.logo}
              source={require('./images/img1.png')} />
            <View style={styles.formcontainer}>
              {/* <FormLogin>
              </FormLogin> */}
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
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
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

            </View>
          </View>
          <Text style={styles.textstyle}
            onPress={() => navigate('Sign')}
          >Register a new account</Text>
          {/* <Text style={styles.textstyle}
          onPress={()=> navigate('Home')}
          >Home</Text> */}
        </View>

      </KeyboardAvoidingView>
    );
  }

  login() {

    fetch('http://10.0.3.2/TracNghiem/Login.php', {
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
        if (responseJson == "true") {
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
    flex: 2,
    backgroundColor: '#ecf0f1',
    marginTop: 80,
  },
  textstyle: {
    marginTop: 10,
    color: '#2908b9'
  },
  logo: {
    marginTop: 20,
    marginLeft: 5,
    width: 110,
    height: 60
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  ctn: {
    borderWidth: 0.3,
    borderColor: '#95a5a6',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 350,
    width: 350,
    marginTop: 50
  },
  container: {
    padding: 20,
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
    borderRadius: 10,
    marginTop: 20
  },
  butntext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

