import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export class Principal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress = {() => Actions.logar()}>
            <Image source = {(require('../image/logo.png'))}/>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    textAlign : 'center',
    margin: 10,
    color: '#FF8C00',
    fontWeight: 'bold'
  },
  titulo2: {
    fontSize: 25,
    textAlign : 'center',
    margin: 10,
    color: '#FF8C00',
    fontWeight: 'bold'
  },
});

export default Principal;
