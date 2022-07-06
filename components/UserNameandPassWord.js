import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'

const UserNameandPassWord = () => {

    const [userName, setUserName]=useState();
    const [passWord, setPassWord]=useState();

    const showAlert = () => {
        alert('Email: '+ userName + '\nPassword: ' + passWord)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Email'
                value={userName}
                onChangeText = {(userName)=>{setUserName(userName)}}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                value={passWord}
                onChangeText = {(passWord)=>{setPassWord(passWord)}}
                style={styles.input}
            />
            <Button
                title='Submit'
                onPress={showAlert}
                color='#42aaf4'
            />

        </View>
    )
}

export default UserNameandPassWord

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
        },
    input: {
        width: 250,
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        padding:10
    },
    submitButton: {
        
        
    },
    submitButtonText: {
        color: 'white'
    },
});