import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform,View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';



const Stack = createNativeStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Home'} component={Home} />

            </Stack.Navigator>
            {(Platform.OS == 'ios') ?
                <View style={{ height: 20 }} />
                : null}
        </NavigationContainer>
    )
};

export default App