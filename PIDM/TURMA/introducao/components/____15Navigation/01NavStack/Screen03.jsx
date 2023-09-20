import { View, Text, Button } from "react-native"
import styles from "./MyStyle"
import MyFancyModal from "../04NavModal/MyFancyModal"
import { useState } from "react"

const student = {nome: "Jefferson", nota: 6.7}

const Screen03 = ({ navigation }) => {
    
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Screen 03</Text>
            <Button
                title="Ir para Screen02"
                onPress={() => navigation.navigate('Screen02',{student})}
            />
            <Button
                title="Abrir Modal"
                onPress={() => navigation.navigate('MyModal')}
            />
            <Button
                title="Abrir Fancy Modal"
                onPress={() => setModalVisible(true)}
            />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <Button
                title="Pular para a primeira tela"
                onPress={() => navigation.popToTop()}
            />
            <MyFancyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}

export default Screen03