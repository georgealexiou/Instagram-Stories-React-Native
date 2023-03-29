import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { SmallButton } from "../SmallButton/SmallButton";
import { styles } from "./styles";
import { StoryButton } from "./StoryButton/StoryButton";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen: React.FC = () => {
  const {
    users,
    openStory,
    stories,
    setStories,
    generateRandomUsersAndStories,
  } = useHomeScreen();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Instagram Stories</Text>
      <Text style={styles.name}>by George Alexiou</Text>
      <View style={styles.storiesContainer}>
        <ScrollView
          horizontal
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
        >
          {users.map((user, userIndex) => (
            <StoryButton
              user={user}
              userIndex={userIndex}
              openStory={openStory}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.generatedTextContainer}>
          <Text style={styles.bold}>Generated users: </Text>
          <Text style={styles.normal}>{users.length}</Text>
        </View>
        <View style={styles.generatedTextContainer}>
          <Text style={styles.bold}>Generated stories: </Text>
          <Text style={styles.normal}>{stories.length}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <SmallButton
          title="Renerate Stories"
          onPress={() => setStories(generateRandomUsersAndStories())}
        />
      </View>
    </SafeAreaView>
  );
};
