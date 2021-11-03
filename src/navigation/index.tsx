import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FunctionComponent, memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AboutApplication from '../screen/aboutApplication';
import QuotesScreen from '../screen/quotes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigation: FunctionComponent = function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="MainStack">
      <Tab.Screen name={'AboutApp'} component={AboutApplication} />
      <Tab.Screen name={'QuotesScreen'} component={QuotesScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation: FunctionComponent = function AppNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="MainScreen" component={BottomTabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
