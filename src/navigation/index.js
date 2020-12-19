import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import React from 'react';
import HomeBottomTabNavigator from './bottomTab'
import CreatePost from '../screens/CreatePost/index'

const Stack = createStackNavigator();

const RootNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }
                
            }>
                <Stack.Screen name= 'home' component={HomeBottomTabNavigator} />
                <Stack.Screen 
                options={{
                    headerShown:true,
                    title: 'Post',
                   // headerTransparent: true
                }}
                    name= 'CreatePost' 
                    component={CreatePost}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
};

export default RootNavigation;