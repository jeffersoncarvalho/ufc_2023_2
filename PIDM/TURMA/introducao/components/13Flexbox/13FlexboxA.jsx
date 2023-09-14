import {View,StyleSheet} from "react-native"

const MyFlexBox = () => {
    return (
        <View style={estilos.container}>
            <View style={estilos.view1}></View>
            <View style={estilos.view2}></View>
            <View style={estilos.view3}></View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop:25,
        backgroundColor:"red",
        flex:1
    },
    view1: {
        backgroundColor: "green",
        flex:1
    },
    view2: {
        backgroundColor: "yellow",
        flex:2
    },
    view3: {
        backgroundColor: "white",
        flex:3
    },
})

export default MyFlexBox