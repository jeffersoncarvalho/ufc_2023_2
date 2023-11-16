import { View, Text, Button, FlatList } from "react-native"
import { useEffect, useState } from "react"

import { estilos } from "../css/MeuCSS"
import EstudanteService from "../service/EstudanteService"
import { firestoreDb } from "../firebase/firebase_config"

const ListarEstudante = () => {

    useEffect(
        ()=>{
            EstudanteService.listar(
                firestoreDb,
                (estudantes) => {
                    setEstudantes(estudantes)
                }
            )
        },
        []
    )

    const [estudantes, setEstudantes] = useState([
        {id:1,nome:"Jefferson de Carvalho",curso:"SI",ira:9.5},
        {id:2,nome:"Jefferson de Carvalho",curso:"SI",ira:9.5},
        {id:3,nome:"Jefferson de Carvalho",curso:"SI",ira:9.5},
        {id:4,nome:"Jefferson de Carvalho",curso:"SI",ira:9.5}
    ])

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar Estudante</Text>
            <FlatList
                data={estudantes}
                renderItem={
                    ({item}) => {
                        return (
                            <View
                                style={{
                                    flexDirection:"row",
                                    justifyContent:"center"
                                }}
                            >
                                <Text style={{width:"40%",fontWeight:"bold"}}>{item.nome}</Text>
                                <Text style={{width:"10%"}}>{item.curso}</Text>
                                <Text style={{margin:2}}>{item.ira}</Text>
                                <View style={{margin:3}}>
                                    <Button
                                        title="Editar" 
                                    />
                                </View>
                                <View style={{margin:3}}>
                                    <Button
                                        title="Apagar" 
                                    />
                                </View>
                            </View>
                        )
                    }
                }
                keyExtractor={item=>item.id}
            >

            </FlatList>
        </View>
    )

}

export default ListarEstudante