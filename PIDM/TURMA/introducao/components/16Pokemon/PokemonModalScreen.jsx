import { View, Text, Button, Image } from "react-native"
import { useState, useEffect } from "react"

const PokemonModalScreen = ({ navigation, route }) => {
    const { url } = route.params
    const [dados, setDados] = useState({})

    useEffect(
        () => {
            fetchPokemon()
        }
        ,
        []
    )

    const fetchPokemon = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    height: data.height,
                    order: data.order,
                    weight: data.weight
                }
                setDados(pokemon)
            })
            .catch(error => console.log(error))
    }

    return (
        <View

        >
            <Text>TELA MODAL</Text>
            <Text style={{ fontSize: 25 }}>{dados.height}</Text>
            <Image
                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dados.id}.png` }}
                style={{ width: 200, height: 200 }}
            />
            <Image
                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${dados.id}.png` }}
                style={{ width: 200, height: 200 }}
            />
            <Button
                title="FECHAR MODAL"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default PokemonModalScreen