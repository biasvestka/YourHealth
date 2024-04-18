import React from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Health</Text>
      <Image source={require('../assets/hospital.jpg')} style={styles.image} />
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Meu histórico médico" onPress={() => navigation.navigate('MedicalHistory')} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Agendar uma consulta" onPress={() => navigation.navigate('ScheduleAppointment')} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004AAD', 
    marginBottom: 10, 
  },
  image: {
    width: 400,
    height: 200,
    marginBottom: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#004AAD',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#004AAD',
    overflow: 'hidden',
  },
});
