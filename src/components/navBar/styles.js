import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    navBarContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    
    
    navBarItems: {
      bottom: 10,
      width: 90,
      height: 90,
      borderRadius: 30/2,
      
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    navBarSeparator: {
      borderWidth: 0.5,
        borderColor:'#DFDEE6',
        margin:10,
    },
    
    navBarSelected: {
      bottom: 30,
      width: 90,
      height: 90,
      borderRadius: 90/2,
      backgroundColor: '#305F72',
      
      alignItems: 'center',
      justifyContent: 'center'
    },

    
    navBarLabel: {
        fontFamily: 'Roboto',
        fontSize: 12,
        textAlign: 'center',
        color: '#012940',
    },

    navBarIcons: {
      height: 50,
      width: 50
    },
    
    navBarLabelSelected: {
        fontFamily: 'Roboto',
        fontSize: 12,
        textAlign: 'center',
        color: '#FFF',
    },
})