import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:10
    },
    cabecalho: {
        fontSize:25,
        fontWeight:'bold',
        margin:15
    },
    label: {
        fontSize:15,
        fontWeight:'bold',
        margin:5
    },
    botao: {
        width:'60%',
        margin:10,
        backgroundColor:'lightblue'
    },
    input: {
        height:45,
        width:'90%',
        borderColor:'gray',
        borderWidth:2,
        paddingLeft:20,
        margin:10
    }
})

export { estilos }