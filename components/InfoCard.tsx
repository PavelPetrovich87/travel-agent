import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type InfoCardProps = {
  title: string;
  description: string;
  showButton?: boolean;
};

const InfoCard = ({ title, description, showButton }: InfoCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      
      {showButton && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BBF7F7',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  title: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
    color: '#000000',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4BDCB0',
    borderRadius: 40,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonText: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
  },
});

export default InfoCard; 