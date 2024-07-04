import { Inter_200ExtraLight, Inter_900Black } from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function Home() {

    let [fontLoaded] = useFonts({
        inter_font_900: Inter_900Black,
        inter_font: Inter_200ExtraLight
    })
    if (!fontLoaded) {
        return null
    }
    return (
        <ImageBackground source={require("../assets/app/light-bg.png")} style={{ flex: 1 }}>
            <TopSection />
        </ImageBackground>
    )
}

function TopSection() {
    return (
        <View style={style.topContainer}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "medium", color: "#ffff", fontFamily: "inter_font", fontSize: 12 }}>"The ipsum, dolor sit amet consectetur adipisicing elit. Sunt libero saepe minima enim at dolorum officiis.
                    sit amet consectetur adipisicin "
                </Text>
                <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>- Ada Lafas</Text>
            </View>
            <View>
                <Image source={require("../assets/app/refresh.png")} style={{ width: 20, height: 20 }} />
            </View>
        </View>
    )
}


function BottomSection() {

    return (
        <View>

        </View>
    )
}

const style = StyleSheet.create({
    topContainer: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 28,
        paddingVertical: 30,
        marginTop: 16,
        gap: 5
    }
})