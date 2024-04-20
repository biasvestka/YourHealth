import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MedicalHistoryScreen() {
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [editing, setEditing] = useState(true);
  const [hasMedicalHistory, setHasMedicalHistory] = useState(false);

  useEffect(() => {
    // Carregar dados salvos ao montar o componente
    loadMedicalHistory();
  }, []);

  const loadMedicalHistory = async () => {
    try {
      const savedGender = await AsyncStorage.getItem('gender');
      const savedName = await AsyncStorage.getItem('name');
      const savedBirthdate = await AsyncStorage.getItem('birthdate');
      const savedHeight = await AsyncStorage.getItem('height');
      const savedWeight = await AsyncStorage.getItem('weight');

      if (savedGender !== null) {
        setGender(savedGender);
      }
      if (savedName !== null) {
        setName(savedName);
      }
      if (savedBirthdate !== null) {
        setBirthdate(savedBirthdate);
      }
      if (savedHeight !== null) {
        setHeight(savedHeight);
      }
      if (savedWeight !== null) {
        setWeight(savedWeight);
      }
      if (savedGender || savedName || savedBirthdate || savedHeight || savedWeight) {
        setHasMedicalHistory(true); // Se houver informações médicas, mudar para modo de visualização
        setEditing(false); // Mudar para modo de visualização após carregar os dados
      }
    } catch (error) {
      console.error('Erro ao carregar histórico médico:', error);
    }
  };

  const saveMedicalHistory = async () => {
    if (!gender || !name || !birthdate || !height || !weight) {
      Alert.alert('Preenchimento obrigatório', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      await AsyncStorage.setItem('gender', gender);
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('birthdate', birthdate);
      await AsyncStorage.setItem('height', height);
      await AsyncStorage.setItem('weight', weight);

      Alert.alert('Histórico médico salvo com sucesso!');
      setHasMedicalHistory(true); // Mudar para modo de visualização após salvar os dados
      setEditing(false); // Mudar para modo de visualização após salvar os dados
    } catch (error) {
      console.error('Erro ao salvar histórico médico:', error);
    }
  };

  const handleEdit = () => {
    setEditing(true); // Mudar para modo de edição
  };

  const handleDelete = async () => {
    try {
      await AsyncStorage.removeItem('gender');
      await AsyncStorage.removeItem('name');
      await AsyncStorage.removeItem('birthdate');
      await AsyncStorage.removeItem('height');
      await AsyncStorage.removeItem('weight');

      Alert.alert('Histórico médico apagado com sucesso!');
      setGender('');
      setName('');
      setBirthdate('');
      setHeight('');
      setWeight('');
      setEditing(true); // Mudar para modo de edição após apagar
      setHasMedicalHistory(false); // Mudar para modo de formulário após apagar
    } catch (error) {
      console.error('Erro ao apagar histórico médico:', error);
    }
  };

  return (
    <View style={styles.container}>
      {(!hasMedicalHistory || editing) && (
        <>
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
            placeholder="Altura (Ex: 1.80)"
            onChangeText={text => setHeight(text)}
            value={height}
          />
          <TextInput
            style={styles.input}
            placeholder="Peso (Ex: 60.5)"
            onChangeText={text => setWeight(text)}
            value={weight}
          />
          <Button title="Salvar" onPress={saveMedicalHistory} />
        </>
      )}
      {hasMedicalHistory && !editing && (
        <>
          <View style={styles.infoContainer}>
            <Text style={styles.textLabel}>Gênero:</Text>
            <Text style={styles.infoText}>{gender}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textLabel}>Nome:</Text>
            <Text style={styles.infoText}>{name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textLabel}>Data de Nascimento:</Text>
            <Text style={styles.infoText}>{birthdate}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textLabel}>Altura:</Text>
            <Text style={styles.infoText}>{height}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textLabel}>Peso:</Text>
            <Text style={styles.infoText}>{weight}</Text>
          </View>
          <Button title="Editar" onPress={handleEdit} />
          <Button title="Apagar Histórico" onPress={handleDelete} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoText: {
    fontSize: 18,
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
