import { View, Text } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
//https://callstack.github.io/react-native-paper/
//https://callstack.github.io/react-native-paper/docs/guides/icons/
const MyIconButton = () => {
    return (
        <PaperProvider>
            <View style={{
                marginTop: 30,
                flex: 1,
                alignItems: "center"

            }}>
                <Text> Teste de Icon Button</Text>
                <IconButton
                    icon="cart"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                />
                <IconButton
                    icon="medical-bag"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                />
                <IconButton
                    icon="tools"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                    disabled={true}
                />
            </View>
        </PaperProvider>

    )
}

export default MyIconButton