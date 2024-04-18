import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export { AsyncStorage };

export default function MedicalHistoryScreen() {
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
  
    const saveMedicalHistory = async () => {
      if (!gender || !name || !birthdate || !height || !weight) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      try {
        await AsyncStorage.setItem('gender', gender);
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('birthdate', birthdate);
        await AsyncStorage.setItem('height', height);
        await AsyncStorage.setItem('weight', weight);
  
        alert('Histórico médico salvo com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar histórico médico:', error);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.textLabel}>Escolha o gênero:</Text>
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[styles.optionButton, gender === 'Feminino' && styles.selectedOption]}
            onPress={() => setGender('Feminino')}>
            <Text style={styles.optionText}>Feminino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, gender === 'Masculino' && styles.selectedOption]}
            onPress={() => setGender('Masculino')}>
            <Text style={styles.optionText}>Masculino</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento (DD/MM/AAAA)"
          onChangeText={text => setBirthdate(text)}
          value={birthdate}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura"
          onChangeText={text => setHeight(text)}
          value={height}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso"
          onChangeText={text => setWeight(text)}
          value={weight}
        />
        <Button title="Salvar" onPress={saveMedicalHistory} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textLabel: {
      fontSize: 18,
      marginBottom: 10,
    },
    optionContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    optionButton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
    },
    selectedOption: {
      backgroundColor: 'lightblue',
    },
    optionText: {
      fontSize: 16,
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
