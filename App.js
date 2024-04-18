import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MedicalHistoryScreen from './screens/MedicalHistoryScreen';
import ScheduleAppointmentScreen from './screens/ScheduleAppointmentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false }} />
        <Stack.Screen name="MedicalHistory" component={MedicalHistoryScreen} options={{ title: 'Meu Histórico Médico' }} />
        <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointmentScreen} options={{ title: 'Agendar uma Consulta' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

