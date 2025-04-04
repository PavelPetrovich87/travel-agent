import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

type DateInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const DateInput = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder = 'YYYY-MM-DD' 
}: DateInputProps) => {
  
  // Simple validation function for date format
  const validateDate = (text: string) => {
    // Allow empty or partial inputs during typing
    if (!text || text.length < 10) {
      onChangeText(text);
      return;
    }
    
    // Basic date format validation (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateRegex.test(text)) {
      onChangeText(text);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={validateDate}
        placeholder={placeholder}
        keyboardType="default"
      />
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
  input: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
    width: '100%',
  },
});

export default DateInput; 