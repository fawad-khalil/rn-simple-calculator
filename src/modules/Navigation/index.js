import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Home';
import HistoryScreen from '../History';
import { HOME, HISTORY } from './routes';
import { COLORS } from '../../constants';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} component={HomeScreen} options={{ headerShown: false }} />

        <Stack.Screen
          name={HISTORY}
          component={HistoryScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.THEME_BACKGROUND,
            },
            headerTintColor: COLORS.WHITE,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
