import { useNavigation } from "@react-navigation/native";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import { Story } from "../../App";
import { useState } from "react";

const config: Config = {
  dictionaries: [names],
};

interface GroupedStories {
  [key: number]: {
    user: any;
    stories: any[];
  };
}

export const useHomeScreen = () => {
  const navigation = useNavigation();

  const generateRandomUsersAndStories = () => {
    const numberOfUsers = Math.floor(Math.random() * 6) + 1;
    const stories: Story[] = [];
    for (let i = 0; i < numberOfUsers; i++) {
      const user = { id: i + 1, name: uniqueNamesGenerator(config) };
      const numberOfStoriesPerUser = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numberOfStoriesPerUser; j++) {
        stories.push({
          id: stories.length + 1,
          content: `https://picsum.photos/2000?random=${Math.floor(
            Math.random() * (1 - 1000 + 1) + 1
          )}`,
          user: user.name,
          userId: user.id,
        });
      }
    }
    return stories;
  };
  const [stories, setStories] = useState<Story[]>(
    generateRandomUsersAndStories()
  );

  const openStory = (userIndex: number) => {
    const userStories = users[userIndex].stories;
    const firstUserStoryIndex = stories.findIndex(
      (story) => story.id === userStories[0].id
    );
    //@ts-ignore
    navigation.navigate("Story", {
      stories: stories,
      currentStoryIndex: firstUserStoryIndex,
    }); // Use a type assertion to fix the error
  };

  const groupedStories = stories.reduce((acc: GroupedStories, story) => {
    if (!acc[story.userId]) {
      acc[story.userId] = {
        user: story.user,
        stories: [],
      };
    }
    acc[story.userId].stories.push(story);
    return acc;
  }, {} as GroupedStories);

  const users = Object.values(groupedStories);

  return {
    users,
    openStory,
    stories,
    setStories,
    generateRandomUsersAndStories,
  };
};
