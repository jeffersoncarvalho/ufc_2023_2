import {View,Text,StyleSheet} from "react-native"

const MyFlexBox = () => {
    return (
        <View style={estilos.container}>
           <View style={estilos.box_1}></View>
           <View style={estilos.box_2}></View>
           <View style={estilos.box_3}></View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30,
        padding:10,
        backgroundColor:"#C0C0C0"
    },
    box_1: {
        flex: 1,
        backgroundColor:"red"
    },
    box_2: {
        flex: 1,
        backgroundColor:"yellow"
    },
    box_3: {
        flex: 1,
        backgroundColor:"blue"
    }

})

export default MyFlexBox
