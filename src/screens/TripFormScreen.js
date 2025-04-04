import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import FormField from '../components/FormField';
import TravelerCounter from '../components/TravelerCounter';

const TripFormScreen = ({ navigation }) => {
  const [travelers, setTravelers] = useState(1);
  const [fromCity, setFromCity] = useState('New York City');
  const [toCity, setToCity] = useState('Paris');
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
    navigation.navigate('TripDetails', {
      travelers,
      fromCity,
      toCity,
      fromDate,
      toDate,
      budget
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TravelerCounter
        label="Number of travellers"
        value={travelers}
        onIncrease={handleIncreaseTravelers}
        onDecrease={handleDecreaseTravelers}
      />
      
      <FormField
        label="Flying from"
        value={fromCity}
        onPress={() => {}}
      />
      
      <FormField
        label="Flying to"
        value={toCity}
        onPress={() => {}}
      />
      
      <FormField
        label="From Date"
        value={fromDate}
        onPress={() => {}}
      />
      
      <FormField
        label="To Date"
        value={toDate}
        onPress={() => {}}
      />
      
      <FormField
        label="Budget"
        value={budget}
        onPress={() => {}}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Plan my Trip!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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

export default TripFormScreen; 