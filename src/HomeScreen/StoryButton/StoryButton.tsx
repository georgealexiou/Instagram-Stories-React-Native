import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type StoryButtonProps = {
  user: any;
  userIndex: number;
  openStory: (userIndex: number) => void;
};

export const StoryButton: React.FC<StoryButtonProps> = ({
  user,
  userIndex,
  openStory,
}) => {
  return (
    <View key={user.stories[0].userId}>
      <LinearGradient
        colors={["#FE9F2F", "#FE338F", "#A726E6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >
        <Pressable
          style={styles.storyButton}
          onPress={() => openStory(userIndex)}
        >
          <Image
            source={{
              uri: `https://picsum.photos/200?random=${Math.floor(
                Math.random() * (1 - 1000 + 1) + 1
              )}`,
            }}
            style={styles.image}
          />
        </Pressable>
      </LinearGradient>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{user.user}</Text>
      </View>
    </View>
  );
};
