import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    justifyContent: "space-between",
    paddingBottom: "15%",
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  headerText: {
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#012940",
  },

  incomeCollapse: {
    width: 350,
    height: 350,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#219653",

    alignSelf: "center",
  },

  expensesCollapse: {
    width: 350,
    height: 350,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EB5757",

    alignSelf: "center",
    marginTop: 20,
  },

  inputs: {
    paddingHorizontal: 10,
  },

  textInput: {
    height: 50,
    borderColor: "#AAA",
    borderBottomWidth: 1,
    marginTop: 10,
    fontSize: 16,
  },

  inputButtonFrame: {
    marginTop: 15,
    alignItems: "flex-end",
  },

  inputButton: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 12,
  },

  inputButtonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#012940",
    fontWeight: "300",
    padding: 10,

    alignSelf: "center",
  },

  incomeContainer: {
    width: 350,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#219653",

    alignSelf: "center",
    justifyContent: "center",
  },

  expensesContainer: {
    width: 350,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#EB5757",

    alignSelf: "center",
    justifyContent: "center",
  },

  walletBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  },

  walletText: {
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#FFF",
    fontWeight: "300",
  },

  category: {
    alignItems: "center",
  },

  categoryCharts: {
    height: 250,
    justifyContent: "center",
    backgroundColor: "#DFDEE633",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 1,
  },

  chartsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  chartTitle: {
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#012940",
    fontWeight: "300",
    padding: 10,

    alignSelf: "center",
  },

  chartText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#012940",
    fontWeight: "300",

    alignSelf: "center",
    padding: 10,
  },

  chartLabel: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#012940",
    fontWeight: "300",

    alignSelf: "center",
  },

  navBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
