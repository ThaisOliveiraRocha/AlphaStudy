import React from 'react';
import { Router, Scene} from 'react-native-router-flux';


import {Index} from './src/Index';
import Logar from './src/Tabs/Logar';
import Cadastrar from './src/Tabs/Cadastrar';
import Principal from './src/Tabs/Principal';

export default class App extends React.Component {
  render() {
    return (
      <Router>
            <Scene key="root">
                <Scene key="index" component={Index} title="index" initial = {true} hideNavBar={true}/>
                <Scene key="logar" component={Logar} title="Logar" hideNavBar={true}/>
                <Scene key="cadastrar" component={Cadastrar} title="Cadastrar" hideNavBar={true}/>
                <Scene key="principal" component={Principal} title="Principal" hideNavBar={true}/>
            </Scene>
      </Router>
    );
  }
}
