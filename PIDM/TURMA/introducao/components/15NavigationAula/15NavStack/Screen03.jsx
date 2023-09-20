import {View,Text, Button} from "react-native"
import myStyle from "./MyStyle"

const Screen03 = ({navigation}) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Screen 03</Text>
            <Button 
                title="Desempilhar Tudo!"
                onPress={()=>navigation.popToTop()}
            />
        </View>
    )
}
export default Screen03