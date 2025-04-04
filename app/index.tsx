import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={require('../assets/travel-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/(screens)/trip-form')}
          >
            <Text style={styles.buttonText}>Let's Begin</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  button: {
    backgroundColor: '#4BDCB0',
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonText: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
  },
}); 