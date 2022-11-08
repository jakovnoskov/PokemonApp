import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

type PropsType = {
  name: string,
  url: string,
}

export const PokemonCard: React.FC<PropsType> = ({ name, url }) => {
  const pokemon: PropsType = { name, url };
  const navigation: any = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("PokemonDetail", pokemon)
      }}
    >
      <View style={styles.card}>
        <View style={styles.card__spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.card__name}>{name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback >
  )
}