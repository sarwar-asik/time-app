import { Text, View } from "react-native"

export default function DetailsComponent() {

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