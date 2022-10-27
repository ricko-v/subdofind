// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import SplashScreen from './src/pages/SplashScreen';
import Response from './src/context/Response';
import Result from './src/pages/Result';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Response>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </Response>
  );
}

export default App;