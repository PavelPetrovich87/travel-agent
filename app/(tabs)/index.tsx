import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { router } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Travel Agent</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.descriptionContainer}>
        <ThemedText>
          Plan your perfect trip with our AI-powered travel agent. Select destinations, dates, and budget to get customized recommendations.
        </ThemedText>
      </ThemedView>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/(screens)/trip-form')}
      >
        <Text style={styles.buttonText}>Start Planning</Text>
      </TouchableOpacity>
      
      <ThemedView style={styles.featuresContainer}>
        <ThemedText type="subtitle">Features</ThemedText>
        <ThemedText>• Customized trip planning</ThemedText>
        <ThemedText>• Flight and hotel recommendations</ThemedText>
        <ThemedText>• Weather information</ThemedText>
        <ThemedText>• Budget-friendly options</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#4BDCB0',
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  featuresContainer: {
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
