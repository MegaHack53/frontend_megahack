import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#CFD8DC",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#012940",
  },

  tabsBtn: {
    padding: 10,
    marginTop: 40,
    marginBottom: 40,
  },

  tabsBtnText: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#012940",
  },

  tabsBtnTextSelected: {
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#FFF",
  },

  cardsList: {
    height: "60%",
  },

  card: {
    width: 390,
    marginRight: 15,
    height: "100%",
    backgroundColor: "#FFF",
    padding: 24,
    borderRadius: 8,

    justifyContent: "space-between",
  },

  cardHeader: {
    top: "10%",
  },

  cardAuthor: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 16,

    textAlign: "center",
    textTransform: "uppercase",

    color: "#012940",
  },

  cardReadTime: {
    margin: 5,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",

    color: "#697983",
  },

  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 41,
    letterSpacing: -0.24,

    textAlign: "center",

    color: "#012940",
  },

  cardDescription: {
    padding: 20,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.5,

    textAlign: "justify",

    color: "#697983",
  },

  accessCard: {
    bottom: "10%",
  },

  accessCardText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 18,
    lineHeight: 20,

    textAlign: "center",
    textTransform: "uppercase",

    padding: 10,
    borderStyle: "solid",
    borderColor: "#568EA6",
    borderWidth: 1,
    borderRadius: 5,
    color: "#012940",
  },

  carIcon: {
    // display: 'none',
    marginTop: 20,
    width: 100,
    height: 100,
  },

  navBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
