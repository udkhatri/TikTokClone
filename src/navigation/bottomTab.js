import React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import TikTok from '../assets/Images/plus-icon.png';
const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = ( ) => {
    return(
        <Tab.Navigator tabBarOptions={{
            tabStyle:{
                backgroundColor: '#000',
                
            },
            activeTintColor: '#fff',
            //inactiveTintColor: '#fff'
            
        }}>
            <Tab.Screen 
                name={'Home'}
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" color={color} size={size}  />
                     ),
                }}
                 />
            <Tab.Screen 
                name={'Search'} 
                component={Home}  
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Feather name="search" color={color} size={size}  />
                     ),
                }}
                />
            <Tab.Screen 
                name={'Upload'} 
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Image 
                    source={TikTok}
                     style={{height: 35, resizeMode: 'contain'}}
                      />
                     ),
                     tabBarLabel: () => null,
                }}
                  />
            <Tab.Screen 
                name={'Inbox'} 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name={"message-minus-outline"} color={color} size={size}  />
                     ),
                }} />
            <Tab.Screen 
                name={'Profile'} 
                component={Home}  
                options={{
                    tabBarIcon: ({ color, size }) => (
                    <Feather name="user" color={color} size={size}  />
                     ),
                }}
                />
        </Tab.Navigator>
    );
}

export default HomeBottomTabNavigator