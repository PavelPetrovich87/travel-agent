import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

type BudgetInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const BudgetInput = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder = '$ 1000' 
}: BudgetInputProps) => {
  
  // Format budget with dollar sign
  const formatBudget = (text: string) => {
    // Remove any non-digit characters except the first $
    const cleanText = text.replace(/[^\d$]/g, '').replace(/^\$?/, '$');
    onChangeText(cleanText);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={formatBudget}
        placeholder={placeholder}
        keyboardType="numeric"
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

export default BudgetInput; 