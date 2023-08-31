import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/header';
import Timer from './src/components/timer';

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"];

export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");

  // variable de nombre del boton 
  const [isActive, setIsActive] = useState(false);

  // maneja el nombre del boton 
  function handleStartStop () {
    setIsActive(!isActive);
  }

  // logica del contador
  useEffect( () => {
    let interval = null;
    if (isActive) {
      // correr intervalo
      interval = setInterval( () => {
        setTime(time - 1)
      }, 1000) 
    } else {
      //limpiar intervalo 
      clearInterval(interval)
    }

    if (time === 0) {
      setIsActive (false);
      setIsWorking( (prev) => !prev );
      setTime(isWorking ? 300: 1500 )
    }

    return () => clearInterval(interval);
  }, [isActive, time]);


  return (
    <View style={[
      styles.container, 
      // toma el numero de color del currentTime. El currentTime se toma desde el header al guardar el index de una opcion al seleccionarla.
      { backgroundColor:colors[currentTime] }
      ]}>
      <Text style={styles.text}>Pomodoro</Text>
      <Header 
        currentTime={currentTime} // identificar que opcion tiene el border
        setCurrentTime={setCurrentTime} // actualizar el current time al seleccionar opcion
        setTime={setTime} // actualiza el tiempo de espera en segundos dado una opcion
      />
      <Timer time={time}></Timer>
      <TouchableOpacity onPress={handleStartStop} style={styles.button}>
        <Text
        style={{color:"white", fontWeight: "bold"}}>
          {isActive ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaaa',
    alignItems: 'center',
    gap: 15
  },
  button: {
    width: "90%",
    backgroundColor: "#333333",
    alignItems:"center",
    padding:15,
    marginTop:15,
    borderRadius: 15,
  },
  text: {
    marginTop: 60,
    fontSize:30,
    fontWeight:"bold"
  }
});