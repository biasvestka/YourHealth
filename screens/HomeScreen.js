import React from 'react';
import { View, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Health</Text>
      <Image source={require('../assets/hospital.jpg')} style={styles.image} />
      <Text style={styles.subtitle}>Somos uma equipe dedicada a fornecer soluções inovadoras e acessíveis para cuidados com a saúde. Oferecendo ferramentas e recursos que as ajudem a gerenciar sua saúde de forma eficaz.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MedicalHistory')}>
          <Text style={styles.buttonText}>Meu histórico médico</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScheduleAppointment')}>
          <Text style={styles.buttonText}>Agendar uma consulta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.buttonText}>Sobre nós</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Beatriz Svestka - RM551534 - 2TDSPM</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#004AAD',
    height: 40, // altura aumentada
    justifyContent: 'center', // centralizar o texto verticalmente
    alignItems: 'center', // centralizar o texto horizontalmente
  },
  buttonText: {
    color: '#FFFFFF', // cor do texto branco
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#004AAD',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
