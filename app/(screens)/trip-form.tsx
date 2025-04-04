import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import FormField from '@/components/FormField';
import DateInput from '@/components/DateInput';
import BudgetInput from '@/components/BudgetInput';
import TravelerCounter from '@/components/TravelerCounter';

export default function TripFormScreen() {
  const [travelers, setTravelers] = useState(1);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [fromDate, setFromDate] = useState('2023-11-24');
  const [toDate, setToDate] = useState('2023-12-05');
  const [budget, setBudget] = useState('$ 5000');

  const handleIncreaseTravelers = () => {
    setTravelers(prev => prev + 1);
  };

  const handleDecreaseTravelers = () => {
    if (travelers > 1) {
      setTravelers(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    router.push({
      pathname: '/(screens)/trip-details',
      params: {
        travelers,
        fromCity,
        toCity,
        fromDate,
        toDate,
        budget
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TravelerCounter
          label="Number of travellers"
          value={travelers}
          onIncrease={handleIncreaseTravelers}
          onDecrease={handleDecreaseTravelers}
        />
        
        <FormField
          label="Flying from"
          value={fromCity}
          onChangeText={setFromCity}
          placeholder="Enter city or airport"
        />
        
        <FormField
          label="Flying to"
          value={toCity}
          onChangeText={setToCity}
          placeholder="Enter destination"
        />
        
        <DateInput
          label="From Date"
          value={fromDate}
          onChangeText={setFromDate}
        />
        
        <DateInput
          label="To Date"
          value={toDate}
          onChangeText={setToDate}
        />
        
        <BudgetInput
          label="Budget"
          value={budget}
          onChangeText={setBudget}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Plan my Trip!</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FFFF',
  },
  contentContainer: {
    padding: 20,
    gap: 15,
  },
  button: {
    backgroundColor: '#4BDCB0',
    borderRadius: 40,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonText: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
  },
}); 