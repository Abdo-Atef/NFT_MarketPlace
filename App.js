import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import NFT_Details from './screens/NFT_Details';
import { COLORS } from './constants/theme';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [fontLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf')
  })
  
  if (!fontLoaded) return null;

  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor={COLORS.bg} animated={true}/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='NFT_Details' component={NFT_Details} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
