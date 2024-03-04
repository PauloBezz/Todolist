import { StyleSheet, View, Text, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useMemo, useRef, useContext, useCallback, useEffect, useState } from 'react';
import BottomSheetProvider, { BottomSheetContext } from './src/contexts/createTask';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import { Home } from './src/screens/Home';
import { Personal } from './src/screens/Personal';
import { Professional } from './src/screens/Professional';
import { Academic } from './src/screens/Academic';
import { Social } from './src/screens/Social';
import { ChooseCategory } from './src/components/ChooseCategory';
import { CreateTask } from './src/components/CreateTask';
import { Sidebar } from './src/components/Sidebar';

export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            {/* <View style={styles.container}> */}
              {/* <Home /> */}

              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Personal' component={Personal} />
              <Stack.Screen name='Professional' component={Professional} />
              <Stack.Screen name='Academic' component={Academic} />
              <Stack.Screen name='Social' component={Social} />
            {/* </View> */}
          </Stack.Navigator>



          {/* <View style={styles.container}> */}
          {/* <Home /> */}
          {/* <Personal /> */}
          {/* <Professional /> */}
          {/* <Academic /> */}
          {/* <Social /> */}
          {/* </View> */}
        </NavigationContainer>

        <ChooseCategory />
        <CreateTask />

      </BottomSheetProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 90,
    paddingHorizontal: 35,
    gap: 40
  },
});
