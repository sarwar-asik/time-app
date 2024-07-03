import { Inter_200ExtraLight, Inter_900Black, useFonts, } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [fontLoaded] = useFonts({
    inter_font_900: Inter_900Black,
    inter_font: Inter_200ExtraLight
  })
  if (!fontLoaded) {
    return null
  }
  return (
    <ImageBackground source={require("./assets/app/light-bg.png")} style={{ flex: 1 }}>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
