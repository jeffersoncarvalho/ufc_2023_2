import {View,TextInput} from "react-native"
const ChildB = ({dica}) => {
    return (
        <View>
            <TextInput
                style={{
                    height:40,
                    borderColor:"black",
                    borderWidth:2
                }}
                placeholder={dica}
            />
        </View>
    )
}
export default ChildB