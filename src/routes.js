import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Savings from './pages/Home'
import Learning from './pages/Learning'
import Community from './pages/Community'
import Wallet from './pages/Wallet'
import User from './pages/User'
import Challenges from './pages/User/Challenges'
import Preferences from './pages/User/Preferences'
import Quiz from './pages/User/Quiz'
import Ranking from './pages/User/Ranking'
import UserData from './pages/User/UserData'

import { Header } from 'react-native/Libraries/NewAppScreen'

export default function Routes() {
    return (
        <NavigationContainer >

            <AppStack.Navigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name='Savings' component={Savings} />
                <AppStack.Screen name='Learning' component={Learning} />
                <AppStack.Screen name='Community' component={Community} />
                <AppStack.Screen name='User' component={User} />
                <AppStack.Screen name='Challenges' component={Challenges} />
                <AppStack.Screen name='Preferences' component={Preferences} />
                <AppStack.Screen name='Quiz' component={Quiz} />
                <AppStack.Screen name='Ranking' component={Ranking} />
                <AppStack.Screen name='UserData' component={UserData} />
                <AppStack.Screen name='Wallet' component={Wallet} />
            </AppStack.Navigator>

        </NavigationContainer>
        
    )
}