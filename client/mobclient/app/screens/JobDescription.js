import React from "react";
import { WebView, View } from "react-native";
import { Card, Button } from "react-native-elements";

export default () => (
  <View style={{borderWidth:3, borderColor : '#FF0000', flex:1}}>
      <WebView source={{ uri: 'https://www.hirist.com/j/kla-tencor-technology-specialist-c-net-7-13-yrs-338177.html?ref=kp' }} style={{}} />
  </View>
);
