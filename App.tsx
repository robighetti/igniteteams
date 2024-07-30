import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loader } from '@components/Loader'

import theme from './src/theme'

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    { fontsLoaded ?  <Routes /> : <Loader  /> }
    </ThemeProvider>
  );
}
