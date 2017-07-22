import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source = {(require('./image/logo.png'))}/>
        <Text style = {styles.titulo}>AlphaStudy</Text>

        <View style={{justifyContent: 'flex-start', flexDirection:'column'}}>
          <View style = {{width: 200, height: 50}}>
            <Button  title = "ENTRAR" onPress = {() => Actions.logar()} color = 'rgb(31,73,125)'/>
          </View>
          <View style = {{width: 200, height: 50}}>
            <Button  title = "CADASTRAR" onPress = {() => Actions.cadastrar()} color = 'rgb(31,73,125)'/>
          </View>
        </View>
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
});

export default Index;
