import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ROUTES} from '../constants/routes';
import CardsView from '../screens/cards-screen/view';

let Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={CardsView} name={ROUTES.CARDS_VIEW} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
