import { RouteProp } from "@react-navigation/native";
import { RootStackParamList, Story } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";

type StoryScreenHookProps = {
  route: RouteProp<RootStackParamList, "Story">;
  navigation: StackNavigationProp<RootStackParamList, "Story">;
};

export const useStoryScreen = ({ route, navigation }: StoryScreenHookProps) => {
  const { stories, currentStoryIndex } = route.params;
  const [currentIndex, setCurrentIndex] = useState(currentStoryIndex);
  const [liked, setLiked] = useState(false);

  const [userStories, setUserStories] = useState<Story[]>([]);
  const [progresses, setProgresses] = useState<number[] | null>(null);

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setProgresses((prevProgresses) => {
        //@ts-ignore
        const updatedProgresses = [...prevProgresses];
        updatedProgresses[currentIndex] = 0;
        updatedProgresses[currentIndex - 1] = 0;
        return updatedProgresses;
      });
    } else {
      navigation.navigate("Home");
    }
  };

  const goForward = () => {
    if (currentIndex < stories.length - 1) {
      if (stories[currentIndex].user === stories[currentIndex + 1].user) {
        setProgresses((prevProgresses) => {
          let updatedProgresses = [...prevProgresses];
          updatedProgresses[currentIndex] = 1;
          return updatedProgresses;
        });
        setCurrentIndex(currentIndex + 1);
      } else {
        navigation.push("Story", {
          stories,
          currentStoryIndex: currentIndex + 1,
        });
      }
    } else {
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    const currentStory = stories[currentIndex];
    const currentUser = currentStory.user;
    const userStories = stories.filter((story) => story.user === currentUser);
    const userStoryIndex = userStories.findIndex(
      (story) => story.id === currentStory.id
    );

    setUserStories(userStories);
    if (progresses === null) {
      setProgresses(userStories.map(() => 0));
    }

    const timer = setInterval(() => {
      setProgresses((prevProgresses) => {
        const updatedProgresses = [...prevProgresses];
        const newProgress = updatedProgresses[userStoryIndex] + 0.01;

        if (!isNaN(newProgress)) {
          updatedProgresses[userStoryIndex] = newProgress;

          if (updatedProgresses[userStoryIndex] >= 1) {
            clearInterval(timer);
          }
        }

        return updatedProgresses;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [currentIndex, stories]);

  return {
    userStories,
    progresses,
    stories,
    currentIndex,
    goBack,
    goForward,
    setLiked,
    liked,
  };
};
