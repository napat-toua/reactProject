import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const UserNameandPassWord = () => {

  const [textInputName, setTextInputName] = useState('');
  const [textInputPhone, setTextInputPhone] = useState('');
  const [textInputAddress, setTextInputAddress] = useState('');

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!textInputName.trim()) {
      alert('Please fill Name');
      return;
    }
    if (!textInputPhone.trim()) {
      alert('Please fill Email');
      return;
    }
    if (!textInputAddress.trim()) {
      alert('Please fill Address');
      return;
    }
    alert('Your are Registered Successfully');
    //Check for the Email TextInput
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={textInputName}
        style={styles.textInputStyle}
        onChangeText={(textInputName) => { setTextInputName(textInputName) }}
      />
      <TextInput
        value={textInputPhone}
        style={styles.textInputStyle}
        onChangeText={(textInputPhone) => { setTextInputPhone(textInputPhone) }}
      />
      <TextInput
        multiline
        value={textInputAddress}
        style={styles.textInputStyleMulti}
        onChangeText={(textInputAddress) => { setTextInputAddress(textInputAddress) }}
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
  textInputStyleMulti: {
    width: '100%',
    height: 100,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginBottom: 15,
  },
});