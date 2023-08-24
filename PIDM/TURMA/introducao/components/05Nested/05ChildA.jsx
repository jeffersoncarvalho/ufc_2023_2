import {View,Image} from "react-native"

const ChildA = () => {
    return (
        <View style={{
            backgroundColor:"red",
            flexDirection:"column",
            alignItems:"center"}}>
                
            <Image
                source={{uri:"https://www.quixada.ufc.br/wp-content/uploads/2015/05/Wlademir-Araujo-Tavares1-240x320.png"}}
                style={{width:150,height:150}}
            />
        </View>
    )
}
export default ChildA