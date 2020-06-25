import React from "react";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./app/components/Screen";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);
const TweetDetails = () => (
  <Screen>
    <Text>TweetDetails</Text>
  </Screen>
);

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen name="TweetDetails" component={TweetDetails} />
//   </Stack.Navigator>
// );

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="tweets" component={Tweets} />
    <Tab.Screen name="tweetdetails" component={TweetDetails} />
  </Tab.Navigator>
);
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
