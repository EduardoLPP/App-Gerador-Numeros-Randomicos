import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';

const geraNumeroAleatorio = () => {
    var numeroAleatorio = Math.floor(Math.random() * 10);
    alert(numeroAleatorio);
}

const App = () =>{
  return (
    <View>
      <Text>Gerador de números aleatórios!</Text>
      <Button
        title = "Gerar um número randômico"
        onPress = {geraNumeroAleatorio}
      />
    </View>
    );
};

AppRegistry.registerComponent('app1', () => App ); 