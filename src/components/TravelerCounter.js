import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const TravelerCounter = ({ label, value, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={onDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        
        <Text style={styles.value}>{value}</Text>
        
        <TouchableOpacity style={styles.button} onPress={onIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2FFFF',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 22,
    color: '#000000',
    marginBottom: 5,
    textAlign: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  value: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
  },
  button: {
    backgroundColor: '#000000',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 35,
    color: '#F2FFFF',
    marginTop: -5, // Visual adjustment for the '+' and '-' symbols
  },
});

export default TravelerCounter; 