import { View, Text, Button, SafeAreaView, TextInput} from 'react-native'
import React from 'react'
import { styles } from '../App'

const SecondPage = ({route}) => {
    React.useEffect(() => {
        if (route.params?.name) {}
      }, [route.params?.name]);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.heading}>Thai-Nichi Institute of {"\n"} Technology</Text>
                <Text style={styles.textStyle}>Value passed from First page: {route.params?.name}</Text>
            </View>
        </SafeAreaView>
    )
}

export default SecondPage