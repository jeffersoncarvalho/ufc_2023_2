import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
import { View, Text, SectionList } from "react-native"
import { useState, useEffect } from "react"
import dados from "./dados"
import estilos from "./estilos"

const ProvaLista = () => {

    const [minhaLista, setMinhaLista] = useState([])

    useEffect(
        () => {
            setMinhaLista(dados)
        }
        ,
        []
    )

    return (

        <View style={estilos.container}>
            <SectionList
                sections={minhaLista}
                keyExtractor={(item, index) => "SDDCeredEDDeed" + index}
                renderItem={
                    ({ item, section }) => {
                        return (
                            <View>
                                
                                <View
                                    style={{
                                        flexDirection: "row",
                                        marginTop: 15,
                                        marginBottom: 10
                                    }}
                                >
                                    <View
                                        style={{
                                            paddingLeft: 10,
                                            paddingRight: 5,

                                        }}
                                    >
                                        <IconButton
                                            icon={item.tipo}
                                            iconColor={MD3Colors.tertiary0}
                                            size={30}
                                            onPress={() => console.log('Pressed')}
                                            mode="contained"
                                        />
                                    </View>
                                    <View
                                        style={{

                                            flex: 1,
                                            flexDirection: "row",
                                            paddingTop: 10,
                                        }}
                                    >
                                        <View
                                            style={{
                                                flex: 1
                                            }}
                                        >
                                            <Text style={{ color: "white" }}>{item.nome}</Text>
                                            <Text style={{ color: "white" }}>{item.hora}</Text>
                                        </View>
                                        <View
                                            style={{
                                                flex: 2.5,
                                                width: "60%",
                                                alignItems: "flex-end",
                                                paddingRight: 20

                                            }}
                                        >
                                            <Text style={{ color: "white" }}>R$ {item.valor}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height:0.5,
                                        backgroundColor:"white"
                                    }}
                                >
                                </View>
                            </View>
                        )
                    }
                }
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            <Text style={{ fontSize: 25, fontWeight: "bold", paddingLeft: 20, marginTop: 10, color: "white" }}>{section.title}</Text>
                        )
                    }
                }
            />
        </View>

    )
}

export default ProvaLista