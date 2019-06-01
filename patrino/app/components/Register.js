import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  ScrollView
} from "react-native";

import AsyncStorage from '@react-native-community/async-storage';

export default class Register extends Component {
  /*Removendo header padrão*/
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
      "name": "",
      "email": "",
      "password": "",
      "phone": "",
      "address": ""
    };
  }

  /*Registrando um novo usuário*/
  onRegisterPress() {
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.password;
    var phone = this.state.phone;
    var address = this.state.address;

    return fetch('http://200.137.131.118:1234/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phone: phone,
          address: address
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.props.navigation.navigate("Login");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Label>Nome</Label>
          <TextInput onChangeText={(name) => this.setState({name})} />

          <Label>E-mail</Label>
          <TextInput onChangeText={(email) => this.setState({email})} />

          <Label>Telefone</Label>
          <TextInput onChangeText={(phone) => this.setState({phone})} />

          <Label>Senha</Label>
          <TextInput onChangeText={(password) => this.setState({password})} />

          <Label>Endereço</Label>
          <TextInput onChangeText={(address) => this.setState({address})} />

          <Button success style={{ margin: 10 }}
            onPress={() => this.onRegisterPress()}
          >
            <Text>Cadastrar-se</Text>
          </Button>

        </ScrollView>
      </View>
    );
  }
}

/*Criando stylesheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
