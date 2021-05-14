import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import { SearchBar, ListItem, Input } from 'react-native-elements';

import MyHeader from '../components/MyHeader';
import { BookSearch } from 'react-native-google-books';

export default class BooksDonateScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      bookName: '',
      reasonToRequest: '',
      grade: '',
      board: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.13 }}>
          <MyHeader title={'Donate Books'} navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 0.8 }}>
          <Input
            style={styles.formTextInput}
            placeholder={'Book name'}
            containerStyle={{ marginTop: RFValue(10) }}
            onChangeText={(text) => this.getBooksFromApi(text)}
            onClear={(text) => this.getBooksFromApi('')}
            value={this.state.bookName}
          />
          <View style={{ alignItems: 'center' }}>
            <Input
              style={styles.formTextInput}
              containerStyle={{ marginTop: RFValue(10) }}
              numberOfLines={1}
              placeholder={'School Name'}
              onChangeText={(text) => {
                this.setState({
                  reasonToRequest: text,
                });
              }}
              value={this.state.reasonToRequest}
            />
            <Input
              style={styles.formTextInput}
              placeholder={'Board - ICSCE/CBCSE/SSC/IGCSE/IB'}
              containerStyle={{ marginTop: RFValue(10) }}
              onChangeText={(text) => {
                this.setState({
                  board: text,
                });
              }}
            />
            <Input
              style={styles.formTextInput}
              label={'Grade'}
              placeholder={'Enter Grade from Nursery to Grade 12'}
              containerStyle={{ marginTop: RFValue(10) }}
              onChangeText={(text) => {
                this.setState({
                  grade: text,
                });
              }}
            />
             <Input
              style={styles.formTextInput}
              label={'Brief description of the books'}
              placeholder={' Enter Brief description of the books'}
              multiline
              numberOfLines={3}
              containerStyle={{ marginTop: RFValue(10) }}
              onChangeText={(text) => {
                this.setState({
                  board: text,
                });
              }}
            />
            <TouchableOpacity
              style={[styles.button, { marginTop: RFValue(10) }]}
              onPress={() => {
                this.addRequest(
                  this.state.bookName,
                  this.state.reasonToRequest
                );
              }}>
              <Text style={styles.requestbuttontxt}>Donate Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
  backgroundColor: "#89cff0",
  },
  formTextInput: {
    width: '75%',
    height: '100%',
    paddingBottom: 1000,
  },
  button: {
    width: '75%',
    height: RFValue(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(50),
    backgroundColor: '#32867d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  requestbuttontxt: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#fff',
  },
});
