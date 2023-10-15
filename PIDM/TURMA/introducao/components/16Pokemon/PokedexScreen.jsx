import { View, Text, Button, FlatList, ScrollView, Image } from "react-native"
import { useState, useEffect } from "react"
import PokemonButton from "./PokemonButton"

const PokedexScreen = ({ navigation }) => {

    const [pokemons, setPokemons] = useState([])

    useEffect(
        () => {
            fetchPokemons()
        }
        ,
        []
    )

    const fetchPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=51")
            .then(response => response.json())
            .then(
                (json) => {
                    //let id = 0
                    const vetorFormatado = json.results.map(
                        ({ name, url }) => {
                            return { id: url.split("/")[6], name, url, key:url.split("/")[6] }
                        }
                    )//map
                    //console.log(vetorFormatado)
                    setPokemons(vetorFormatado)
                }
            )
            .catch(error => console.log(error))
    }

    const renderPokemons = () => {
        return (
            <ScrollView style={{width:"95%"}}>
                <View
                    style={{
                        flex:1,
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        flexWrap:"wrap"
                    }}
                >
                {
                    pokemons.map(
                        (pokemonObj) => {
                            return (
                                <View style={{
                                    marginBottom:15,
                                    padding:1,
                                    backgroundColor:"antiquewhite",
                                    alignItems:"center",
                                    width:100,
                                    borderColor:"red",
                                    borderWidth:2,
                                    borderRadius:5,
                                }}
                                        key={pokemonObj.key}
                                >
                                    <Text style={{fontWeight:"bold", fontSize:11}}>{pokemonObj.name.toUpperCase()}</Text>
                                    <Image
                                        source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonObj.id}.png`}}
                                        style={{width:60,height:60}} 
                                    />
                                    
                                   <PokemonButton 
                                        title="Detalhes"
                                        onPress= {
                                            ()=>{
                                                navigation.navigate("PokemonModal",{url:pokemonObj.url})
                                            }
                                        }
                                   />
                                </View>
                            )
                        }
                    )
                }
                </View>
            </ScrollView>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
            <Text
                style={{
                    fontSize:25,
                    fontWeight:"bold",
                    marginTop:20,
                    marginBottom:20,
                    color:"orange"
                }} 
            >
                Pokédex Screen
            </Text>
            {renderPokemons()}
        </View>
    )
}

export default PokedexScreen