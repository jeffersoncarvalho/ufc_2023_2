import { View, Text, SectionList } from "react-native"
import { IconButton, MD3Colors } from "react-native-paper"
import { useState, useEffect } from "react"
import dados from "./dados"
import estilos from "./estilos"

const ProvaTela01 = ({navigation}) => {
    const [minhaFatura, setMinhaFatura] = useState([])

    useEffect(
        () => {
            //CARREGARIA A API...
            setMinhaFatura(dados)
        }
        ,
        []
    )

    return (
        <View style={estilos.container}>
            <SectionList
                sections={minhaFatura}
                keyExtractor={(item, index) => "sdDDDsss" + index}
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            <View>
                                <Text style={estilos.header}>{section.title}</Text>
                            </View>
                        )
                    }
                }
                renderItem={
                    ({ item, section }) => {
                        return (

                            <View
                                style={{
                                    flexDirection: "row",

                                }}
                            >
                                <View>
                                    <IconButton
                                        icon={item.icone}
                                        iconColor={MD3Colors.tertiary0}
                                        size={30}
                                        onPress={() => navigation.navigate("ProvaTela02",{secao:section.title,icone:item.icone,nome:item.nome,hora:item.hora,valor:item.valor})}
                                        mode="contained"
                                    />
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        flex: 1,
                                        marginTop: 5
                                    }}
                                >
                                    <View
                                        style={{
                                            flex: 1
                                        }}
                                    >
                                        <View>
                                            <Text style={estilos.texto}>{item.nome}</Text>
                                        </View>
                                        <View>
                                            <Text style={estilos.texto}>{item.hora}</Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            flex: 2.5,
                                            alignItems: "flex-end",
                                        }}
                                    >
                                        <Text style={estilos.texto}>R$ {item.valor}</Text>
                                    </View>
                                </View>
                            </View>
                            
    )
}
                }
/>
        </View >
    )
}

export default ProvaTela01