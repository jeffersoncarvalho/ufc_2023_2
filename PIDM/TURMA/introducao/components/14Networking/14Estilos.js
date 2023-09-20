import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "brown"
    },
    description: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
    },
    description_view: { 
        padding: 10, 
        margin: 10, 
        backgroundColor: "antiquewhite", 
        borderColor: "burlywood", 
        borderWidth: 2
    },
    flatlist: {width:"100%",padding:5},
    card: {flex:1,flexDirection:"row", backgroundColor: "burlywood", margin:5, borderStyle:"solid", borderWidth:2, borderColor:"antiquewhite"},
    movie: {flex:1,backgroundColor:"beige",alignItems:"center", justifyContent:"center"}
})

export default estilos