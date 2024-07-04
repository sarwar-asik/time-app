import { Inter_200ExtraLight, Inter_900Black, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
            <BottomSection></BottomSection>
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
        <View style={style.bottomContainer}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginBottom: 5, paddingHorizontal: 10 }}>
                <Image source={require("../assets/app/sun.png")} />
                <Text style={{ fontSize: 16, color: "white", fontFamily: "Inter_700Bold", letterSpacing: 1, textTransform: "uppercase" }}>
                    Good Morning
                </Text>
            </View>
            <Text>
                <Text style={{ color: "white", fontFamily: "Inter_700Bold", fontWeight: "bold", fontSize: 64 }}>11:37</Text>
                <Text style={
                    {
                        color: "white", fontSize: 12, fontFamily: "Inter_500Medium", fontWeight: "500",
                    }
                } > BST</Text>
            </Text>

            <Text style={{ textTransform: "uppercase", color: "white", fontFamily: "Inter_500Medium", fontWeight: "500", letterSpacing: 1, marginTop: 10, }}>IN London, UK</Text>

            <TouchableOpacity onPress={() => { }} style={{ marginTop: 20, flexDirection: "row", alignItems: "center", backgroundColor: "white", width: 100, borderRadius: 15, paddingHorizontal: 10, paddingVertical: 3, gap: 5 }}>
                <Text style={{ color: "black", fontSize: 16, fontFamily: "Inter_500Medium", fontWeight: "700", textTransform: "uppercase", letterSpacing: 2 }}>
                    More
                </Text>
                <Image source={require("../assets/app/arrow-down.png")} />
            </TouchableOpacity>
        </View >
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
    },
    bottomContainer: {
        flex: 1,
        paddingHorizontal: 18,
    }
})