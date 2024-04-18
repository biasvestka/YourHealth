// screens/ScheduleAppointmentScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ScheduleAppointmentScreen() {
  const [appointmentInfo, setAppointmentInfo] = useState('');

  const scheduleAppointment = async () => {
    try {
      await AsyncStorage.setItem('appointmentInfo', appointmentInfo);
      alert('Consulta agendada com sucesso!');
    } catch (error) {
      console.error('Erro ao agendar consulta:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite as informações da consulta"
        onChangeText={text => setAppointmentInfo(text)}
        value={appointmentInfo}
      />
      <Button title="Agendar" onPress={scheduleAppointment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
