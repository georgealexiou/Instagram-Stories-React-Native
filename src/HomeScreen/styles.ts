import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    padding: 10,
    color: "white",
  },
  name: {
    fontSize: 12,
    color: "white",
  },
  normal: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  bold: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  storiesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  storyButtonText: {
    fontWeight: "bold",
  },
  scrollView: { paddingVertical: 20 },
  generatedTextContainer: { flexDirection: "row" },
  buttonContainer: { paddingTop: 100, alignItems: "center" },
});
