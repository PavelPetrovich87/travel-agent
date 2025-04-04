import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

type FormFieldProps = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  placeholder?: string;
  editable?: boolean;
  inputType?: 'text' | 'select';
};

const FormField = ({ 
  label, 
  value, 
  onChangeText, 
  onPress, 
  placeholder = '', 
  editable = true,
  inputType = 'text'
}: FormFieldProps) => {
  
  if (inputType === 'select') {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value || placeholder}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
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
  value: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
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

export default FormField; 