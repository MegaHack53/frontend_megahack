import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  navBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
