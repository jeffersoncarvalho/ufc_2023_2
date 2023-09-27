import {View,Text, FlatList} from "react-native"
import { useState, useEffect } from "react"

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(
        () => {
            getPokemons()
        }
        ,
        []
    )

    const getPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then(response => response.json())
        .then(
            ({results}) => {
                
                const formated = results.map(
                    ({name,url}) => {return {id:url.split("/")[6], name,url}}
                )
                setPokemons(formated)
            }
        )

    }

    return (
        <View>
            <FlatList
                style={{
                    width:"100%",
                    backgroundColor:"red",
                    flexDirection:"row"
                }}
                data={pokemons}
                renderItem={
                    ({item}) => {
                        return (
                            <View style={{backgroundColor:"blue"}}>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}

export default Pokedex