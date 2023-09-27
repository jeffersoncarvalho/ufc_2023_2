import { Text, Pressable } from "react-native"

const MyButton = ({ text, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={
                ({ pressed }) => [{
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#2196f3',
                    padding: 5,
                    justifyContent: "center",
                    alignItems: "center",
                }]
            }
        >
            <Text style={{ fontWeight: "bold" }}>{text}</Text>
        </Pressable>
    )
}

export default MyButton