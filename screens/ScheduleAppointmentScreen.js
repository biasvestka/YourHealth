import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ScheduleAppointmentScreen() {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const scheduleAppointment = async () => {
    try {
      const appointmentInfo = {
        name,
        reason,
        date,
      };
      await AsyncStorage.setItem('appointmentInfo', JSON.stringify(appointmentInfo));
      alert('Consulta agendada com sucesso!');
      // Limpar os campos após agendar a consulta
      setName('');
      setReason('');
      setDate(new Date());
    } catch (error) {
      console.error('Erro ao agendar consulta:', error);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(Platform.OS === 'ios');
    setDate(currentTime);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Motivo da consulta"
        onChangeText={text => setReason(text)}
        value={reason}
      />
      <View style={styles.datetimeContainer}>
        <TouchableOpacity style={styles.datetimeButton} onPress={showDatepicker}>
          <Text style={styles.datetimeButtonText}>Escolher Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.datetimeButton} onPress={showTimepicker}>
          <Text style={styles.datetimeButtonText}>Escolher Horário</Text>
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}
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
  datetimeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  datetimeButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  datetimeButtonText: {
    fontSize: 16,
  },
});
