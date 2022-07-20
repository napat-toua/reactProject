import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const UserNameandPassWord = () => {

    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        if (!textInputEmail.trim()) {
            alert('Please Enter Email');
            return;
        }
        alert('Success');
        //Check for the Email TextInput

    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter Name'
                value={textInputName}
                style={styles.textInputStyle}
                onChangeText={(textInputName) => { setTextInputName(textInputName) }}
            />
            <TextInput
                placeholder='Enter Email'
                value={textInputEmail}
                style={styles.textInputStyle}
                onChangeText={(textInputEmail) => { setTextInputEmail(textInputEmail) }}
            />
            <Button
                title='Submit'
                onPress={checkTextInput}
                color='#42aaf4'
            />
        </View>
    )
}

export default UserNameandPassWord

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginBottom: 15,
    },
});