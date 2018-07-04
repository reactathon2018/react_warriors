import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator
} from "react-navigation";
import { FontAwesome, Icon } from "react-native-vector-icons";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import JobDescription from "./screens/JobDescription";
import Profile from "./screens/Profile";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const SettingsButton = (props) => (
  <TouchableHighlight onPress={() => props.navigate('JobDescription')}>
    <Icon name='more-vert' style={styles.headerButtonIcon} />
  </TouchableHighlight>
)

export const HomeS = StackNavigator({
  HomeS: {
    screen: Home,
    header: ({ navigate }) => ({
      right: <SettingsButton navigate={navigate} />
    }),
    navigationOptions: {
      title: "Home",
      headerStyle
    }
  },
  JobDescription: {
    screen: JobDescription,
    navigationOptions: {
      title: "JobDescription",
      headerStyle
    }
  }
});

export const ProfileS = StackNavigator({
  ProfileS: {
    screen: Profile,
    navigationOptions: {
      title: "Profile",
      headerStyle
    }
  }
});

export const SignedIn = TabNavigator(
  {
    Home: {
      screen: HomeS,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    Profile: {
      screen: ProfileS,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
