import React from 'react';
import { SafeAreaView } from 'react-native';
import { Navigator } from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
