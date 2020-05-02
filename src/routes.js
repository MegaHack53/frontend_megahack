import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Learning from './pages/Learning'
import { Header } from 'react-native/Libraries/NewAppScreen'

export default function Routes() {
    return (
        <NavigationContainer >

            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name='Learning' component={Learning} />
            </AppStack.Navigator>

        </NavigationContainer>
        
    )
}