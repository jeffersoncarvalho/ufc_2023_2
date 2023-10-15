import { View, Text } from "react-native"
import estilos from "./estilos"
import { IconButton, MD3Colors } from "react-native-paper"


const ProvaTela02 = ({ route }) => {
    const { secao, icone, nome, hora, valor } = route.params
    return (
        <View
            style={{
                backgroundColor: "black",
                height: "100%"
            }}
        >
            <IconButton
                icon={icone}
                iconColor={MD3Colors.tertiary0}
                size={80}
                onPress={() => console.log("teste")}
                mode="contained"
            />
            <Text style={[estilos.header,{fontSize:45}]}>{nome}</Text>
            <Text style={[estilos.header,{fontSize:45}]}>{valor}</Text>

            <Text style={estilos.header}>{secao}</Text>
            <Text style={estilos.header}>{hora}</Text>
            
        </View>
    )
}

export default ProvaTela02