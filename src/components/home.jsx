import * as React from 'react';
import { StyleSheet, View, TextInput, Image} from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

 const Home = ({ navigation }) => {

  return (
    <View style={styles.index}> 
      <View style={styles.secciones}>
        <Entypo name="list" size={40} color="#0F172A"/>
        <TouchableOpacity 
        onPress={ () => { navigation.navigate('Config') }}>
         <Ionicons name="settings-sharp" size={35} color="#0F172A"/>
        </TouchableOpacity>
      </View>
      <Text style={styles.titular}> ToDo List </Text>
      <Text style={styles.tables}> Simple | Completo | Prioridades </Text>
      <View style={styles.lstask}>
        { task2() }
        { task3() }
        { task4() }
        { task6() }
        { task1() }
        { task5() }
        { task() }

      </View>
    </View>
  );
}

export default Home

const task = () => {

    const [checked, setChecked] = React.useState(false);
  
    return(
        <View style={styles.task}>
          <TextInput style={styles.input} mode='outlined'> </TextInput>
          <Ionicons name="checkmark-circle-outline" size={20} color="#1E293B"/>
          <Entypo name="back-in-time" size={20} color="#1E293B"/> 
          <Ionicons name="close" size={20} color="#1E293B"/>
        </View>
    )
  }
  
  const task1 = () => {
  
    const [checked, setChecked] = React.useState(false);
  
    return(
        <View style={styles.task}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#1E293B"/>
          <TextInput style={styles.input} mode='outlined'> </TextInput>
          <Entypo name="back-in-time" size={20} color="#1E293B"/> 
          <Ionicons name="close" size={20} color="#1E293B"/>
        </View>
    )
  }
  
  const task2 = () => {
  
    const [checked, setChecked] = React.useState(false);
  
    return(
        <View style={styles.task}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#1E293B"/>
          <TextInput style={styles.input2} mode='outlined'> </TextInput>
        </View>
    )
  }
  
  const task3 = () => {
  
    const [checked, setChecked] = React.useState(false);
  
    return(
        <View style={styles.task}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#1E293B"/>
          <TextInput style={styles.input} mode='outlined'> </TextInput>
          <Ionicons name="close" size={20} color="#1E293B"/>
        </View>
    )
  }
  
  const task4 = () => {
  
    const [checked, setChecked] = React.useState(false);
  
    return(
        <View style={styles.task}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#1E293B"/>
          <TextInput style={styles.input} mode='outlined'> </TextInput>
          <Entypo name="back-in-time" size={20} color="#1E293B"/> 
        </View>
    )
  }
  
  const task5 = () => {
  
    const [checked, setChecked] = React.useState(false);
  
    return(
        <View style={styles.task}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#1E293B"/>
          <TextInput style={styles.input} mode='outlined'> </TextInput>
          <Entypo name="back-in-time" size={20} color="#1E293B"/> 
          <Feather name="more-vertical" size={20} color="#1E293B"/> 
        </View>
    )
  }
  
  const task6 = () => {
  
    const [checked, setChecked] = React.useState(false);
  
    return(
        <View style={styles.task}>
          <Ionicons name="checkmark-circle-outline" size={20} color="#1E293B"/>
          <TextInput style={styles.input} mode='outlined'> </TextInput>
          <Feather name="edit-3" size={20} color="#1E293B"/> 
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    index: {
      flex: 1,
      backgroundColor: '#E2E8F0', // BlueGray200
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 20,
      paddingTop: 37
    },
    secciones: {
      flex: 0.11,
      flexDirection: 'row',
      width: '85%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:20
    },
    titular: {
      flex: 0.1,
      width: '90%',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40
    },
    tables: {
      flex: 0.05,
      width: '90%',
      textAlign: 'center',
      fontWeight: '400',
      fontSize: 16
    },
    lstask: {
      backgroundColor: '#E2E8F0', // BlueGray100
      gap: 8,
      paddingTop: 5,
      flex: 0.5
    },
    task: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 15,
      backgroundColor: '#F1F5F9',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    input: {
      fontSize: 12,
      fontWeight:"600",
      color:"#F1F5F9",
      backgroundColor: '#F8FAFC', // BlueGray100
      borderRadius: 15,
      width: "70%",
      paddingHorizontal: 10,
      paddingVertical: 1,
    },
    input2: {
      fontSize: 12,
      fontWeight:"600",
      color:"#F1F5F9",
      backgroundColor: '#F8FAFC', // BlueGray100
      borderRadius: 15,
      width: "86%",
      paddingHorizontal: 10,
      paddingVertical: 1,
    }
  });
  
  