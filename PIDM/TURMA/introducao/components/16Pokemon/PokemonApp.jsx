import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "react-native"

import PokedexScreen from "./PokedexScreen"
import PokemonModalScreen from "./PokemonModalScreen"

const NativeStack = createNativeStackNavigator()

const PokemonApp = () => {
    return (
        
        <NavigationContainer>
            <NativeStack.Navigator screenOptions={{headerShown:false}}>
                {/*GRUPO DAS TELAS PRINCIPAIS*/}
                <NativeStack.Group>
                    <NativeStack.Screen name="Pokedex" component={PokedexScreen} />
                </NativeStack.Group>
                {/*GRUPO DAS TELAS MODAIS*/}
                <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                    <NativeStack.Screen name="PokemonModal" component={PokemonModalScreen} />
                </NativeStack.Group>
            </NativeStack.Navigator>
        </NavigationContainer>
       
    )
}

export default PokemonApp