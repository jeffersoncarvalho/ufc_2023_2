import { View, Text, Button } from "react-native"
import styles from "./MyStyle"


const ModalScreen = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.header}>Tela Modal</Text>
            <Button title="Sair" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default ModalScreen