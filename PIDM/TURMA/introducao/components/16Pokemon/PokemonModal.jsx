import { View, Text, Button, Image } from "react-native"
import { useState, useEffect } from "react"

const PokemonModalScreen = ({ navigation, route }) => {
    const { url } = route.params
    const [dados, setDados] = useState({name:""})

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

            style={{
                marginTop: 40,
                alignItems: "center"
            }}
        >

            <View
                style={{
                    alignItems: "center",
                    marginBottom: 15,
                    padding: 1,
                    backgroundColor: "antiquewhite",
                    borderColor: "red",
                    borderWidth: 2,
                    borderRadius: 5,
                    width: "90%"
                }}
            >
                <Text style={{ fontSize: 30, fontWeight: "bold", color: "orange" }}>{dados.name.toUpperCase()}</Text>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Image
                        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dados.id}.png` }}
                        style={{ width: 200, height: 200 }}
                    />
                    <Image
                        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${dados.id}.png` }}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            </View>

            <View 
                style={{
                    alignItems: "center",
                    marginBottom: 15,
                    padding: 1,
                    backgroundColor: "antiquewhite",
                    borderColor: "red",
                    borderWidth: 2,
                    borderRadius: 5,
                    width: "90%"
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>ID: {dados.id}</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>PESO: {dados.weight}</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>ALTURA: {dados.height}</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "orange" }}>ORDEM: {dados.order}</Text>
            </View>
                
            <Button
                title="FECHAR"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default PokemonModalScreen