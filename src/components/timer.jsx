import { View, Text, StyleSheet } from "react-native";

export default function Timer ({ time }) {

    // convierte los segundos en minutos ( .floor ), los hace string y le dice que siempre tenga dos digitos ( .padStart ) ...
    // ... si sobran segundos ( time % 60 ) los convierte a string y les agrega dos digitos siempre ... 
    // ... a estos dos calculos los separa con un dos puntos ( : )
    const formatedTime = `${Math.floor(time / 60).toString().padStart(2, "0" )}:${(time % 60).toString().padStart(2, "0" )}`

    return (
        <View style={styles.container}>
            <Text style={styles.text}> {formatedTime} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        width: "90%",
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 15,
        justifyContent: "center",
        alignItems:"center"
    },
    text: {
        textAlign:"center",
        fontSize: 80,
        fontWeight:"bold",
        color:"#333333"
    }
})