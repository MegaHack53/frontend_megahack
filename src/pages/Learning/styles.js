import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#CFD8DC'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        fontFamily: 'Roboto',
        fontSize: 32,
        color: '#012940',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    tabsBtn: {
        padding: 10,
        marginTop: 14,
        marginBottom: 24
    },

    tabsBtnText: {
        fontFamily: 'Roboto',
        fontSize: 24,
        color: '#012940'
    },

    cardsList: {
        height: '70%',
    },

    card: {
        width: '37%',
        height: '100%',
        backgroundColor: '#FFF',        
        padding: 24,
        borderRadius: 8,
        justifyContent: 'space-between'
    },

    cardHeader: {
        top: '5%',
    },

    cardAuthor: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 16,
        
        textAlign: 'center',
        textTransform: 'uppercase',
        
        color: '#012940',
    },

    cardReadTime: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',      

        color: '#697983',
    },

    cardContent: {
        top: '5%',
    },
    
    cardTitle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 32,
        lineHeight: 35,
        letterSpacing: -0.24,
        
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#012940',
    },


    cardDescription: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 16,
        
        textAlign: 'center',
        textTransform: 'uppercase',
        
        color: '#012940',
    },

    accessCard: {
        top: '5%',
        bottom: '5%',
    },

    accessCardText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 16,
        
        textAlign: 'center',
        textTransform: 'uppercase',
        
        color: '#012940',
    },


})