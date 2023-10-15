import { PaperProvider} from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ProvaLista from "./ProvaLista"
import ProvaModal from "./ProvaModal"

const NativeStack = createNativeStackNavigator()

const ProvaApp = () => {
    return (
        <PaperProvider>
        <NavigationContainer>
            <NativeStack.Navigator screenOptions={{headerShown:false}}>
                {/*GRUPO DAS TELAS PRINCIPAIS*/}
                <NativeStack.Group>
                    <NativeStack.Screen name="ProvaLista" component={ProvaLista} />
                </NativeStack.Group>
                {/*GRUPO DAS TELAS MODAIS*/}
                <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                    <NativeStack.Screen name="ProvaModal" component={ProvaModal} />
                </NativeStack.Group>
            </NativeStack.Navigator>
        </NavigationContainer>
        </PaperProvider>
    )
}

export default ProvaApp