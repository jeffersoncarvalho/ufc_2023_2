import {View,Text, Button} from "react-native"
import myStyle from "./MyStyle"
import MyFancyModal from "./MyFancyModal"
import { useState } from "react"

const student = {name:"Sycran",grade:"A+"}

const Screen01 = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Screen 01</Text>
            <Button 
                title="Ir Para Screen 02"
                onPress={()=>navigation.navigate("Screen02",student)}
            />
            <Button 
                title="Show Modal"
                onPress={()=>setModalVisible(true)}
            />
            <MyFancyModal 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    )
}
export default Screen01