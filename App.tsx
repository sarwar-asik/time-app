import { Inter_200ExtraLight, Inter_900Black, useFonts, } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';

export default function App() {
  let [fontLoaded] = useFonts({
    inter_font_900: Inter_900Black,
    inter_font: Inter_200ExtraLight
  })
  if (!fontLoaded) {
    return null
  }
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
