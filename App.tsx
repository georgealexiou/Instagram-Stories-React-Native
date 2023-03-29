import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/HomeScreen/HomeScreen";
import { StoryScreen } from "./src/StoryScreen/StoryScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type RootStackParamList = {
  Home: undefined;
  Story: {
    stories: Story[];
    currentStoryIndex: number;
  };
};

export type Story = {
  id: number;
  content: string;
  user: string;
  userId: number;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home" headerMode="none">
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Story" component={StoryScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
