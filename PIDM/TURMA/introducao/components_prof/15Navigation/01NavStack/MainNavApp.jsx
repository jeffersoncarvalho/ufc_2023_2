import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Screen01 from "./Screen01"
import Screen02 from "./Screen02"
import Screen03 from "./Screen03"
import ModalScreen from "./ModalScreen"
//import MyFancyModal from "./MyFancyModal"

const Stack = createNativeStackNavigator()
/*
const MainNavApp = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Screen01" component={Screen01} options={{ title: 'Tela 01' }} />
                <Stack.Screen name="Screen02" component={Screen02} options={{ title: 'Tela 02' }} />
                <Stack.Screen name="Screen03" component={Screen03} options={({ route }) => ({ title: route.params.name })} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}*/

const MainNavApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Group>
                    <Stack.Screen name="Screen01" component={Screen01} options={{ title: 'Tela 01' }} />
                    <Stack.Screen name="Screen02" component={Screen02} options={{ title: 'Tela 02' }} />
                    <Stack.Screen name="Screen03" component={Screen03} options={({ route }) => ({ title: route.params.name })} />
                </Stack.Group>
                <Stack.Group screenOptions={{
                    presentation: "modal",
                    contentStyle: { backgroundColor: "powderblue" },
                    headerShown: false
                }}>
                    <Stack.Screen name="MyModal" component={ModalScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default MainNavApp