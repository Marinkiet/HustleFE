import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,useColorScheme } from 'react-native';
import Navigation from './navigation';
import { store } from './store';
import { Provider } from 'react';
import Tabs from './components/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const colorScheme = useColorScheme();

  return (
  //   <>
  //    <Provider store={store}>
  // <Navigation></Navigation>

  //   </Provider>
  //   </>
<NavigationContainer>
  {/* <Tabs/> */}
</NavigationContainer>
  

  );
}
