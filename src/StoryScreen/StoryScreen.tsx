import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { styles } from "./styles";
import { useStoryScreen } from "./useStoryScreen";
import { ProgressBar } from "./ProgressBar/ProgressBar";

type StoryScreenProps = {
  route: RouteProp<RootStackParamList, "Story">;
  navigation: StackNavigationProp<RootStackParamList, "Story">;
};

export const StoryScreen: React.FC<StoryScreenProps> = ({
  route,
  navigation,
}) => {
  const {
    userStories,
    progresses,
    stories,
    currentIndex,
    goBack,
    goForward,
    setLiked,
    liked,
  } = useStoryScreen({ route, navigation });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.storyContainer}>
        <ProgressBar userStories={userStories} progresses={progresses} />
        <View style={styles.header}>
          <Text style={styles.userName}>{stories[currentIndex].user}</Text>
          <Pressable
            style={styles.closeButton}
            onPress={() => navigation.navigate("Home")}
          >
            <MaterialIcons name="close" size={25} color="#FFF" />
          </Pressable>
        </View>
      </View>
      <Image
        source={{ uri: stories[currentIndex].content }}
        style={styles.image}
      />
      <Pressable style={styles.backButton} onPress={goBack} />
      <Pressable style={styles.forwardButton} onPress={goForward} />
      <View style={styles.bottomTab}>
        <View style={styles.messageBox}>
          <TextInput style={styles.textInput} defaultValue="Send Message" />
        </View>
        <Pressable onPress={() => setLiked(!liked)}>
          {liked ? (
            <FontAwesome name="heart" size={24} color="white" />
          ) : (
            <FontAwesome name="heart-o" size={24} color="white" />
          )}
        </Pressable>
        <FontAwesome5 name="paper-plane" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
};
