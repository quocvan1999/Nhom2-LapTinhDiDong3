/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      })
  }

  _renderItem = ({ item }) => (                                                                                             
    <TouchableOpacity onPress={() => alert(item.completed)}>
      <View style={styles.Item}>
        <Text>Id: {item.id}</Text>
        <Text>userId: {item.userId}</Text>
        <Text>Title: {item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' animating />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index}
          >
          </FlatList>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  Item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
});