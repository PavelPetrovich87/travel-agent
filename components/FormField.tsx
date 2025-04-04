import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type FormFieldProps = {
  label: string;
  value: string;
  onPress: () => void;
};

const FormField = ({ label, value, onPress }: FormFieldProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
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
  value: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
  },
});

export default FormField; 