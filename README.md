# Travel Agent App

A React Native Expo application for planning trips based on the Figma design.

## Features

- Welcome screen with travel background
- Trip planning form with:
  - Number of travelers selector
  - Origin and destination inputs
  - Date range selection
  - Budget selection
- Trip details screen showing:
  - Travel itinerary with dates
  - Weather information
  - Flight recommendations
  - Hotel recommendations
  - Booking options

## Setup Instructions

1. Make sure you have Node.js and npm installed
2. Install Expo CLI globally:
   ```
   npm install -g expo-cli
   ```
3. Clone this repository
4. Navigate to the project directory:
   ```
   cd travel-agent
   ```
5. Install dependencies:
   ```
   npm install
   ```
6. Start the development server:
   ```
   npm start
   ```
7. Run on a physical device with the Expo Go app or run on an emulator/simulator

## Screens

### Welcome Screen
The initial screen showing a background image with a "Let's Begin" button.

### Trip Form Screen
A form for users to input trip details including:
- Number of travelers
- Origin and destination
- Travel dates
- Budget

### Trip Details Screen
Displays the trip details and recommendations:
- Trip overview
- Weather information
- Flight recommendations with booking option
- Hotel recommendations with booking option

## Notes

This app currently includes only the UI components, with dummy data and placeholder functions. Backend integration for real data and booking functionality will be implemented in future versions.

## Project Structure

```
/travel-agent
  /assets
    travel-background.jpg
  /src
    /components
      DateCard.js
      FormField.js
      InfoCard.js
      TravelerCounter.js
    /navigation
      AppNavigator.js
    /screens
      WelcomeScreen.js
      TripFormScreen.js
      TripDetailsScreen.js
  App.js
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
