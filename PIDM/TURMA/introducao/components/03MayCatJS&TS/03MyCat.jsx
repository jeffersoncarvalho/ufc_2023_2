import {View,Text} from "react-native"

const MyCat = () => {
    //let nomeDoGato = "Satanás"

    const getFullName = (primeiroNome, segundoNome) => {
        return primeiroNome + " " + segundoNome
    }

    return (
        <View>
            <Text style={{fontSize:20}}>
                O nome do gato é {getFullName("Tom","Felino")}
            </Text>
        </View>
    )
}

export default MyCat