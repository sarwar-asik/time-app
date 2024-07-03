import { Inter_200ExtraLight, Inter_900Black, useFonts, } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
      <Text>Open up the Clock App!</Text>
      <View>
        <Text style={{ fontFamily: "inter_font", fontSize: 30 }}>This is inter_font Font</Text>
        <Text style={{ fontFamily: "inter_font_900", fontSize: 30 }}>This is inter_font_900 Font</Text>
      </View>
      <StatusBar style="auto" />
    </View>
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
