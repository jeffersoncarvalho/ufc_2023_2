import { View, Text, FlatList } from "react-native"
import { estilos } from "../css/estilos"
import { useState, useEffect } from "react"

import { firestore } from "../firebase/firebase_config"
import AlunoService from "../service/AlunoService"

const ListarAluno = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(
        () => {

            /*setAlunos([
                { id: 1, nome: "Wlads", curso: "CC", ira: 9.6 },
                { id: 2, nome: "Jeff", curso: "DD", ira: 6.6 },
                { id: 3, nome: "João", curso: "SI", ira: 7.6 }
            ])*/
            AlunoService.listarAlunos(
                firestore,
                (alunos)=>{
                    setAlunos(alunos )
                }
            )
        }
        ,
        []
    )

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Listar Aluno</Text>
            <FlatList
                data={alunos}
                renderItem={
                    ({ item }) => {
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center"
                                }}
                            >
                                
                                <Text style={{width:"60%",fontWeight:"bold"}}>{item.nome}</Text>
                                <Text style={{width:"25%",fontWeight:"bold"}} >{item.curso}</Text>
                                <Text style={{margin:5}}>{item.ira}</Text>
                            </View>
                        )
                    }
                }
            />
        </View>
    )
}
export default ListarAluno