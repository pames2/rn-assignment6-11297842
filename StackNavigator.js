import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import { View, Image } from 'react-native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={HomeScreen}
          options={({ navigation }) => ({

            headerLeft: () => (
              <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="menu-outline"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}

              />
              <Image source={require('./assets/logo.png')} style={{ width: 90, height: 40, marginLeft: 96 }}/>
              
              </View> 
              
            ),

            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>


              <Ionicons 
              name='search-outline'
              size={24}
              color='black'
              style={{ marginRight: 15 }}
              />
              <Ionicons
                name="bag-handle-outline"
                size={24}
                color="black"
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('Cart')}
              />

              </View>
              
              
              
            ),
          })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;