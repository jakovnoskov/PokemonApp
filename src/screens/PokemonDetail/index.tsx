import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "../../navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

type pokemon = {
  name: string,
  image: string,
  baseExperience: string,
  versionName: string,
  abilityName: string
}

type pokemonParams = {
  name: string,
  url: string,
}

export const PokemonDetail: React.FC<{ route: RouteProp<RootStackParamList, "PokemonDetail"> }> = ({ route }) => {
  const item: any = route?.params
  const navigation: any = useNavigation();
  const [pokemon, setPokemon] = useState<pokemon>();
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState('api');

  const fetchPokemon = async () => {
    setLoading(true);
    fetch(item?.url)
      .then(response => response.json())
      .then((data) => {
        //console.log('data', data)
        const item: pokemon = {
          name: data.species.name,
          image: data.sprites.front_default,
          baseExperience: data.base_experience,
          versionName: data.game_indices[0].version.name,
          abilityName: data.abilities[0].ability.name,
        };
        setPokemon(item);
        setToStorage(item);
        setLoading(false);
      });
  };


  const setToStorage = async (item: pokemon) => {
    const curItems: any = await AsyncStorage.getItem('pokemon_list');

    let json = curItems === null
      ? []
      : JSON.parse(curItems);

    json.push(item)

    try {
      await AsyncStorage.setItem('pokemon_list', JSON.stringify(json))
    } catch (e) {
      // saving error
    }

  }

  const initialPokemon = async () => {
    // очистка AsyncStorage для тестирования
    //await AsyncStorage.removeItem('pokemon_list');

    const curItems: any = await AsyncStorage.getItem('pokemon_list');

    if (curItems !== null && JSON.parse(curItems).find((findItem: any) => findItem.name === item.name)) {
      // достаём покемона из локального хранилища
      const findPokemon = JSON.parse(curItems).find((findItem: any) => findItem.name === item.name);
      setPokemon(findPokemon);
      setLoading(false);
      setDataSource('AsyncStorage');
    } else {
      // если покимона нет, загружаем
      fetchPokemon();
    }
  }

  useEffect(() => {
    initialPokemon();
    navigation.setOptions({ title: item?.name })
  }, []);


  return (
    <ScrollView>
      {!loading && pokemon ?
        <>
          <Image
            source={{
              uri: pokemon.image,
            }}
            style={styles.pokeImageStyle}></Image>
          <Text style={styles.baseText}>
            {'Data source\n'}
            <Text style={[styles.innerText, { color: dataSource == 'api' ? 'red' : 'green' }]}>{dataSource}</Text>
          </Text>
          <Text style={styles.baseText}>
            {'Base experience\n'}
            <Text style={styles.innerText}>{pokemon.baseExperience}</Text>
          </Text>
          <Text style={styles.baseText}>
            {'Version Name\n'}
            <Text style={styles.innerText}>{pokemon.versionName}</Text>
          </Text>
          <Text style={styles.baseText}>
            {'Ability Name\n'}
            <Text style={styles.innerText}>{pokemon.abilityName}</Text>
          </Text>
        </> :
        <View style={{ paddingTop: 100 }}>
          <ActivityIndicator size="large" />
        </View>
      }
    </ScrollView>
  )
}