import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type Juletradisjon = {
    id: number;
    title: string;
    description: string;
    image: any;
};

const juletradisjoner: Juletradisjon[] = [
    {
        id: 1,
        title: "Pinnekjøtt på julaften",
        description: "Den beste julematen i Norge.",
        image: require("../../assets/images/lam.jpg"),
    },

    {
        id: 2,
        title: "Juletre",
        description: "Pyntet med lys og kuler i stuen.",
        image: require("../../assets/images/tre.jpg"),
    },
    {
        id: 3,
        title: "Kalkun",
        description: "Nesten like godt som pinnekjøtt.",
        image: require("../../assets/images/kalkun.jpg"),
    },
    {
        id: 4,
        title: "Julenissen",
        description: "Er det noen snille barn her?.",
        image: require("../../assets/images/nisse.jpg"),
    },
];

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Norske Juletradisjoner</Text>

            <FlatList
                data={juletradisjoner}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                        <Image source={item.image} style={styles.image} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#329909ff",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        color: "#b91c1c",
        textShadowColor: "white",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    card: {
        backgroundColor: "#990505e5",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 4,
        color: "#fff",
    },
    description: {
        fontSize: 14,
        color: "#f0f0f0",
        marginBottom: 8,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginTop: 8,
    },
});
