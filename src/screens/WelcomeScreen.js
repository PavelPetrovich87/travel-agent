import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/travel-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TripForm')}
          >
            <Text style={styles.buttonText}>Let's Begin</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

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

export default WelcomeScreen; 