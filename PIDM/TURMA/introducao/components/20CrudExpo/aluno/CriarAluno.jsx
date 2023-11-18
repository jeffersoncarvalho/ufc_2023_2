import { View, Text, Button, TextInput } from "react-native"
import { estilos } from "../css/estilos"
import { useState } from "react"
import AlunoService from "../service/AlunoService"
import { firestore } from "../firebase/firebase_config"

const CriarAluno = ({navigation}) => {

    const [nome, setNome] = useState("Jefferson")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("")

    const criarAluno = () => {
        const alunoNovo = {nome,curso,ira}
        AlunoService.criarAluno(
            firestore,
            (id)=>{
                console.log(id + "inserido")
                navigation.navigate("ListarAluno")
            },
            alunoNovo
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Aluno</Text>
            <TextInput 
                style={estilos.input}
                placeholder="Nome"
                value={nome}
                onChangeText={(nome)=>setNome(nome)}
            />
            <TextInput 
                style={estilos.input}
                placeholder="Curso"
                value={curso}
                onChangeText={(curso)=>setCurso(curso)}
            />
            <TextInput 
                style={estilos.input}
                placeholder="IRA"
                value={ira}
                onChangeText={(ira)=>setIra(ira)}
                keyboardType="numeric"
            />
            <View>
                <Button
                    title="CRIAR"
                    onPress={criarAluno}
                />
            </View>
        </View>
    )
}
export default CriarAluno