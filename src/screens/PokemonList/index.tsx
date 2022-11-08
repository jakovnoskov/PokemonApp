import React, { SetStateAction, useEffect, useState } from "react"
import { View, FlatList, ActivityIndicator } from "react-native"
import styles from "./styles"
import { PokemonCard } from "../../components/PokemonCard"
import { useNavigation } from "@react-navigation/native"

export const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[any]>([]);
  const navigation: any = useNavigation();
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    navigation.setOptions({ title: 'Pokemons' })
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`)
      .then(response => response.json())
      .then(data => {
        setOffset(offset + 1);
        setPokemons([...pokemons, ...data.results]);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        numColumns={1}
        //showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon: any, index: any) => String(pokemon?.name + index)}
        renderItem={({ item, index }) => <React.Fragment key={index}><PokemonCard {...item} /></React.Fragment>}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReachedThreshold={0.4}
        onEndReached={() => fetchPokemons()}
        ListFooterComponent={
          <View style={styles.footer}>
            {loading && <ActivityIndicator size="large" />}
          </View>
        }
      />
    </View>
  )
}