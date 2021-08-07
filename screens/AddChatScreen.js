import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a New Chat',
            headerBackTitle: 'Chat',
        })
    }, [navigation]);

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack();
        }).catch((error) => alert(error.message))
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter a Chat Name"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={<Icon name="wechat" type="antdesign" size={24} color="black" />}
            />
            <View style={styles.buttonContainer}>
                <Button style={styles.button} onPress={createChat} title="Create New Chat" />
            </View>

        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        width: 300
    }
})
