import {View,Text,Button,TextInput} from "react-native"
import { useState } from "react"

import { estilos } from "../css/MeuCSS"
import { firestoreDb } from "../firebase/firebase_config"
import EstudanteService from "../service/EstudanteService"

const CriarEstudante = () => {
 
    const [nome,setNome] = useState("")
    const [curso,setCurso] = useState("")
    const [ira,setIra] = useState("")

    const cadastrar = () => {
        EstudanteService.criar(
            firestoreDb,
            (id)=>{
                console.log(id)
            },
            {nome,curso,ira}
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Estudante</Text>
            <TextInput 
                style={estilos.input}
                placeholder="Nome Completo"
                value={nome}
                onChangeText={nome=>setNome(nome)}
            />
            <TextInput 
                style={estilos.input}
                placeholder="Curso"
                value={curso}
                onChangeText={curso=>setCurso(curso)}
            />
            <TextInput 
                style={estilos.input}
                placeholder="IRA"
                keyboardType="numeric"
                value={ira}
                onChangeText={ira=>setIra(ira)}
            />
            <View style={estilos.botao}>
                <Button 
                    title="CADASTRAR"
                    onPress={cadastrar}
                />
            </View>
        </View>
    )
}

export default CriarEstudante