import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PaperProvider } from "react-native-paper"

import ProvaTela01 from "./ProvaTela01"
import ProvaTela02 from "./ProvaTela02"

const NativeStack = createNativeStackNavigator()

const ProvaApp = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <NativeStack.Navigator screenOptions={{ headerShown: false }}>
                    {/*GRUPO DAS TELAS PRINCIPAIS*/}
                    <NativeStack.Group>
                        <NativeStack.Screen name="ProvaTela01" component={ProvaTela01} />
                    </NativeStack.Group>
                    {/*GRUPO DAS TELAS MODAIS*/}
                    <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                        <NativeStack.Screen name="ProvaTela02" component={ProvaTela02} />
                    </NativeStack.Group>
                </NativeStack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}

export default ProvaApp