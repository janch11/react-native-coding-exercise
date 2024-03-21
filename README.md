# React Native Coding Exercise

## Overview
This is a React app interview challenge. Please fork this repo, and push your code to a branch in your forked repo (following the instructions below).

In this exercise you will create a spacex launch table that has sorting, search and pagination. Data will be available at the endpoint provided in the .env file.

Designs can be found [here](https://zpl.io/DlRA7eW). You will receive login credentials separately in order to access the designs and associated assets.

1. You can find the playground to see the schema and make queries [here](https://studio.apollographql.com/public/spacex-l4uc6p/explorer?variant=main).
2. For this challenge we will query the Entity called `launchesPast`.
3. After you get all of the past launches, render them in a table with the columns as in Designs.
4. Clicking a row of the table should take you to a detail screen of that launch.
5. All columns should be sortable in `asc/desc` order. Default order should be by Launch's `launch_year`. Make use of GraphQL queries.
6. Search should only be implemented for Launch's `mission_name`. Make sure to use a GraphQL query.

# Notes

- Make sure to implement the UI/UX according to the Designs provided. We highly value attention to detail.
- Please use Apollo client with hooks to query the data (packages should already be installed - check `package.json`).

# Setup and Development

1. Fork this repo `git@github.com:hanekedesign/react-native-coding-exercise.git`
2. Make sure you are inside of the repo you just cloned, by running `cd react-native-coding-exercise`
3. Run `yarn` to install all dependencies
4. Run `expo start` to start the app

## Technologies Used
- Language: TypeScript
- Development Platform: React Native (Expo Managed)
- Package Manager: Yarn Preferred
- Navigation: Expo Router

## App Architecture
App Structure: The app is structured with a focus on modular components and reusable utilities. Key areas include:
- `app/`: Main application components and screens.
- `components/`: Shared UI components like buttons, inputs, and headers.
- `constants/`: Constants like colors and configurations.
- `hooks/`: Custom React hooks for shared logic.
- `store/`: State management using Redux.
- `types/`: TypeScript type definitions for the app.
- `utils/`: Utility functions and helpers.
- Asset Management: Fonts and images are managed under the assets/ directory.
- Styling: Consistent styling approach across components, leveraging React Native's styling capabilities.

### Dependencies
Below are the key dependencies used in the app, along with links to their official documentation or relevant resources. This will help you understand each library's role in the project.
 
1. **@react-navigation/native** - Navigation library for React Native apps, essential for screen transitions. [Read more](https://reactnavigation.org/docs/getting-started).
    
2. **@reduxjs/toolkit** - The official, opinionated, batteries-included toolset for efficient Redux development. [Read more](https://redux-toolkit.js.org/).

3. **expo** - An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React. [Read more](https://docs.expo.dev/).
    
4. **expo-linking** - Provides a way to manage deep links in your Expo app. [Read more](https://docs.expo.dev/versions/latest/sdk/linking/).
    
5. **expo-router** - A routing library for Expo applications. [Read more](https://github.com/expo/router).

6. **react-native-gesture-handler** - Provides native-driven gesture management APIs for building best-in-class gesture experiences in React Native. [Read more](https://docs.swmansion.com/react-native-gesture-handler/).
    
7. **react-redux** - Official React bindings for Redux. [Read more](https://react-redux.js.org/).

## Getting Started
- Clone the Repository: Clone the repo to your local machine.
- Install Dependencies: Run yarn install to install all required dependencies.
- Run the App: Use yarn start to start the app in development mode.

