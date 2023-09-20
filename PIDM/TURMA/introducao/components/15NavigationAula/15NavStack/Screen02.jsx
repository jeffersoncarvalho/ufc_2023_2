import {View,Text,Button} from "react-native"
import myStyle from "./MyStyle"

const Screen02 = ({route,navigation}) => {
    const {name,grade} = route.params
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Screen 02</Text>
            <Text style={myStyle.header}>{name}</Text>
            <Text style={myStyle.header}>{grade}</Text>
            <Button 
                title="Ir Para Screen 03"
                onPress={()=>navigation.navigate("Screen03")}
            />
        </View>
    )
}
export default Screen02