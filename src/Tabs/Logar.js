import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native'

import {Actions} from 'react-native-router-flux';



class Logar extends Component{
  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style = {styles.container}>

      <View style = {{alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <View style = {{width: 500, height: 80, top: 85, alignItems: 'center'}}>
            <Image source = {(require('../image/person.png'))}/>
          </View>

        <View style = {{width: 300}}>
          <TextInput
            placeholder = "nome de usuario"
            returnKeyType = 'next'
            autoCorrect = {false}
            autoCapitalize = 'none'
            onSubmitEditing = {() => this.passwordInput.focus()}
            style={styles.input}
          />
          <TextInput
            placeholder = "senha"
            secureTextEntry
            returnKeyType = 'go'
            ref = {(input) => this.passwordInput = input}
            style={styles.input}
          />


        <View style={{alignItems: 'center', flexDirection:'column'}}>
          <View style = {styles.botao}>
            <Button  title = "CONTINUAR" color = 'rgb(31,73,125)' style = {styles.btn} onPress = {() => Actions.principal()}/>
          </View>
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
    backgroundColor: '#F0F8FF',
  },
  input: {
    marginBottom: 10,
    color: 'rgb(0,0,0)',
    paddingVertical: 3,
    top: 380
  },
  botao: {
    width: 200,
    top: 400,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem: {
    backgroundColor: '#87CEFA',
  }
});


module.exports = Logar;
