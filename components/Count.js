import { View, Text, Button } from 'react-native'
import React, { useState , useEffect} from 'react'

const Count = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('use effect 1')
    })

    useEffect(()=>{
        console.log('use effect 2')
    },[count])

    useEffect(()=>{
        console.log('use effect 3')
    },[])
    return (
        <View>
            <Text>{count}</Text>
            <Button
                title='Click ME'
                onPress={()=>setCount(count+1)}
            />
        </View>
    )
}

export default Count