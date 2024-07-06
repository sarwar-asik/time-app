import { Inter_200ExtraLight, Inter_900Black, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'
import { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Home() {

    let [fontLoaded] = useFonts({
        inter_font_900: Inter_900Black,
        inter_font: Inter_200ExtraLight,
        Inter_500Medium: Inter_500Medium
    })
    if (!fontLoaded) {
        return null
    }

    const [show, setShow] = useState(false)
    return (
        <ImageBackground source={require("../assets/app/light-bg.png")} style={{ flex: 1, justifyContent: "space-between" }}>
            {/* {!show && < TopSection />} */}
            < TopSection />

            <BottomSection show={show} setShow={setShow} ></BottomSection>
            {show && <DetailsSection />}

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


function BottomSection({ show, setShow }: { show: boolean, setShow: any }) {
    const getCurrentTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        // const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        // const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${formattedHours}:${formattedMinutes}`;
    };
    return (
        <View style={style.bottomContainer}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginBottom: 5, paddingHorizontal: 10 }}>
                <Image source={require("../assets/app/sun.png")} />
                <Text style={{ fontSize: 16, color: "white", fontFamily: "Inter_700Bold", letterSpacing: 1, textTransform: "uppercase" }}>
                    Good Morning
                </Text>
            </View>


            <View style={{ paddingHorizontal: 18 }}>
                <Text>
                    <Text style={{ color: "white", fontFamily: "Inter_700Bold", fontWeight: "bold", fontSize: 64 }}>{getCurrentTime()}</Text>
                    <Text style={
                        {
                            color: "white", fontSize: 12, fontFamily: "Inter_500Medium", fontWeight: "500",
                        }
                    } > BST</Text>
                </Text>
                <Text style={{ textTransform: "uppercase", color: "white", fontFamily: "Inter_500Medium", fontWeight: "500", letterSpacing: 1, marginTop: 10, }}>IN Dhaka, BD</Text>

                <TouchableOpacity onPress={() => setShow((itm: boolean) => !itm)} style={{ marginTop: 20, flexDirection: "row", alignItems: "center", backgroundColor: "white", width: 100, borderRadius: 15, paddingHorizontal: 10, paddingVertical: 3, gap: 5 }}>
                    <Text style={{ color: "black", fontSize: 16, fontFamily: "Inter_500Medium", fontWeight: "700", textTransform: "uppercase", letterSpacing: 2 }}>
                        {show ? "Less" : "More"}
                    </Text>
                    <Image source={show ? require("../assets/app/arrow-up.png") : require("../assets/app/arrow-down.png")} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

function DetailsSection() {

    type IDetails = { label: string, value: string | number }
    const detailsData: IDetails[] = [
        {
            label: "Current TimeZone",
            value: "Europe/London"
        },
        {
            label: "Day Light Year",
            value: 295
        },
        {
            label: "Day Light Week",
            value: 5
        },
        {
            label: "Week Number",
            value: 42
        }

    ]
    return (<View style={{ flex: 1, paddingHorizontal: 18, backgroundColor: "#C7C8CC", paddingVertical: 30 }}>

        {
            detailsData?.map((item: IDetails) => (
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }} key={item.value}>
                    <Text style={{ fontWeight: "bold", fontSize: 16, textTransform: "uppercase", color: "#747264" }}>{item.label}</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.value}</Text>
                </View>
            ))
        }

    </View>)
}
const style = StyleSheet.create({
    topContainer: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        // alignItems: "flex-start",
        paddingHorizontal: 28,
        paddingVertical: 30,
        marginTop: 16,
        gap: 5
    },
    bottomContainer: {
        flex: 1,
        paddingHorizontal: 10,
        // alignItems: "baseline",
        // backgroundColor: "red",
        justifyContent: "flex-end",
        // paddingVertical: 26,
        paddingBottom: 30

    }
})