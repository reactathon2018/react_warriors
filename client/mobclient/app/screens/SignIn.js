import React, { Component } from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import axios from 'axios';

export default class SigIn extends Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address..." />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..." />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN IN"
            onPress={() => {
                axios.post(
                  'http://rallycoding.herokuapp.com/api/music_albums', 
                  {
                    'username': 'value1',
                    'password': 'value2',
                    //other data key value pairs
                  },
                  {
                    headers: {
                      'Content-Type': 'application/json',
                          //other header fields
                    }
                  }
                ).then(
                  response => navigation.navigate("SignedIn")// console.log(response.data)
                ).catch(
                    error => navigation.navigate("SignedIn")//console.log(error)
                )
              }}
          />
        </Card>
    </View>
    );
  }
}