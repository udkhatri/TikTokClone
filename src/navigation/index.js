import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeBottomTabNavigator from './bottomTab'
const Stack = createStackNavigator();

const RootNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }
                
            }>
                <Stack.Screen name= 'home' component={HomeBottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
};

export default RootNavigation;