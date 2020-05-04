import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 40,
    backgroundColor: '#FFF'
  },

  cardsContainer: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 40
  },


  navBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    //   alignSelf: 'flex-end',
    //   justifyContent: 'flex-end',
    //   alignItems: 'flex-end',
    //   alignContent: 'flex-end'
  }

})