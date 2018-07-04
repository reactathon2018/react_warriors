import React, { Component } from 'react';
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";

const images = [
  {
    key: 1,
    name: "Consultant",
    description: "Google Script Editor 2 years",
    image: require("../images/1.jpg"),
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  },
  {
    key: 2,
    name: "Architect",
    description: "Hybrid Apps 5+ years experience in developing cross platform apps",
    image: require("../images/2.jpg"),
    url: "https://unsplash.com/photos/waZEHLRP98s"
  },
  {
    key: 3,
    name: "Senior Architect",
    description: "Mobility 10 year experience",

    image: require("../images/3.jpg"),
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  },
  {
    key: 4,
    name: "Manager",
    description: "Client Team manager 10+",
    image: require("../images/4.jpg"),
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  }
];

export default class Home extends Component {

  static navigationOptions = ({navigation}) => {

    title: 'Welcome'
  };
  
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          {images.map(({ name, description, url, key }) => (
            <Card title={`${name}`} key={key}>
              <Text style={{ marginBottom: 10 }}>
                {description}.
              </Text>
              <Button
                backgroundColor="#03A9F4"
                title="VIEW NOW"
                onPress={() => navigate("JobDescription")}
              />
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  }
}