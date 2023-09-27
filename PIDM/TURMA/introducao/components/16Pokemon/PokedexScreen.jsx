import { View, Text, Button } from "react-native"
import { useState, useEffect } from "react"

const PokedexScreen = ({navigation}) => {

    useEffect(
        () => {
            fetchPokemons()
        }
        ,
        []
    )

    const fetchPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then(response => response.json())
        .then(
            (json) => {
                //let id = 0
                const vetorFormatado = json.results.map(
                    ({name,url}) => {
                        return {id: url.split("/")[6],name,url}
                    }
                )//map
                console.log(vetorFormatado)

            }
        )
        .catch(error => console.log(error))
    }

    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Pokedex Screen</Text>
            <Button
                title="ABRIR MODAL" 
                onPress={() => navigation.navigate("PokemonModal")}
            />
        </View>
    )
}

export default PokedexScreen