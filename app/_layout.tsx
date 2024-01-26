import React, {useEffect} from 'react';
import {SplashScreen, Stack} from 'expo-router';
import {useFonts} from 'expo-font';
import {Provider} from 'react-redux';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import {store} from '../src/redux/store';

const RootLayout = () => {
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter-Medium.ttf'),
    'Plus Jakarta Sans': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;


  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Stack>
            <Stack.Screen
              name='(app)/index'
              options={{
                headerTitle: 'Busqueda de Credito',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='credits/index'
              options={{
                headerTitle: 'Creditos',
                headerShown: false,
              }}
            />
          </Stack>
        </ApplicationProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
