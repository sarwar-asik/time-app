import { ImageBackground, Text, View } from 'react-native'

export default function Home() {
    return (
        <ImageBackground source={require("../assets/app/light-bg.png")} style={{ flex: 1 }}>
            <Text>Home</Text>
        </ImageBackground>
    )
}
