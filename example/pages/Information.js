import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Styles from './_styles';

export default class Information extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.title}>Information</Text>
        <Text style={Styles.paragraph}>
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
      </View>
    );
  }
}