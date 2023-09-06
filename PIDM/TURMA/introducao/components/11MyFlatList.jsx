import {View,Text,FlatList} from "react-native"

/*const dados = [
    {key:1,nome:"Jefferson",nota:6.7},
    {key:2,nome:"Fábio",nota:7.7},
    {key:3,nome:"Wladimir",nota:6.8},
    {key:4,nome:"João",nota:5.9},
    {key:5,nome:"Paulo",nota:9.7},
    {key:6,nome:"Diana",nota:2.7},
    {key:7,nome:"Marcos",nota:6.2},
    {key:8,nome:"Tarso",nota:3.4},
    {key:9,nome:"Davi",nota:8.9},
    {key:10,nome:"David",nota:9.1},
    {key:11,nome:"Rainara",nota:2.7},
    {key:12,nome:"Jefferson",nota:6.7},
    {key:130,nome:"Fábio",nota:7.7},
    {key:13,nome:"Wladimir",nota:6.8},
    {key:14,nome:"João",nota:5.9},
    {key:15,nome:"Paulo",nota:9.7},
    {key:16,nome:"Diana",nota:2.7},
    {key:17,nome:"Marcos",nota:6.2},
    {key:18,nome:"Tarso",nota:3.4},
    {key:19,nome:"Davi",nota:8.9},
    {key:20,nome:"David",nota:9.1},
    {key:21,nome:"Rainara",nota:2.7}
]*/

const dados = [
    {nome:"Fulano",nota:10},
    {nome:"Sicrano",nota:10},
    {nome:"Beltrano",nota:10}
]

const MyFlatList = () => {
    return (
        <View
            style={{
                flex:1,
                justifyContent:"flex-start",
                alignItems:"center",
                marginTop:20
            }}
        >
            <FlatList 
                data={dados}
                renderItem={
                    ({item})=>{
                        return (
                            <View>
                                <Text style={{fontSize:25,fontWeight:"bold"}}>
                                    {item.nome} - {item.nota}
                                </Text>
                            </View>
                        )
                    }
                }
                keyExtractor={
                    (elemento)=>{
                        return elemento.nome + elemento
                    }
                }
                
            />
        </View>
    )
}
export default MyFlatList