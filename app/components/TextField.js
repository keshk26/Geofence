import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

class TextField extends Component {
  render() {
    const style = [styles.textInput, this.props.style];

    return (
      <View style={styles.infoContainer}>
        <TextInput
          placeholder={this.props.placeholder}
          placeholderTextColor="#9B9B9B"
          underlineColorAndroid="rgba(0,0,0,0)"
          autoCorrect={false}
          style={style}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          keyboardType={this.props.keyboardType || 'default'}
          returnKeyType={this.props.returnKeyType || 'default'}
          maxLength={this.props.maxLength}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
    marginBottom: 20,
  },
  textInput: {
    height: 56,
    width: 100,
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 14,
    color: '#4A4A4A',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  error: {
    borderColor: 'red',
  },
});

export default TextField;
