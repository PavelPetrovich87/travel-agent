import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import InfoCard from '../components/InfoCard';
import DateCard from '../components/DateCard';

const TripDetailsScreen = ({ route }) => {
  const { fromCity, toCity, fromDate, toDate } = route.params || {};
  
  // Dummy data - in real app this would come from API
  const weatherInfo = {
    title: 'Weather',
    description: 'You can expect the weather to be quite mild. Low will be 19° and high will be 25°',
  };
  
  const flightInfo = {
    title: 'Flights',
    description: 'The best option for you is with Delta Airlines with a layover in Oslo',
    showButton: true,
  };
  
  const hotelInfo = {
    title: 'Hotel',
    description: 'We recommend you stay at the Premiere Inn hotel in central Paris',
    showButton: true,
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Your Trip</Text>
      
      <Text style={styles.subtitle}>{fromCity} → {toCity}</Text>
      
      <View style={styles.dateContainer}>
        <DateCard date={`${fromDate.split('-')[2]}th Nov 23`} isArrival />
        <DateCard date={`${toDate.split('-')[2]}th Dec 23`} isArrival={false} />
      </View>
      
      <InfoCard {...weatherInfo} />
      <InfoCard {...flightInfo} />
      <InfoCard {...hotelInfo} />
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
  title: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 48,
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default TripDetailsScreen; 