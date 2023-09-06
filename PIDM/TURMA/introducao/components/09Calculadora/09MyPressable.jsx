import { View, Text, Pressable } from "react-native";

const MyPressable = ({ funcao, titulo }) => {
    return (
        <View style={{margin:15}}>
            <Pressable
                onPress={funcao}
                style={
                    ({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#2196f3',
                            padding: 5
                        }
                    ]
                }
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>{titulo}</Text>
            </Pressable>
        </View>
    )
}
export default MyPressable