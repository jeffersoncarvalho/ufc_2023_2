import { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import estilos from "./14Estilos"

const MyNetworking = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(
        () => {
            getMovies()
        }
        ,
        []
    )

    const getMovies = () => {
        fetch("https://reactnative.dev/movies.json")
            .then(response => response.json())
            .then(
                ({title, description, movies}) => {
                    //console.log(title)
                    setTitle(title)
                    setDescription(description)
                    setMovies(movies)
                }
            )
            .catch(error => console.log(error))
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>{title}</Text>
            <View style={{padding:20, margin:20, backgroundColor:"red"}}>
                <Text style={estilos.description}>{description}</Text>
            </View>
            <FlatList 
                style={{backgroundColor:"green",width:"100%"}}
                data={movies}
                renderItem={
                    ({item}) => {
                        return (
                            <View style={{flex:1,flexDirection:"row",padding:10,margin:10, backgroundColor: "red"}}>
                                <View>
                                    <Text style={{fontSize:25,fontWeight:"bold"}}>{item.id}</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:25}}>{item.title}</Text>
                                    <Text style={{fontSize:25}}>{item.releaseYear}</Text>
                                </View>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}

export default MyNetworking