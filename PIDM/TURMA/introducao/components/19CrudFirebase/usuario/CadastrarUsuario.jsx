import { Text, View, TextInput, Button } from "react-native"
import { useState, useEffect } from "react"

import { auth } from "../firebase/firebase_config"
import { estilos } from "../css/MeuCSS"
import UsuarioService from "../service/UsuarioService"

const CadastrarUsuario = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(
        () => {

        }
        ,
        []
    )

    const acaoBotao = () => {
        UsuarioService.signUp(
            auth,
            email,
            password,
            (userCredential)=>{
                console.log(userCredential)
            }
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Cadastrar Usuário</Text>
            <View
                style={{
                    flex:1,
                    flexDirection:"column",
                    alignItems:"center",
                    width:"90%"
                }}
            >
                <TextInput
                    style={estilos.input}
                    placeholder="E-mail"
                    onChangeText={email => setEmail(email)}
                    value={email}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                    value={password}
                />
                <View style={estilos.botao}>
                    <Button
                        title="Cadastrar"
                        onPress={acaoBotao}
                    />
                </View>
            </View>
        </View>
    )
}

export default CadastrarUsuario