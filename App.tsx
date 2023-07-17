import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SignIn } from './src/Screens/SignIn';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { ANDROID_CLIENT_ID } from '@env';
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  console.log(ANDROID_CLIENT_ID);
  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SignIn />
    </ThemeProvider>
  );
}

