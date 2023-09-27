import {Text, Image, ScrollView, TextInput} from "react-native"

const HelloRNV2 = () => {
    return (
        <ScrollView>
            <Text>React Native 4 Cats</Text>
            <Image 
                source={{uri:"https://reactnative.dev/docs/assets/p_cat2.png"}}
                style={{width:200,height:200}}
            />
            <TextInput
                style={{
                    height: 50,
                    borderColor:"black",
                    borderWidth:2,
                    fontSize:22,
                    paddingLeft:10
                }}
             />
        </ScrollView>
    )
}

export default HelloRNV2