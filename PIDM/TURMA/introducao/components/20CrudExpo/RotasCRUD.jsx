import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CriarAluno from "./aluno/CriarAluno";
import EditarAluno from "./aluno/EditarAluno";
import ListarAluno from "./aluno/ListarAluno";

const NativeStack = createNativeStackNavigator()

const RotasCRUD = () => {
    return (
        <NavigationContainer>
            <NativeStack.Navigator>
                <NativeStack.Screen
                    name="ListarAluno"
                    component={ListarAluno}
                    options={{ title: "Listar Aluno" }}
                />
                <NativeStack.Screen
                    name="CriarAluno"
                    component={CriarAluno}
                    options={{ title: "Criar Aluno" }}
                />
                <NativeStack.Screen
                    name="EditarAluno"
                    component={EditarAluno}
                    options={{ title: "Editar Aluno" }}
                />
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}

export default RotasCRUD