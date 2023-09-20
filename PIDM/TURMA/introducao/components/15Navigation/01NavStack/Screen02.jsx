import { View, Text, Button } from "react-native"
import styles from "./MyStyle"

const Screen02 = ({navigation,route}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Screen 02</Text>
            <Text>{route.params.student.nome}</Text>
            <Text>{route.params.student.nota}</Text>
            <Button
                title="Voltar para Screen01"
                onPress={() => navigation.navigate('Screen01')}
            />
            <Button
                title="Ir para Screen03"
                onPress={() => navigation.navigate('Screen03',{name:"Tela 03 Como Parâmetro"})}
            />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Screen02