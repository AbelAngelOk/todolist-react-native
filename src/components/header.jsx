import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const options = ["Pomodoro","Short Break", "Long Break"];

export default function Header ({ currentTime, setCurrentTime, setTime }) {

    function heandlePress(index) {
        // if aninado para agregar el tiempo en minutos que debe esperar segun la opcion
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index); 
        setTime(newTime * 60 ); // setea el tiempo en segundos
    }

    return (
        <View style={styles.header}>
            {options.map( (item, index) => { return (
                <TouchableOpacity 
                    key={index}
                    onPress={ () => heandlePress(index) }
                    // agrega dos estilos
                    style={[
                        styles.itemStyle,
                        // si la opcion index es distinta al currentTime es porque no es la seleccionada asi que su fondo sera transparente.
                        currentTime !== index && { borderColor:"transparent"}
                    ]}
                    >
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
                )})}
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        width:"30%",
        borderWidth: 3,
        padding: 5,
        borderRadius: 15,
        borderColor: "#F2F2F2",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    text: {
        fontWeight: "700",
    }
});