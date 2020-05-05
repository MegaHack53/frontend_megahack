import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  headerBackground: {
    position: "absolute",
    height: "35%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.4,
    borderBottomEndRadius: 400,
    borderBottomStartRadius: 400,
    transform: [{ scaleX: 2 }],
    backgroundColor: "#012940",
  },

  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header: {
    top: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  headerNameText: {
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#012940",
  },

  headerEmailText: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#012940",
  },

  headerPicture: {
    top: "40%",
    alignSelf: "center",
  },

  headerUserImg: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },

  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,

    borderStyle: "solid",
    borderColor: "#568EA633",
    borderBottomWidth: 1,
  },

  userOptions: {
    top: "15%",
  },

  optionsIconFrame: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#305F7233",

    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },

  optionsIcon: {
    height: 35,
    width: 35,
  },

  optionsText: {
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: 24,
    color: "#012940",
  },

  navBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
