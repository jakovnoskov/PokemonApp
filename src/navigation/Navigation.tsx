import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokemonList } from '../screens/PokemonList';
import { PokemonDetail } from '../screens/PokemonDetail';

export type PokemonDetailProps = {
  pokemonId: number;
  name: string;
}

export type RootStackParamList = {
  PokemonList: undefined,
  PokemonDetail: undefined,
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
}