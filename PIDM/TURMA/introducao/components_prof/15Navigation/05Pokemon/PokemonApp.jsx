import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

import Pokedex from "./Pokedex"
import CatchModal from "./CatchModal"

const PokemonApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen name="pokedex" component={Pokedex} />
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: "modal" }}>
                    <Stack.Screen name="catch_modal" component={CatchModal} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PokemonApp