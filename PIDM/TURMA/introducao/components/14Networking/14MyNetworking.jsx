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
            <View style={estilos.description_view}>
                <Text style={estilos.description}>{description}</Text>
            </View>
            <FlatList 
                style={estilos.flatlist}
                data={movies}
                renderItem={
                    ({item}) => {
                        return (
                            <View style={estilos.card}>
                                <View style={{padding:20}}>
                                    <Text style={{fontSize:25,fontWeight:"bold"}}>{item.id}</Text>
                                </View>
                                <View style={estilos.movie}>
                                    <Text style={{fontSize:20}}>{item.title}</Text>
                                    <Text style={{fontSize:20}}>{item.releaseYear}</Text>
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