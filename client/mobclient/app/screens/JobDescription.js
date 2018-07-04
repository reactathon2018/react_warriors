import React from "react";
import { WebView, View } from "react-native";
import { Card, Button } from "react-native-elements";

export default () => (
  <View style={{borderWidth:3, borderColor : '#FF0000', flex:1}}>
      <WebView source={{ uri: 'https://www.google.com' }} style={{}} />
  </View>
);
