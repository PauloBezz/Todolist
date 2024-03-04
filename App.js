import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetProvider from './src/contexts/createTask';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator()

import { Home } from './src/screens/Home';
import { Personal } from './src/screens/Personal';
import { Professional } from './src/screens/Professional';
import { Academic } from './src/screens/Academic';
import { Social } from './src/screens/Social';
import { ChooseCategory } from './src/components/ChooseCategory';
import { CreateTask } from './src/components/CreateTask';
import { First } from './src/screens/First';
import { Second } from './src/screens/Second';
import { Three } from './src/screens/Three';

export default function App() {

  let initialRouteName ="First" //Durante o consumo, deixar essa variável dinâmica. Alterar o nome para Home caso o banco já esteja criado

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetProvider>
        <NavigationContainer>
        <SafeAreaView style={{flex:1}}>
          <Stack.Navigator initialRouteName= {initialRouteName} screenOptions={{ headerShown: false }}>

              <Stack.Screen name='First' component={First} />
              <Stack.Screen name='Second' component={Second} />
              <Stack.Screen name='Three' component={Three} />
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Personal' component={Personal} />
              <Stack.Screen name='Professional' component={Professional} />
              <Stack.Screen name='Academic' component={Academic} />
              <Stack.Screen name='Social' component={Social} />

          </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>

        <ChooseCategory />
        <CreateTask />

      </BottomSheetProvider>
    </GestureHandlerRootView>

  );
}