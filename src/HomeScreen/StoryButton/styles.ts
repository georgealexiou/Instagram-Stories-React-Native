import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    color: "white",
  },

  storyButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    margin: 2,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "transparent",
  },
  gradientBorder: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: 86,
    height: 86,
    borderRadius: 43,
    padding: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
  },
  nameContainer: { width: "100%", alignItems: "center", paddingTop: 5 },
});
