import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DateCard = ({ date, isArrival }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {isArrival ? `→ ${date}` : `${date} ←`}
      </Text>
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
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
});

export default DateCard; 