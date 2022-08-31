import { View, Text, Button, SafeAreaView, TextInput} from 'react-native'
import React from 'react'
import { styles } from '../App'

const FirstPage = ({ navigation}) => {
    const [inputName, setInputName] = React.useState("");
    return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.heading}>Thai-Nichi Institute of {"\n"} Technology</Text>
            <Text style={styles.textStyle}>Please insert your name to pass it to second screen</Text>
            <TextInput
                placeholder="Please your name here"
                style={{ height: 50, width: 250, padding: 10,margin: 10, backgroundColor: "#ccc" }}
                onChangeText={setInputName}
                value={inputName}
            />
            <Button
            color="#0072bb"
                title="GO NEXT"
                onPress={() => {
                    navigation.navigate("Second Page", { name: inputName });
                }}
            />
        </View>
    </SafeAreaView>
    )
}

export default FirstPage