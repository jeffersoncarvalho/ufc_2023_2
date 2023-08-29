import { View, Text, Button, Pressable } from "react-native"
import { useState } from "react"
import MyButton from "./06MyButton"

const State = () => {
    //let contador = 0
    const [contador, setContador] = useState(0)
    return (
        <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Contador: {contador}
            </Text>
            <Button
                title="CONTAR + 1"
                onPress={
                    () => {
                        //++ contador
                        //contador ++
                        //contador += 1
                        //contador = contador + 1 
                        //console.log(contador)
                        setContador(prev => prev + 1)
                    }
                }
            />
            
            <Pressable 
                onPress={()=>setContador(prev => prev + 1)}
                style={
                    ({pressed})=>[{
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#2196f3',
                        padding:5,
                        justifyContent:"center",
                        alignItems:"center",
                    }]
                }
            >
                <Text style={{fontWeight:"bold"}}>I'm pressable!</Text>
            </Pressable>

            <MyButton 
                text="Botão!"
                onPress={()=>setContador(prev=>prev+1)}
            />
            
        </View>
    )
}
export default State