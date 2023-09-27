import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"

const JuntarFrases = () => {

    const [frase1,setFrase1] = useState("")
    const [frase2,setFrase2] = useState("")
    const [frase3,setFrase3] = useState("")
    const [number, setNumber] = useState(0)

    return (
        <View style={estilos.view}>
            <Text style={estilos.header}>Juntar Frases</Text>
            <TextInput
                style={estilos.input}
                defaultValue={frase1}
                onChangeText={
                    (textoDigitado) => setFrase1(textoDigitado)
                }
            />
            <TextInput
                style={estilos.input}
                defaultValue={frase2}
                onChangeText={
                    (textoDigitado) => setFrase2(textoDigitado)
                }
            />

            <TextInput
                style={estilos.input}
                keyboardType="numeric"
                onChangeText={
                    (textoDigitado) => setNumber(textoDigitado)
                }
            />
            
            <View>
                <Button
                    title="JUNTAR"
                    onPress={
                        ()=> {
                            console.log(frase1 + " " + frase2)
                            setFrase3(frase1 + "  " + frase2)
                            console.log(parseInt(number) + 5)
                        }
                    }
                />
            </View>

            <Text style={estilos.frase}>
                {frase3}
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    header: {
        fontSize:25,
        fontWeight:"bold",
        color:"red",
        padding:40
    },
    view: {
        flex:1,
        alignItems:"center",
        padding: 20,
        backgroundColor: "#C0C0C0"
    },
    input: {
        height: 40,
        width:300,
        paddingLeft: 10,
        margin:10,
        borderColor: "black",
        borderWidth: 2,
        fontSize: 16,
        fontWeight: "bold",
    },
    frase: {
        fontSize:25,
        fontWeight:"bold",
        paddingTop:40
    }
})

export default JuntarFrases